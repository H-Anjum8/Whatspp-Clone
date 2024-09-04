import React, { useEffect, useRef, useState } from 'react';
import RoundBtn from './Common/RoundBtn';
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { cs1 } from '../assets/WhatsAppImages'; // Removed unused cs2
import { messagesData } from '../assets/data';
import { BiHappy } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import Message from './Message';
import { getTime } from './Common/Logic';
import EmojiPicker from 'emoji-picker-react';

function RightChatDetails() {
  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);
  const [msgData, setMsgData] = useState(messagesData);
  const [typing, setTyping] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const addMessage = (msg) => {
    setMsgData(prevMessages => [...prevMessages, msg]);
  };

  const handleEmojiClick = (emojiData) => {
    inputRef.current.value += emojiData.emoji;
    inputRef.current.focus();
    setShowPicker(false);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);

      addMessage({
        img: imageUrl,
        time: getTime(),
        sent: true,
      });
      event.target.value = '';
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const pickerStyle = {
    backgroundColor: '#202d33',
    color: '#ff6347',
    border: '1px solid #ddd',
  };

  const handleInputChange = () => {
    setTyping(inputRef.current.value.length > 0);
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [msgData]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      {/* Contact Info Nav */}
      <div className='bg-[#202d33] flex justify-between h-[60px] px-2'>
        {/* Profile Pic */}
        <div className='flex justify-between px-1 w-[150px] py-2'>
          <img src={cs1} alt='profile image' className='w-8 rounded-full' />
          <div className='flex flex-col text-white'>
            <h6 className='font-semibold'>Coding Sport</h6>
            <p className='text-[#8796a1] text-xs'>online</p>
          </div>
        </div>
        {/* Button Container */}
        <div className='flex justify-center p-2'>
          <RoundBtn icon={<MdSearch />} />
          <RoundBtn icon={<HiDotsVertical />} />
        </div>
       
      </div>
      {/* Message Container */}
      <div className="bg-[#0a131a]  px-[120px] py-[0%] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-full">
        {msgData.map((msg, index) => (
          <Message
            key={index}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef}   className=' h-[100px] bg-transparent '/> {/* Ensure this is at the end of your message list */}
      </div>
      {/* Bottom Sending Container */}
      <div className='flex px-2 h-[60px] bg-[#202d33] items-center'>
        {/* Emoji Button */}
        <RoundBtn icon={<BiHappy />} onClick={() => setShowPicker(!showPicker)} />
        {showPicker && <div className='absolute z-1000 bottom-14' style={{ position: 'absolute', zIndex: 1000 }}>
          <EmojiPicker onEmojiClick={handleEmojiClick} style={pickerStyle} />
        </div>}
        {/* Upload Button */}
        <span className="mr-2">
          <RoundBtn icon={<AiOutlinePaperClip onClick={handleIconClick} />} />
        </span>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }} // Hide the input element
          onChange={handleFileChange}
        />
        {/* Text Typing Field */}
        <input type='text' placeholder='type a Message' onChange={handleInputChange} ref={inputRef}
          className='w-full my-4 rounded-md bg-[#30363a] text-neutral-200 p-3 placeholder:text-sm placeholder:text-[#8796a1] outline-none' />
        {/* Send Button */}
        <span className='ml-2'>
          {typing ?
            (<RoundBtn icon={<MdSend />} onClick={handleInputSubmit} />) : (<RoundBtn icon={<BsFillMicFill />} />)
          }
        </span>
      </div>
    </div>
  );
}

export default RightChatDetails;
