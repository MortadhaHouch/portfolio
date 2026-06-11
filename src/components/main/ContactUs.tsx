'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { Label } from '@/components/ui/label';
import { SendIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser"
import { FaSpinner } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export default function ContactUs({
  children,
  className
}:{
    children?:React.ReactNode
    className?:string
}) {
  const [messageData, setMessageData] = useState(
    {
      userName: '',
      email: '',
      message: '',
    }
  );
  const [messageStatus, setMessageStatus] = useState<{isSent:boolean,message:string}>({isSent:false,message:""});
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(formRef, { once: true });
    useEffect(()=>{
        emailjs.init({publicKey:process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY})
    },[])
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name:messageData.userName,
                    from_email:messageData.email,
                    to_email:process.env.NEXT_PUBLIC_MY_EMAIL as string,
                    message:messageData.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            console.log(response);
            if(response.status === 200){
                formRef.current?.reset();
                setMessageStatus({isSent: true,message:"Message has been successfully sent"});
                toast({
                    title:"success",
                    description:messageStatus.message
                })
            }else{
                setMessageStatus({isSent:false,message:"Failed to send message"});
                toast({
                    title:"Failure",
                    description:messageStatus.message,
                })
            }
        } catch (error) {
            console.log(error);
            setMessageStatus({isSent:false,message:"Failed to send message"});
        }
    }

  return (
    <section className={cn("bg-background relative w-full max-w-7xl mx-auto p-2 md:p-4 lg:p-8 rounded-md", className)}>
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #0a53e6, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #0a53e6, transparent 70%)`,
        }}
      />
      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="border-border/40 bg-secondary/20 mx-auto w-full rounded-[28px] border shadow-xl backdrop-blur-sm p-2">
          <div className="grid md:grid-cols-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative p-2 md:p-10 w-full">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6" 
                ref={formRef}
              >
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-primary dark:text-white text-center">Contact Me</motion.h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={messageData.userName}
                      onChange={(e) => setMessageData({...messageData, userName: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="border-slate-500 dark:border-slate-300"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={messageData.email}
                      onChange={(e) => setMessageData({...messageData, email: e.target.value })}
                      placeholder="Enter your email"
                      required
                      className="border-slate-500 dark:border-slate-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={messageData.message}
                    onChange={(e) => setMessageData({...messageData, message: e.target.value })}
                    placeholder="Enter your message"
                    required
                    className="h-40 resize-none border-slate-500 dark:border-slate-300"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] gap-2"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2"><FaSpinner /><span>Sending</span></div>
                    ) : 
                    (
                      <div className="flex items-center justify-center gap-2"><SendIcon /><span>Send</span></div>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-blue-950 to-blue-900 shadow-xl shadow-black/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  Presenting you with the best UI possible.
                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      baseColor={[1, 0, 0.3]}
                      markerColor={[1, 0.3, 0.4]}
                      glowColor={[1, 0.3, 0.4]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
