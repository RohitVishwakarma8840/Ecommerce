import React, { Children } from 'react'
import { Link , useLocation } from 'react-router-dom';
import { useState  } from 'react'

const Layout =({children})=> {
 const [size , setSize]=useState(280);
 const [accountMenu , setAccountMenu]=useState(false);
 const location = useLocation();

 console.log(location);

 const menus=[
  {
    label: "Products",
    icon: <i className="ri-shopping-cart-line mr-2"></i>,
    link : "/admin/product",
  } , 

  {
    label : "Orders",
    icon : <i className="ri-shape-line mr-2"></i>,
    link : "/admin/orders"
  } ,

  {
    label : "Payments",
    icon : ,
    link : "/admin/payments"
  }


 ]

  return (
    <div>

<aside className='bg-indigo-600 fixed top-0 left-0 h-full '
style={{
    width:size,
    transition:'0.3s'
}}

>

<div className='flex flex-col'>
{
  menus.map((item,index)=>(
    <Link key={index}
     to={item.link} 
     className=' px-4 py-3 text-[18px] text-gray-100 hover:bg-rose-600  hover:text-white'
     style={{
      background : (location.pathname===item.link) ? "#E11D48 " : "transparent"
     }}
     
     >
    {item.icon}
    {item.label}
    </Link>

  ))
}



</div>

</aside>
  <section className='bg-gray-100 h-screen '
  style={{
    marginLeft : size,
    transition : '0.3s'
  }}
  >
 
  <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0 '>
   <div className='flex gap-4 items-center'>

    <button className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'
    onClick={()=>setSize(size === 280 ? 0 : 280)}
    >
   <i className="ri-menu-2-line text-xl"></i>
    </button>
   <h1 className='text-md font-semibold'>ShopCode</h1>

   </div>

  <div>
    <button className="relative">
    <img src="/images/avt.jpeg" alt="" className='w-10 h-10 rounded-full' onClick={()=>{setAccountMenu(!accountMenu)}}/>
    {accountMenu && 
       <div className="absolute top-18 right-0 bg-white p-6   w-[200px] shadow-lg ">
      <div>
     <h1 className="text-lg font-semibold">Rohit Vishwakarma</h1>
     <p>rohit@gmail.com </p>
     <div className="h-px bg-gray-200 my-4"/>

     <i class="ri-logout-circle-line mr-2"></i>
     <button>logout</button>

      </div>

</div>
    }
  

    </button>
  </div>


  </nav>

  <div className='p-6'>
    {children}
  </div>

  </section>


    </div>
  )
}

export default Layout