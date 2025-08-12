'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaMapMarkerAlt, FaTwitter, FaBuilding, FaUserFriends, FaCodeBranch, FaStar, FaCode, FaFolder } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  hireable: boolean | null;
  type: string;
  site_admin: boolean;
  repos_url: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const GithubProfile = ({ username = 'MortadhaHouch' }: { username?: string }) => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [recentRepos, setRecentRepos] = useState<Repository[]>([]);
  const [starredCount, setStarredCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }
        const userData: GitHubUser = await userResponse.json();
        setUserData(userData);

        // Fetch repositories
        const reposUrl = `https://api.github.com/users/${username}/repos`;
        const reposResponse = await fetch(reposUrl);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repos: Repository[] = await reposResponse.json();
        const sortedRepos = repos
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 4);
        setRecentRepos(sortedRepos);

        // Fetch starred count
        const starredResponse = await fetch(`https://api.github.com/users/${username}/starred?per_page=1`);
        if (starredResponse.headers.has('link')) {
          const linkHeader = starredResponse.headers.get('link');
          const match = linkHeader?.match(/&page=(\d+)>; rel="last"/);
          setStarredCount(match ? parseInt(match[1], 10) : 0);
        } else {
          const starredData = await starredResponse.json();
          setStarredCount(starredData.length);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching GitHub data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error || 'Failed to load GitHub profile'}
      </div>
    );
  }

  const stats = [
    { label: 'Repositories', value: userData.public_repos, icon: <FaCodeBranch className="mr-1" /> },
    { label: 'Gists', value: userData.public_gists, icon: <FaCode className="mr-1" /> },
    { label: 'Followers', value: userData.followers, icon: <FaUserFriends className="mr-1" /> },
    { label: 'Following', value: userData.following, icon: <FaUserFriends className="mr-1" /> },
    { label: 'Starred', value: starredCount, icon: <FaStar className="mr-1" /> },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">GitHub</span> Profile
          </h2>
          
          {/* Profile Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:flex-shrink-0 p-6 flex justify-center">
                <div className="relative h-48 w-48">
                  <Image loading="lazy"
                    src={userData.avatar_url}
                    alt={`${userData.login}'s avatar`}
                    fill
                    className="rounded-full border-4 border-blue-500 object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {userData.name || userData.login} {userData.company && <span className="text-gray-600 dark:text-gray-400">({userData.company})</span>}
                  </h1>
                  <h2 className="text-gray-600 dark:text-gray-400">{userData.hireable ? 'Hireable' : 'Not Hireable'}</h2>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-blue-500 transition-colors"
                    aria-label="GitHub profile"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
                
                {userData.bio && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{userData.bio}</p>
                )}
                
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  {userData.twitter_username && (
                    <a 
                      href={`https://twitter.com/${userData.twitter_username}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:underline"
                    >
                      <FaTwitter className="mr-1" />
                      @{userData.twitter_username}
                    </a>
                  )}
                </div>
                
                <div className="space-y-2 text-left">
                  {userData.company && (
                    <p className="text-gray-700 dark:text-gray-300 flex items-center">
                      <FaBuilding className="mr-2 text-blue-600 dark:text-blue-400" />
                      {userData.company}
                    </p>
                  )}
                  {userData.location && (
                    <p className="text-gray-700 dark:text-gray-300 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-600 dark:text-blue-400" />
                      {userData.location}
                    </p>
                  )}
                  {userData.email && (
                    <a 
                      href={`mailto:${userData.email}`} 
                      className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiMail className="mr-2 text-blue-600 dark:text-blue-400" />
                      {userData.email}
                    </a>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Member since {formatDate(userData.created_at)}
                  </p>
                </div>
              </div>
              
              {/* Right Side - Stats and Repos */}
              <div className="md:w-2/3 p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                    >
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        {stat.icon}
                        {stat.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Recent Repositories */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                    <FaFolder className="mr-2 text-blue-600 dark:text-blue-400" />
                    Recent Repositories
                  </h3>
                  <div className="space-y-4">
                    {recentRepos.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow border-l-4 border-blue-500"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                              {repo.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {repo.description || 'No description provided'}
                            </p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-3">
                              <FaStar className="mr-1 text-yellow-500" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center">
                              <FaCodeBranch className="mr-1" />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>
                        {repo.language && (
                          <div className="mt-2">
                            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {repo.language}
                            </span>
                          </div>
                        )}
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Updated on {formatDate(repo.updated_at)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a
                    href={`${userData.html_url}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View All Repositories
                    <FaGithub className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GithubProfile;
