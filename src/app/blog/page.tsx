import React from 'react'
import Image from 'next/image'
import blogimg from '@/../public/images/blogimg.png'
import background from '@/../public/images/background.png'
import Navbar from '@/components/Navbar'
const blog = () => {
  return (
  <div>
    <Navbar/>
    <div >
    <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
    <Image src={background} alt='flower' width={1440} height={316} />
    </div>
      
      {/* Image Section */} 

      <Image src={blogimg} alt='images' width={1440} height={316}/>
    
    </div>
  )
}

export default blog
