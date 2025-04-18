import React from 'react'
import Card from './Card'
function Cards({users, handleRemove}) {
  return (
    <>
    {users.map((user, index)=>{
      return <div key={index} className='p-4 shrink-0 flex-wrap flex justify-center min-h-[120px] flex gap-4 gap-4 '>
      <Card handleRemove={handleRemove} index={index} user={user}/>
     </div>
    })}
    
     </>
  )
}

export default Cards