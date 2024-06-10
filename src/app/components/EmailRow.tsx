import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MailProps } from "../types";
import Button from "@mui/material/Button";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideoCallIcon from "@mui/icons-material/VideoCall";
const EmailRow: React.FC<MailProps> = ({ username, body, time }) => {
  return (
    <div className="cursor-pointer text-sm relative h-8   w-full px-6 grid grid-cols-[10rem_auto_5rem] font-bold bg-blue-50 hover:shadow-[1px_1px_0_2px_rgba(0,0,0,0.5)] hover:bg-white ">
      <div className="flex gap-2 items-center border-b border-t border-b-gray-200 border-t-gray-200">
        <input type="checkbox" name="" id="" />
        <FaRegStar className="text-gray-400" />
        <div className="group relative">
          <p>{username}</p>
          <div className="absolute w-80 h-44 bg-gray-100 hidden group-hover:block z-10 shadow-lg p-2 border border-gray-400">
            <div className="h-28 flex justify-evenly items-center gap-2 border-b border-b-gray-700">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="profile"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="grow px-3">{username}</span>
              <Button>
                <PersonAddIcon fontSize="small" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button sx={{ bgColor: "#86b0fa" }} size="small">
                <span>Open Detailed View</span>
              </Button>
              <IconButton>
                <EmailIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <CalendarMonthIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <ChatBubbleIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <VideoCallIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl line-clamp-1  grow">{body}</div>
      <div className="text-gray-400">{time}</div>
    </div>
  );
};

export default EmailRow;
