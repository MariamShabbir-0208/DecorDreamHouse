import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href={"/"} >Home</Link>
      <Link href={"/shop"}>Shop</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/blog"}>Blog</Link>
     
    </div>
  )
}

export default page
