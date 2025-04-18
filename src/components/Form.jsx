import React from 'react'
import { useForm } from "react-hook-form";


function Form({formData}) {
const {register, handleSubmit, reset} = useForm();
  const handleFormSubmitReset = (data) => {
    formData(data);
    reset();
  }
  return (
    <div className=''>
      <form onSubmit={handleSubmit(handleFormSubmitReset)} className=' mt-4 items-center justify-center flex flex-col sm:flex-row gap-4'  action="">
        <input {...register("name")} className= "bg-white  w-70 px-3 py-1 rounded-lg border-solid border-blue-400 border-2" type="text" placeholder='enter name' />
        <input {...register("email")} className= "bg-white w-70 px-3 py-1 rounded-lg border-solid border-blue-400 border-2 " type="email" placeholder='enter the email' />
        <input {...register("imgUrl")} className= "bg-white  w-70 px-3 py-1 rounded-lg border-solid border-blue-400 border-2" type="text" placeholder='image url' />
        <input  className= "bg-blue-400 px-3 w-20 rounded-lg cursor-pointer font-semibold hover:bg-blue-500 active:bg-blue-400" type="submit"  />
      </form>
    </div>
  )
}
 
export default Form