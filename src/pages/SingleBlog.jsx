import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from 'react-icons/fa';
import SideBar from '../components/SideBar';


const SingleBlog = () => {
    const data = useLoaderData();
    //console.log(data)
    const {title, image, author, published_date, category, reading_time, content} = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
        </div>
        
        {/* blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto ml-5'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded' />
                </div>
                <div>
                    <h2 className='text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>
                    {author} | {published_date}</p>
                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>
                    {reading_time}</p>
                    <p className='text-sm text-gray-500 mb-6'>{content}</p>
                    <div className='text-sm text-gray-500 mb-6'>
                        <p>
                            So I started to walk into the water. I won't lie to you boys, I was terrified. 
                            But I pressed on, and as I made my way past the breakers a strange calm came over me. 
                            I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
                        </p> <br />
                        <p>
                            So I started to walk into the water. I won't lie to you boys, I was terrified. 
                            But I pressed on, and as I made my way past the breakers a strange calm came over me. 
                            I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
                        </p> <br />
                        <p>
                            So I started to walk into the water. I won't lie to you boys, I was terrified. 
                            But I pressed on, and as I made my way past the breakers a strange calm came over me. 
                            I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
                        </p> <br />
                        <p>
                            So I started to walk into the water. I won't lie to you boys, I was terrified. 
                            But I pressed on, and as I made my way past the breakers a strange calm came over me. 
                            I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
                        </p> <br />
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <SideBar/>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog