import React, { useState } from 'react'
import { pp } from '../assets/WhatsAppImages'
import RoundBtn from './Common/RoundBtn'
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import Chat from './Chat';

function LeftChatMenu() {

    const [filter, setFilter]= useState(false);
    const [filterData, setFilteredData] = useState(null)
   const  searchContact = (e)=>{
    const searchValue = e.target.value;
    setFilteredData(searchValue)
    // console.log('searchData', searchValue)
    
   }
    return (
        // main container 
        <div className=' flex flex-col border-r border-neutral-700 overflow-y-scroll w-full h-screen'>
            {/* header div  */}
            <div className='flex justify-between p-2 items-center'>
                {/* person photo */}
                <div>
                    <img src={pp} alt='person' className='w-14 p-2' />
                </div>
                {/* icons of chat menu header  */}
                <div className=' flex justify-evenly items-center '>
                    <RoundBtn icon={<MdPeopleAlt />} />
                    <RoundBtn icon={<TbCircleDashed />} />
                    <RoundBtn icon={<BsFillChatLeftTextFill />} />
                    <RoundBtn icon={<HiDotsVertical />} />
                </div>
            </div>
            {/* Search bar  */}
            <div className='flex justify-between px-2 items-center'>
                <div>
                    <input onChange={searchContact} className='rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light' type='text' placeholder='Search or start a new chat' />
                </div>

                <div>
                    <button className={` text-2xl m-2 p-1 
                    ${filter ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700" : "text-[#8796a1] hover:bg-[#3c454c"}`}
                     onClick={()=>setFilter(!filter)}
                    >
                    
                        <BiFilter />
                    </button>

                </div>


            </div>
            {/* Chat   */}
            <div>
                 <Chat filter={filter} filterData={filterData} />
            </div>
        </div>
    )
}

export default LeftChatMenu
