import React, { useState } from 'react'
import Navbar from '../header/Navbar'
import Menu from '../components/Menu'
import Footer1 from '../footer/Footer1'
import Footer2 from '../footer/Footer2'
import FooterLast from '../footer/FooterLast'

const BlogDetails = () => {

       const images = [
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/3.png",
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/2.png",
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/1.png",
        ];
    
        
        const [current, setCurrent] = useState(0);
        const length = images.length;
    
        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };
    
        const nextSlide = () => {
            setCurrent((current + 1) % length);
        };
        

  return (
    <>
        <Navbar/>
        <Menu/>
        <div className="bg-[#EFF7FA] flex  justify-center items-center">
            <div className='w-full md:w-[75%] md:flex md:flex-row '>
                {/* Left Box start here  */}
                <div className="relative flex-2/4 w-full md:w-1/2 mx-auto p-4">
                   <div className='relative'>
                        {/* Product Image */}
                        <img 
                            // src="https://klbtheme.com/groci/wp-content/uploads/2018/08/3.png" 
                            src={images[current]} 
                            alt="Groci Product" 
                            className="w-full h-auto object-contain rounded-lg shadow-md"
                        />

                        {/* Prev Icon */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[#3ECCB4] bg-opacity-70 rounded-full flex items-center px-3 py-3 hover:bg-opacity-100 cursor-pointer">
                            <ion-icon name="chevron-back-outline" className="text-xl text-white"></ion-icon>
                        </button>

                        {/* Next Icon */}
                        <button 
                            onClick={nextSlide}
                            className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#3ECCB4] flex items-center bg-opacity-70 rounded-full px-3 py-3 hover:bg-opacity-100 cursor-pointer">
                            <ion-icon name="chevron-forward-outline" className="text-xl text-white"></ion-icon>
                        </button>
                    </div>
                    {/* Content start here  */}
                    <div>
                        <div className="bg-white p-6 rounded shadow-md space-y-4 max-w-3xl mx-auto">
                    
                    {/* <!-- Title --> */}
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Restaurant Employer Read Clients Orders on His Ipad
                    </h1>

                    {/* <!-- Meta Info --> */}
                    <div className="text-sm text-gray-500 flex items-center gap-4 flex-wrap">
                        <span>📅 August 12, 2018</span>
                        <span>📁 Gallery</span>
                        <div className="flex gap-2 flex-wrap">
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">gallery</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">news</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">slider</span>
                        </div>
                    </div>

                    {/* <!-- Main Content --> */}
                    <div className="text-gray-400 space-y-4 text-xs leading-relaxed">
                        <p className='text-lg'>
                        Cras sapien diam, scelerisque ut ornare a, viverra sit amet magna. Mauris sapien dolor,
                        aliquam tristique nulla vitae, ornare bibendum massa. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam ut enim tincidunt, vulputate velit ac, fringilla lacus.
                        </p>

                        <p>
                        Vivamus ultrices posuere mauris vel cursus. Curabitur bibendum erat vel risus dapibus
                        ornare. Pellentesque imperdiet lacus eu metus scelerisque, vitae blandit sapien feugiat.
                        Pellentesque consequat tempor rhoncus. Sed massa nisi, porttitor in nisl nec, dictum tempus
                        risus. Proin malesuada lorem id urna vestibulum, vitae sodales purus fermentum. In facilisis
                        eu neque sed placerat. Nam volutpat nulla sem, non scelerisque velit venenatis nec. Maecenas
                        non volutpat massa. Integer bibendum auctor felis, quis vehicula orci feugiat lobortis.
                        Praesent aliquet risus eleifend augue rhoncus porta. Suspendisse orci tortor, euismod vel
                        pulvinar vitae, adipiscing ut enim. Etiam elementum id turpis ac egestas. Suspendisse potenti.
                        Ut quis interdum nunc.
                        </p>

                        <p>
                        Ut nec quam rhoncus, porta justo sed, tempor felis. Praesent iaculis nunc sed aliquet
                        vestibulum. Aliquam ac purus leo. Donec non gravida arcu. Vestibulum fringilla nibh in orci
                        varius, et ultrices felis pharetra. Morbi sagittis magna id elit viverra euismod. Donec
                        fermentum lectus vel egestas vestibulum. Pellentesque in condimentum purus. Nam volutpat nulla
                        sem, non scelerisque velit venenatis nec. Maecenas non volutpat massa. Integer bibendum auctor
                        felis, quis vehicula orci feugiat lobortis. Praesent aliquet risus eleifend augue rhoncus
                        porta. Suspendisse orci tortor, euismod vel pulvinar vitae, adipiscing ut enim. Etiam
                        elementum id turpis ac egestas. Suspendisse potenti. Ut quis interdum nunc.
                        </p>

                        <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </blockquote>

                        <p>
                        Praesent iaculis nunc sed aliquet vestibulum. Aliquam ac purus leo. Donec non gravida arcu.
                        Vestibulum fringilla nibh in orci varius, et ultrices felis pharetra. Morbi sagittis magna id
                        elit viverra euismod. Donec fermentum lectus vel egestas vestibulum. Pellentesque in
                        condimentum purus. Nam volutpat nulla sem, non scelerisque velit venenatis nec. Maecenas non
                        volutpat massa. Integer bibendum auctor felis, quis vehicula orci feugiat lobortis. Praesent
                        aliquet risus eleifend augue rhoncus porta. Suspendisse orci tortor, euismod vel pulvinar
                        vitae, adipiscing ut enim. Etiam elementum id turpis ac egestas. Suspendisse potenti. Ut quis
                        interdum nunc.
                        </p>
                    </div>
                    </div>

                    </div>
                    {/* Content end here  */}
             <div className="bg-white p-6 mt-6 rounded shadow-md max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Leave a Reply</h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                    </p>

                    <form className="space-y-4">
                        {/* <!-- Comment Textarea --> */}
                        <textarea 
                        rows="6" 
                        placeholder="Comment" 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        ></textarea>

                        {/* <!-- Name --> */}
                        <input 
                        type="text" 
                        placeholder="Name *" 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />

                        {/* <!-- Email --> */}
                        <input 
                        type="email" 
                        placeholder="Email *" 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />

                        {/* <!-- Website --> */}
                        <input 
                        type="text" 
                        placeholder="Website" 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />

                        {/* <!-- Submit Button --> */}
                        <button 
                        type="submit" 
                        className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1.5 rounded-xs text-sm font-medium"
                        >
                        Post Comment
                        </button>
                    </form>
                </div>



                </div>
                {/* left Box end here  */}

                {/* Right Box start here  */}
              
                    <div className="w-full md:w-[300px] flex-2 space-y-6 p-4">
                    {/* Search Box */}
                    <div className="w-full bg-white rounded shadow">
                        <div className="flex py-6 px-4 bg-white">
                            <input
                                type="text"
                                placeholder="Search For"
                                className="w-full px-3  border border-gray-300 rounded outline-none text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-2 text-sm font-medium rounded-r"
                            >
                            <span className='flex items-center'>
                                Search<ion-icon name="arrow-forward-outline" className="pt-1"></ion-icon>
                                </span> 
                            </button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-base font-semibold mb-3">Categories</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><span>›</span> Audio</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Gallery</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Image</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Video</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-white rounded shadow ">
                        <h2 className="text-base font-semibold mb-3 pt-2 pl-4">Newsletter</h2>
                         <div className="flex py-6 px-4 bg-white">
                            <input
                                type="text"
                                placeholder="Your Email address"
                                className="w-full px-3  border border-gray-300 rounded outline-none text-sm"
                            />
                            <button
                                type="submit"
                                className="min-w-20 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-2 text-sm font-medium rounded-r"
                            >
                            <span className='flex items-center'>
                                Sign up<ion-icon name="arrow-forward-outline" className="pt-1"></ion-icon>
                            </span> 
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-base font-semibold mb-3">Tags</h2>
                        <div className="flex flex-wrap gap-1 text-sm">
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">audio</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">envato</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">food</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">gallery</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">grocery</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">image</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">news</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">organic</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">shop</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">slider</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">themeforest</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">video</span>
                        <span className="bg-gray-300 px-3 py-2 text-white rounded-xs">vimeo</span>
                        </div>
                    </div>
                               {/* Meta */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-base font-semibold mb-3">Meta</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><span>›</span> Register</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Login</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Entries feed</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Comments feed</li>
                        <hr className='text-gray-200' />
                        <li className="flex items-center gap-2"><span>›</span> Wordpress.org</li>
                        </ul>
                    </div>
                </div>
                {/* Right Box end here  */}

            </div>
        </div>
        <Footer1/>
        <Footer2/>
        <FooterLast/>
    </>
  )
}

export default BlogDetails