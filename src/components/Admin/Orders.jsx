import React, { useState } from 'react'
import Layout from './Layout'

function Orders() {
  const [Orders,SetOrders]=useState([
   {
    OrderId: '#y4f89r',
    customerName: 'Rohit Rover',
    email : 'roverrohit@gmail.com',
    mobileNo : '+91 3929393822',
    products : ' lenovo ideapad 360',
    amount : 52000,
    date : '12/9/2024 10:15:14 AM ',
    status : 'pending',
   },

   {
    OrderId: '#y4f89r',
    customerName: 'Rohit Rover',
    email : 'roverrohit@gmail.com',
    mobileNo : '+91 3929393822',
    products : ' lenovo ideapad 360',
    amount : 52000,
    date : '12/9/2024 10:15:14 AM ',
    status : 'pending',
   },

   {
    OrderId: '#y4f89r',
    customerName: 'Rohit Rover',
    email : 'roverrohit@gmail.com',
    mobileNo : '+91 3929393822',
    products : ' lenovo ideapad 360',
    amount : 52000,
    date : '12/9/2024 10:15:14 AM ',
    status : 'pending',
   },

   {
    OrderId: '#y4f89r',
    customerName: 'Rohit Rover',
    email : 'roverrohit@gmail.com',
    mobileNo : '+91 3929393822',
    products : ' lenovo ideapad 360',
    amount : 52000,
    date : '12/9/2024 10:15:14 AM ',
    status : 'pending',
   },
  
  ]);

  return (
    <Layout>
        <div>
        <h1 className='text-xl font-semibold' >Orders</h1>
        <div className='mt-6'>
          <table className=' w-full'> 
            <thead>
         <tr className='bg-rose-600 text-white'>
        <th className='py-4'>Orderid</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Mobile No</th>
        <th>Product</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>


         </tr>
            </thead> 

     <tbody>
     {
       Orders.map((item,index)=>(
        <tr key={index} className='text-center' style={{
          background : (index+1)%2=== 0 ? '' : 'gray'

        }}>
          <td className='py-4'>{item.OrderId}</td>
          <td className='capitalize'>{item.customerName}</td>
          <td>{item.email}</td>
          <td>{item.mobileNo}</td>
          <td className='capitalize'>{item.products}</td>
          <td>₹{item.amount.toLocaleString()}</td>                       
          <td>{item.date}</td>                       
          <td className='capitalize'>
            <select className='border p-2 border-gray-200'>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="dispatched">Dispatched</option>
              <option value="returned">Returned</option>
            </select>
            </td>                       



        </tr>

       ))
     }

     </tbody>



          </table>
        </div>
        </div>
    </Layout>
  )
}

export default Orders