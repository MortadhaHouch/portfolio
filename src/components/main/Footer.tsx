import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Separator } from './Separator';
import { FaCodepen } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className='flex flex-row justify-center items-center flex-wrap gap-2 p-2 relative'>
      <p>Copyright Mortadha Houch © {new Date().getFullYear()}. All rights reserved.</p>
      <ul className="wrapper flex flex-row justify-center items-center flex-wrap gap-1">
        <li className="icon gmail">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="mailto:mortahouch123@gmail.com">
              <span className="tooltip">Gmail</span>
              <BiLogoGmail size={20}/>
            </Link>
          </Button>
        </li>
        <Separator orientation='vertical' />
        <li className="icon linkedin">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://www.linkedin.com/in/mortadha-houch-73b232225/">
              <span className="tooltip">linkedin</span>
              <FaLinkedin size={20}/>
            </Link>
          </Button>
        </li>
        <Separator orientation='vertical' />
        <li className="icon github">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://github.com/MortadhaHouch">
              <span className="tooltip">github</span>
              <FaGithub size={20}/>
            </Link>
          </Button>
        </li>
        <Separator orientation='vertical' />
        <li className="icon codepen">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://codepen.io/morta_hch">
              <span className="tooltip">codepen</span>
              <FaCodepen size={20}/>
            </Link>
          </Button>
        </li>
        <Separator orientation='vertical' />
        <li className="icon medium">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://mortadha-houch.medium.com/h">
              <span className="tooltip">medium</span>
              <FaMedium size={20}/>
            </Link>
          </Button>
        </li>
      </ul>
    </footer>
  )
}
