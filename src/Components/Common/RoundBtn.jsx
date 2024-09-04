import React from 'react'

function RoundBtn({icon, onClick}) {
  return (
    <>
    <button className=' rounded-full text-[#8796a1] p-2 text-xl hover:bg-[#3c454c]' onClick={onClick}>
  {icon}
    </button>
    </>
  )
}

export default RoundBtn
