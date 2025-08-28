"use client"
import {motion} from "framer-motion"
import { FormEvent, useEffect, useRef, useState } from "react"
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "../ui/toaster";
export default function MessageForm({title,cta}:{title?:string,cta?:string}) {
    const [message, setMessage] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState<{isSent:boolean,message:string}>({isSent:false,message:""});
    const { toast } = useToast()
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
                    from_name:userName,
                    from_email:email,
                    to_email:process.env.NEXT_PUBLIC_MY_EMAIL as string,
                    message
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
        <motion.form
            initial={{ opacity: 0 ,x:-100}}
            whileInView={{opacity: 1,x:0}}
            viewport={{
                margin:"-100px",
                once:true
            }}
            ref={formRef}
            transition={{duration:0.5,ease:"easeInOut",type:"spring"}}
            onSubmit={handleSubmit}
            className='w-[clamp(300px,75%,400px)] h-[clamp(300px,auto,500px)] flex flex-col justify-center items-center gap-3 p-5 rounded-md border backdrop-blur-lg'>
            <div className="w-full flex flex-col justify-center items-start">
                <h2 className="w-full text-2xl text-center">{title||"Get in touch"}</h2>
                <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                    first name
                </label>
                <input
                    className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    id="name"
                    name="name"
                    placeholder='user name'
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                email
            </label>
            <input
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
                <label htmlFor="message">Type a message</label>
                <textarea rows={7} onChange={(e)=>setMessage(e.target.value)} name="message" value={message} id="message" placeholder='message' className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none placeholder:text-gray-600"></textarea>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
            <button 
                disabled={isLoading||userName.length===0||email.length===0||message.length===0} 
                className={`w-full bg-primary px-2 py-1 rounded-md flex flex-row justify-center items-center gap-1 ${isLoading||userName.length===0||email.length===0?'cursor-not-allowed disabled:bg-blue-400':'cursor-pointer'}`}
            >
                <IoIosSend size={20}/>{" "}<span>{cta||"send"}</span>
            </button>
            </div>
            <Toaster className={`${messageStatus.isSent?"bg-green-400 border-2 border-green-700":"bg-red-400 border-2 border-red-700"}`} />
        </motion.form>
    )
}
