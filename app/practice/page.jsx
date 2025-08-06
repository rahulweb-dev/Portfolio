'use client'
import React from 'react'
import { useState} from 'react'
const page = () => {
const[name,setName]= useState('')
const[email,setEmail]= useState('')
const[number,setNumber]= useState('')
  const [loading, setLoading] = useState(false);
const handleChange = (e)=> {
const {name,value} = e.target
if(name ==='name'){
  setName(value)
}else if(name === 'email'){
  setEmail(value)
}else if(name === "number"){
  setNumber(value)
}
};

const handleSubmit = (e)=> {
   e.preventDefault(); 
    setLoading(true); 
    
  console.log('Submitted values:', { name, email, number })
  setLoading(false)
}


  return (
    <div className='p-80'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' value={name} onChange={handleChange} name='name'/>
         <input type='email' placeholder='email' value={email} onChange={handleChange} name='email'/>
          <input type='number' placeholder='number' value={number} onChange={handleChange} name='number'/>
          <button type='submit' disabled='loading' >{loading ? 'submiting...': 'submit'}</button>
            <div className='mt-4'>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Number:</strong> {number}</p>
      </div>
      </form>

    </div>
  )
}

export default page