import React, { useEffect, useState } from 'react'
import { ImFolderDownload } from "react-icons/im";
import Chats from './Chats';
import { chatsData } from '../assets/data';

                 
function Chat({ filter,filterData }) {
    const [chats, setChats] = useState(chatsData)



    useEffect(()=>{

        // if (searchValue === "") {
    //     setFilteredData(null);
    //   }
      const filter = chatsData?.filter((food) =>
      food.contact?.toLowerCase()?.includes(filterData?.toLowerCase())
    );
    setChats(filter);
    },[filterData])

    useEffect(() => {
        const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;
        setChats(newChats);
    }, [filter]);


    return (
        <>
            {/* chat main container  */}
            <div className='flex flex-col overflow-y-clip cursor-pointer h-100'>
                {/* archive container  */}
                <div className='flex justify-between px-4 py-2 items-center  min-h-[55px] hover:bg-[#202d33]'>
                    {/* icon and text container  */}
                    <div className='flex p-2 justify-between w-[120px]'>

                        <span className="text-emerald-500 text-lg">
                            <ImFolderDownload />
                        </span>
                        <h6 className=' text-white'> Archieved</h6>

                    </div>
                    {/* Number of archieved chat  */}
                    <p className="text-emerald-500 text-xs font-light ">7</p>

                </div>
                {/* Chat container  */}

                {chats.map((chat, i) => {
                    return (
                        <Chats
                            pp={chat.pp}
                            contact={chat.contact}
                            msg={chat.msg}
                            time={chat.time}
                            unreadMsgs={chat.unreadMsgs}
                            active={i === 0}
                            
                        />

                    )
                })}


            </div>
        </>
    )
}

export default Chat
