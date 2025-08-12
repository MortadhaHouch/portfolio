'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, GitPullRequest, GitCommit, Star, GitBranch, RefreshCw, BarChart2, Grid } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdWarning } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface ContributionDay {
  contributionCount: number;
  date: string;
  weekday: number;
}

interface GitHubStats {
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  contributions: ContributionDay[];
}

export function GitHubStats({ username = 'MortadhaHouch' }: { username?: string }) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'chart'>('grid');

  const fetchGitHubData = useCallback(async () => {
    try {
      setLoading(true);
      setIsRefreshing(true);
      
      // Fetch user data and events in parallel
      const [userRes, eventsRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/events?per_page=100`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      ]);

      if (!userRes.ok || !eventsRes.ok || !reposRes.ok) {
        throw new Error('Failed to fetch GitHub data');
      }

      const [userData, events, repos] = await Promise.all([
        userRes.json(),
        eventsRes.json(),
        reposRes.json()
      ]);

      // Process events for stats
      const stats = events.reduce<{ 
        commits: number; 
        prs: number; 
        issues: number;
      }>((acc, event) => {
        if (event.type === 'PushEvent') acc.commits += event.payload.size || 0;
        if (event.type === 'PullRequestEvent') acc.prs += 1;
        if (event.type === 'IssuesEvent') acc.issues += 1;
        return acc;
      }, { commits: 0, prs: 0, issues: 0 });

      // Calculate stars and forks
      interface Repo {
        stargazers_count: number;
        forks_count: number;
      }
      
      const totalStars = (repos as Repo[]).reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
      const totalForks = (repos as Repo[]).reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

      // Generate contribution data
      const today = new Date();
      const contributions = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() - (29 - i));
        return {
          contributionCount: Math.floor(Math.random() * 10), // Random count for demo
          date: date.toISOString().split('T')[0],
          weekday: date.getDay()
        };
      });

      setStats({
        totalCommits: stats.commits,
        totalPRs: stats.prs,
        totalIssues: stats.issues,
        totalRepos: userData.public_repos || 0,
        totalStars,
        totalForks,
        contributions
      });
      
      setError('');
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError('Unable to load GitHub activity. Rate limit may have been exceeded.');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [username]);

  const handleRefresh = () => {
    fetchGitHubData();
  };

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  if (loading && !isRefreshing) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <MdWarning className="w-8 h-8 text-red-500" />
          <p className="text-red-700 dark:text-red-300">{error}</p>
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="mt-2"
          >
            {isRefreshing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Refreshing...
              </>
            ) : (
              'Try Again'
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="space-y-6 max-w-7xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          GitHub Activity
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="h-8 w-8 p-0" 
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard 
          icon={<GitCommit className="w-5 h-5" />} 
          label="Commits" 
          value={stats?.totalCommits.toLocaleString() || '0'}
        />
        <StatCard 
          icon={<GitPullRequest className="w-5 h-5" />} 
          label="Pull Requests" 
          value={stats?.totalPRs.toLocaleString() || '0'}
        />
        <StatCard 
          icon={<MdWarning className="w-5 h-5" />} 
          label="Issues" 
          value={stats?.totalIssues.toLocaleString() || '0'}
        />
        <StatCard 
          icon={<Code className="w-5 h-5" />} 
          label="Repositories" 
          value={stats?.totalRepos.toLocaleString() || '0'}
        />
        <StatCard 
          icon={<Star className="w-5 h-5" />} 
          label="Stars" 
          value={stats?.totalStars.toLocaleString() || '0'}
        />
        <StatCard 
          icon={<GitBranch className="w-5 h-5" />} 
          label="Forks" 
          value={stats?.totalForks.toLocaleString() || '0'}
        />
      </div>
      
      <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Contribution Activity (Last 30 days)
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent/50'}`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('chart')}
              className={`p-1.5 rounded-md ${viewMode === 'chart' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent/50'}`}
              title="Chart View"
            >
              <BarChart2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        {viewMode === 'grid' ? (
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-7 gap-1">
            {stats?.contributions.map((day, i) => {
              const level = day.contributionCount === 0 ? 0 :
                          day.contributionCount < 3 ? 1 :
                          day.contributionCount < 5 ? 2 :
                          day.contributionCount < 7 ? 3 : 4;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.01 }}
                  className={`h-3 w-full aspect-square rounded-sm ${
                    level === 0 ? 'bg-muted' :
                    level === 1 ? 'bg-green-200 dark:bg-green-900' :
                    level === 2 ? 'bg-green-400 dark:bg-green-700' :
                    level === 3 ? 'bg-green-500 dark:bg-green-600' :
                    'bg-green-600 dark:bg-green-500'
                  }`}
                  title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={stats?.contributions.map(day => ({
                  date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                  contributions: day.contributionCount
                }))}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  interval={Math.floor(stats?.contributions.length / 5) || 1}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  width={20}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                  }}
                  labelStyle={{ fontWeight: 600, marginBottom: 4 }}
                  formatter={(value: number) => [`${value} contributions`, 'Contributions']}
                />
                <Bar 
                  dataKey="contributions" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StatCard({ 
  icon, 
  label, 
  value,
  isLoading = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className="bg-background p-4 rounded-lg border border-border">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-background p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center gap-2 text-muted-foreground mb-1">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {value}
      </div>
    </motion.div>
  );
}
