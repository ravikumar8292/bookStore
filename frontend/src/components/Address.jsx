import React from 'react'
import { FaMapMarkerAlt,FaHeadphonesAlt,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';


const Address = () => {
  return (
    <div>
      <div className="">
        <h1 className='mt-3 mb-2 text-xl'>Address</h1>
        <p className='flex items-center gap-2'><span className='cursor-pointer'><FaMapMarkerAlt/></span><p>Ravi Book Store</p></p>
        <p className='text-sm text-slate-600 mt-1'>Shop No. A-1, BBC Tower, below Bank Of India, near City International School, Aundh, Pune, Maharashtra 411007</p>
      </div>
      <div className="mt-4">
        <h1 className='text-xl'>Mobile No</h1>
        <p className='flex items-center gap-2 mt-1'><span><FaHeadphonesAlt/></span><p>83800 82390</p></p>
      </div>
      <div className="mt-4">
        <h1 className='text-xl'>Email</h1>
        <p className='flex items-center gap-2 mt-1'><span><FaMailBulk/></span><p className='text-sky-800'>raviraj@gmail.com</p></p>
      </div>
      <div className="flex mt-5 gap-4">
        <span className='cursor-pointer hover:scale-110'><FaFacebook size={30} color='#3b82f6'/></span>
        <span className='cursor-pointer hover:scale-110'><FaInstagram size={30} color='red'/></span>
        <span className='cursor-pointer hover:scale-110'><FaLinkedin size={30} color='#3b82f6'/></span>
        <span className='cursor-pointer hover:scale-110'><FaTwitter size={30} color='#3b82f6'/></span>
      </div>
    </div>
  )
}

export default Address
