import React from 'react'
import { MdOutlineRemoveCircle } from "react-icons/md";

function Card({user, handleRemove , index}) {
  return (
    <div className=' w-25 sm:w-40 p-[1px] rounded-lg h-full bg-zinc-100' >
    <div className='w-8 overflow-hidden sm:w-14 sm:h-14 object-cover m-auto mt-2 h-8 bg-red-200 rounded-full'><img src={user.imgUrl}/>
    </div>
    <h1 className='text-center font-bold leading-none mt-2 text-sm'>{user.name}</h1>
    <p className='text-xs break-words tracking-tight text-center text-zinc-500'>{user.email}</p>
    <p className='hidden sm:block mt-1 sm:mt-1 text-xs font-semibold text-center leading-none tracking-tight'>Lorem ipsum dolor sit amet adipisicing elit. Quis, eos!</p>
    <button onClick={()=>handleRemove(index)} className=' mb-2 sm:bg-blue-400 sm:px-2 sm:py-[2px] rounded-lg sm:text-sm text-xs flex justify-center items-center sm:font-semibold mt-1 sm:mt-2 mx-auto sm:hover:bg-blue-500 cursor-pointer sm:active:bg-blue-400'>
    <span className="sm:block hidden">Remove</span>
    <span className="sm:hidden block text-lg  text-blue-400 ">
    <MdOutlineRemoveCircle />
    </span>
    </button>
    </div>

  )
}

export default Card