import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaGithub,FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='flex flex-row justify-center items-center flex-wrap gap-2 p-2'>
      <ul className="wrapper">
        <li className="icon linkedin">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://www.linkedin.com/in/mortadha-houch-73b232225/">
              <span className="tooltip">linkedin</span>
              <FaLinkedin size={20}/>
            </Link>
          </Button>
        </li>
        <li className="icon github">
          <Button>
            <Link className='flex flex-col justify-center items-center' href="https://github.com/MortadhaHouch">
              <span className="tooltip">github</span>
              <FaGithub size={20}/>
            </Link>
          </Button>
        </li>
      </ul>
    </footer>
  )
}
