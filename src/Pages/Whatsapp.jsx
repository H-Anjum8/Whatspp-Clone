import React, { useEffect, useState } from 'react'
import LeftChatMenu from '../Components/LeftChatMenu'
import LoadingScreen from '../Components/LoadingScreen';
import RightChatDetails from '../Components/RightChatDetails'

function Whatsapp() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        console.log('increment', increment)
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);
  return (


    <>
  {loading ? (
        <LoadingScreen progress={progress} />
      ) : ( 
      <div className='w-screen h-screen overflow-hidden'>
        {/* 2 component container  */}
        <div className='flex bg-[#111a21]  justify-start h-full w-full'>

          {/* Left chat menu  */}
          <div className=' min-w-[340px] max-w-[500px] w-full h-100 bg-[#111a21]'>
            <LeftChatMenu />
          </div>
          {/* Right chat details section  */}
          <div className='bg-[#ced5d8] min-w-[415px] max-w-[1120px] w-full h-full'>
            <RightChatDetails />
          </div>
        </div>
      </div>)}
     

    </>
  )
}

export default Whatsapp
