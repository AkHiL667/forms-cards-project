import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [users, setusers] = useState([])

  const formData = (data)=>{
   return setusers([...users,data])
  }
  const handleRemove = (index)=>{
    setusers(users.filter((item, i)=>index !== i))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-start '>
      <div className='mt-0 sm:mt-30 container mx-3 sm:mx-9'>
          <Cards handleRemove = {handleRemove} users={users} />
          <Form formData={formData} />
          {console.log(users)}
        </div>
    </div>
  )
}

export default App