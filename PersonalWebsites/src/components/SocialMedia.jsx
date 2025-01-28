import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcon=(url,icon)=>{
    return (
        <a href={url} className=" hover:text-[#c3f5ff] transition-colors duration-100 ease-linear">{icon}</a>
    )
}

function SocialMedia() {
  return (
    <div>
        <div>
            <p className="text-3xl text-white font-[500]">Get in Touch</p>
        </div>
        <div className="text-5xl my-1 text-white flex gap-1">
           {SocialIcon("https://github.com/santoshvandari",<FaGithub/>)}
           {SocialIcon("https://linkedin.com/in/santoshvandari",<FaLinkedin/>)}
           {SocialIcon("https://instagram.com/santosh.vandari",<FaInstagram/>)}
        </div>
    </div>
  )
}

export default SocialMedia
