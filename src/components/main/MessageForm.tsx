"use client"
import {motion} from "framer-motion"
import { useState } from "react"
import { IoIosSend } from "react-icons/io";
export default function MessageForm({title,cta}:{title?:string,cta?:string}) {
    const [message, setMessage] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    return (
        <motion.form
            initial={{ opacity: 0 ,x:-100}}
            whileInView={{opacity: 1,x:0}}
            viewport={{
                margin:"-100px"
            }}
            transition={{duration:0.5,ease:"easeInOut",type:"spring"}}
            action="" 
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
                placeholder='first name'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
            />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
            <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                last name
            </label>
            <input
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                id="name"
                name="name"
                value={lastName}
                placeholder='last name'
                onChange={(e)=>setLastName(e.target.value)}
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
            <button disabled={isLoading||firstName.length===0||lastName.length===0||email.length===0||message.length===0} className={`w-full bg-primary px-2 py-1 rounded-md flex flex-row justify-center items-center gap-1 ${isLoading||firstName.length===0||lastName.length===0||email.length===0?'cursor-not-allowed disabled:bg-blue-400':'cursor-pointer'}`}>
                <IoIosSend size={20}/>{" "}<span>{cta||"send"}</span>
            </button>
            </div>
        </motion.form>
    )
}
