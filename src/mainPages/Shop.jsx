import React from 'react'
import Navbar from '../header/Navbar'
import Menu from '../components/Menu'
import Footer1 from '../footer/Footer1'
import Footer2 from '../footer/Footer2'
import FooterLast from '../footer/FooterLast'
import shoplogo from '../assets/img/shop1.jpg'

const Shop = () => {
  return (
   <>
    <Navbar/>
    <Menu/>
        <div>
            <div className='w-full md:flex md:items-center md:justify-center border border-gray-200'>
                <div className='w-[73%] py-5'>
                    <p className='font-medium text-gray-600'><ion-icon name="home"></ion-icon>Home 
                     <span className='text-gray-500 text-xs pl-1'> 
                         / Shop / Fruits and Vegetables
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='bg-[#EFF7FA]'>
            <section>
                <div className="container w-full flex justify-center items-center">
                    <div className="row w-full md:w-[75%]">
                        <div className='flex'>
                            {/* Left side content start  here   */}
                            <div className='flex-1 hidden md:block'>
                                <div class="w-full p-4 space-y-6 ">

                                    <div class="bg-white p-4 shadow rounded">
                                        <h2 class="text-orange-500 font-semibold border-b pb-2 mb-3">Filter By Price</h2>
                                        <div class="flex items-center space-x-2">
                                        {/* <input type="range" min="0" max="40" value="0" class="w-full accent-orange-500" /> */}
                                        <input type="range" min="0" max="40" value="40" class="w-full accent-orange-500" />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <button class="mt-3 bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] text-[14px] text-white px-4 py-1 rounded shadow">FILTER</button>
                                            <p class="mt-2 text-gray-600">Price: £0 — £40</p>
                                        </div>
                                    </div>

                                    <div class="bg-white p-4 shadow rounded">
                                        <h2 class="text-orange-500 font-semibold border-b-4 border-[#EFF7FA]  pb-2 mb-3">Product Categories</h2>
                                        <ul class="space-y-2 text-gray-400 text-[14px]">
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Beverages <span class="ml-auto">+</span></label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Biscuits, Snacks & Chocolates</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Breakfast & Dairy</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Fruits & Vegetables</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Furnishing & Home Needs</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Grocery & Staples</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Home & Kitchen</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Household Needs</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Meats, Frozen & Seafood</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Noodles, Sauces & Instant Food</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Personal Care</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> Pet Care</label></li>
                                        </ul>
                                    </div>

                                    <div class="bg-white p-4 shadow rounded">
                                        <h2 class="text-orange-500 font-semibold border-b-4 border-[#EFF7FA] pb-2 mb-3">Product Status</h2>
                                        <ul class="space-y-2  text-gray-400 text-[14px]">
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> In Stock</label></li>
                                        <li><label class="flex items-center gap-2"><input type="checkbox" /> On Sale</label></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            {/* Left side content end  here   */}

                            {/* right side content end  here   */}
                            <div className="flex-3">
                                <div class="bg-[#eef7fb] p-6 space-y-4">
                                {/* <!-- Top Header --> */}
                                <div class="bg-[#2f3f50] max-h-16 text-white flex items-center justify-between rounded">
                                    {/* <div class="flex items-center gap-2">
                                    <img src="/path/to/logo.png" alt="logo" class="h-10" />
                                    <span class="text-lg font-bold">GROCI</span>
                                    <span class="text-sm">FOOD & GROCERY</span>
                                    </div> */}
                                    <div>
                                        <img src={shoplogo} className='max-h-16 w-fit' alt="logo" />
                                    </div>
                                    {/* <h1 class="text-xl font-semibold">Quality & Freshness Guaranteed! Good Health.</h1> */}
                                    </div>

                                {/* <!-- View + Sort Options --> */}
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                         <button class="bg-white px-2 pt-1.5 text-3xl border rounded"><ion-icon name="grid"></ion-icon></button>
                                         <button class="bg-white px-2 pt-1.5 text-3xl border rounded"><ion-icon name="menu"></ion-icon></button>
                                    </div>
                                        <select class="border px-4 py-2 rounded">
                                            <option>Sort by latest</option>
                                            <option>Sort by price</option>
                                            <option>Sort by popularity</option>
                                        </select>
                                </div>

                                {/* <!-- Products Grid --> */}
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {/* <!-- Product Card --> */}
                                  <div class="w-full bg-white border h-[370px] border-gray-100 md:w-[250px]">
                                    <div class="flex justify-between text-[11px] text-green-500 px-6 pt-5">
                                        <p>17%</p>
                                        <span class="h-5 w-5 border border-green-400 rounded flex justify-center items-center">
                                        <div class="h-2 w-2 bg-green-500 rounded-full"></div>
                                        </span>
                                    </div>

                                    <div class="flex flex-col justify-between items-center">
                                        <div class="overflow-hidden">
                                        <div class="h-44 w-44 object-cover transition-all duration-500 transform hover:scale-110">
                                            <a href="detail.html">
                                            <img src="/images/product.jpg" alt="Product" class="w-full h-full object-contain" />
                                            </a>
                                        </div>
                                        </div>

                                        <p class="text-[#0CC5B7] font-bold mt-2">Organic Sweet Corn</p>

                                        <span class="font-bold text-sm text-gray-400">
                                        In stock - <span class="font-medium">1 kg</span>
                                        </span>

                                        <span class="font-bold text-sm text-gray-400 mt-5">
                                        <del>$10.00</del>
                                        <span class="font-bold text-black ml-2">$8.50</span>
                                        </span>

                                        {/* <div class="h-11 mt-4 w-[100px] bg-[#FFF1F0] rounded-full flex justify-around items-center text-gray-500 md:w-[140px]">
                                        <button class="h-8 w-8 bg-white rounded-full flex justify-center items-center">-</button>
                                        <p>1</p>
                                        <button class="h-8 w-8 bg-white rounded-full flex justify-center items-center">+</button>
                                        </div> */}

                                        <button class="h-8 w-[110px] mt-3 text-xs bg-[#FF8650] rounded-full text-white flex justify-center items-center gap-1 font-bold">
                                        <ion-icon name="cart-outline"></ion-icon>
                                        Add to cart
                                        </button>
                                    </div>
                                    </div>


                                    {/* <!-- Product Card 2 --> */}
                                  <div class="w-full bg-white border h-[370px]  border-gray-100 md:w-[250px]">
                                    <div class="flex justify-between text-[11px] text-green-500 px-6 pt-5">
                                        <p>17%</p>
                                        <span class="h-5 w-5 border border-green-400 rounded flex justify-center items-center">
                                        <div class="h-2 w-2 bg-green-500 rounded-full"></div>
                                        </span>
                                    </div>

                                    <div class="flex flex-col justify-between items-center">
                                        <div class="overflow-hidden">
                                        <div class="h-44 w-44 object-cover transition-all duration-500 transform hover:scale-110">
                                            <a href="detail.html">
                                            <img src="/images/product.jpg" alt="Product" class="w-full h-full object-contain" />
                                            </a>
                                        </div>
                                        </div>

                                        <p class="text-[#0CC5B7] font-bold mt-2">Organic Sweet Corn</p>

                                        <span class="font-bold text-sm text-gray-400">
                                        In stock - <span class="font-medium">1 kg</span>
                                        </span>

                                        <span class="font-bold text-sm text-gray-400 mt-5">
                                        <del>$10.00</del>
                                        <span class="font-bold text-black ml-2">$8.50</span>
                                        </span>

                                        {/* <div class="h-11 mt-4 w-[100px] bg-[#FFF1F0] rounded-full flex justify-around items-center text-gray-500 md:w-[140px]">
                                        <button class="h-8 w-8 bg-white rounded-full flex justify-center items-center">-</button>
                                        <p>1</p>
                                        <button class="h-8 w-8 bg-white rounded-full flex justify-center items-center">+</button>
                                        </div> */}

                                        <button class="h-8 w-[110px] mt-3 text-xs bg-[#FF8650] rounded-full text-white flex justify-center items-center gap-1 font-bold">
                                        <ion-icon name="cart-outline"></ion-icon>
                                        Add to cart
                                        </button>
                                    </div>
                                  </div>


                                    {/* <!-- Product Card 3 --> */}
                                    <div class="bg-white p-4 rounded shadow relative">
                                    <span class="absolute top-2 left-2 bg-green-100 text-green-700 px-2 text-sm font-medium rounded">34%</span>
                                    <span class="absolute top-2 right-2 border-2 border-green-500 w-4 h-4 rounded-full bg-green-500"></span>
                                    <img src="/path/to/papaya.png" alt="papaya" class="w-full h-32 object-contain" />
                                        <h2 class="text-teal-600 font-semibold mt-4">Native Organic Papaya</h2>
                                    <p class="text-gray-600 text-sm flex items-center gap-1">
                                        <span class="text-green-500"><i class="fas fa-check-circle"></i></span> In Stock - 1 kg
                                    </p>
                                    <p class="mt-2 text-sm">
                                        <span class="line-through text-gray-500">£15.00</span>
                                        <span class="text-lg font-bold text-black ml-2">£9.99</span>
                                    </p>
                                    <button class="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2">
                                        <i class="fas fa-shopping-cart"></i> Add to cart
                                    </button>
                                    </div>
                                </div>
                                </div>

                            </div>

                            {/* right side content end  here   */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    <Footer1/>
    <Footer2/>
    <FooterLast/>   
   </>
  )
}

export default Shop