import React from 'react'

function Chats({pp, contact, msg, time, unreadMsgs, active, handlePersonDetails}) {
  return (
    <>

    {/* main chat container  */} 
    <div onClick={handlePersonDetails} className={`flex justify-between h-[85px] w-100 items-center hover:bg-[#202d33] px-3
     ${active ?'bg-[#202d33]':''}`}>
      {/* profile photo  */}
      <img src={pp} className='w-12 rounded-full' />
 {/* info container  */}
      <div className='flex justify-between items-center w-[370px]  border-t border-neutral-700  h-100 py-3'>
        {/* name and mesg  */}
        <div className='flex flex-col  text-white '>
        <h6 className=''>{contact}</h6>
        <p className={`text-sm ${unreadMsgs} ? "text-neutral-400":''`}>{msg}</p>
        </div>
        {/* Time and number of messages  */}
        <div className='flex flex-col  text-emerald-500 items-end'>
         <p>{time}</p>
         {unreadMsgs && (
          <div className='rounded-full h-[20px] w-[20px] bg-emerald-500 flex text-emerald-900 justify-center items-center'>
           {unreadMsgs}
          </div>
         )}
        </div>
      </div>


    </div>
    </>
  )
}

export default Chats
