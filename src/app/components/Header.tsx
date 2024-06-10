import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline, IoMdApps} from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Header() {
  return (
    <div className="inline-block w-full">
      <div className="bg-slate-800 flex justify-between w-full h-fit items-center p-2 overflow-hidden">
        <div className="flex items-center gap-4">
          <Image
            src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
            loading="eager"
            width={120}
            height={30}
            alt="gmail Logo"
          />
        </div>

        <div className=" rounded-full p-3 w-1/2  flex gap-2 bg-slate-200">
          {/* <Search /> */}
          <input
            type="text"
            placeholder="Search in mail"
            className="bg-inherit w-11/12 outline-none"
          />
          {/* <Tune /> */}
        </div>

        <div className="flex justify-between gap-2 items-center ">
          <div className="bg-slate-200 p-3 flex items-center cursor-pointer rounded-full">
            <div className="bg-green-600 rounded-full h-3 w-3 mr-2"></div>
            <span>Active</span>
            <RiArrowDropDownLine />
          </div>
          <IoIosHelpCircleOutline className="cursor-pointer" />
          <IoSettingsOutline className="cursor-pointer" />
          <IoMdApps className="cursor-pointer" />
          <Image
          alt="Profile Picture"
          src='https://lh3.googleusercontent.com/a/ACg8ocK9GKJnigu8vrGL7bcTWVI8Ip4C5xaAL0O69ncUHNTwoCHy6K7Y=s96-c'
          height={30}
          width={30}
          className="rounded-full"/>
          
        </div>
      </div>
    </div>
  );
}
