import { CgInbox } from "react-icons/cg";
import { IoMdStarOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from 'next/image'
function SidebarOption({
  option,
  size = 20,
  children,
}: {
  option: string;
  size?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="px-8 flex items-center gap-4 p-2 cursor-pointer hover:bg-slate-200 rounded-r-xl justify-start select-none">
      {option === "Inbox" && <CgInbox size={size} />}
      {option === "Starred" && <IoMdStarOutline size={size} />}
      {option === "Snoozed" && <MdAccessTime size={size} />}
      {option === "Sent" && <AiOutlineSend size={size} />}
      {option === "Drafts" && <IoDocumentOutline size={size} />}
      {option === "Important" && <MdLabelImportantOutline size={size} />}
      {option === "Chats" && <MdOutlineMessage size={size} />}
      {option === "All Mail" && <LuMails size={size} />}
      {option === "Spam" && <RiSpam2Line size={size} />}
      {option === "Trash" && <FaRegTrashAlt size={size} />}
        {option === "Categories" && (
            <Image
            alt='categories'
            src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/label_baseline_nv700_20dp.png'
            height={20}
            width={20}
            
            />
        )}
      <span>{option}</span>

      {/* <div className="">
        {children}
      </div> */}
    </div>
  );
}

export default SidebarOption;
