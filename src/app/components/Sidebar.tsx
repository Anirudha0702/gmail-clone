"use client";
import React from "react";
import Compose from "./Buttons/Compose";
import SidebarOption from "./SidebarOption";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
function Sidebar() {
  const [showMore, setShowMore] = React.useState(true);
  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <div className="w-fit flex flex-col  bg-slate-100 gap-4 h-[calc(100svh-4.5rem)] overflow-y-scrollr">
      <Compose style="mx-2" />
      <div className="w-60 ">
        <SidebarOption option={"Inbox"} />
        <SidebarOption option={"Starred"} />
        <SidebarOption option={"Snoozed"} />
        <SidebarOption option={"Sent"} />
        <SidebarOption option={"Drafts"} />
        <div className="px-8 flex items-center gap-4 p-2 cursor-pointer hover:bg-slate-200 rounded-r-xl justify-start select-none" onClick={handleShowMore}>
            {showMore ? <RiArrowDropDownLine size={20} className="scale-150" /> :<RiArrowDropUpLine size={20} className="scale-150" />}
          <span>{showMore ? "More" : "Less"}</span>
        </div>
        {
            !showMore && (
                <>
                <SidebarOption option={"Important"} />
                <SidebarOption option={"Chats"} />
                <SidebarOption option={"All Mail"} />
                <SidebarOption option={"Spam"} />
                <SidebarOption option={"Trash"} />
                <SidebarOption option={"Categories"} >
                    <SidebarOption option={"Social"} />
                    <SidebarOption option={"Promotions"} />
                    <SidebarOption option={"Updates"} />
                    <SidebarOption option={"Forums"} />
                </SidebarOption>
                </>
            )
        }
      </div>
    </div>
  );
}

export default Sidebar;
