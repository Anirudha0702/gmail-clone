import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { VscSettings } from "react-icons/vsc";
import { GoDotFill } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="relative h-16  flex items-center pr-4 justify-between bg-slate-50">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 bg-blue-50 flex items-center justify-center">
          <RxHamburgerMenu size={25} />
        </div>
        <Image
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail Logo"
          width={109}
          height={40}
        />
      </div>
      <div className="grow max-w-[40rem] relative flex items-center  rounded-full py-2 px-4 h-12 gap-2  bg-blue-50">
        <IoIosSearch size={25} />
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent focus:outline-none grow"
          placeholder="Search Email"
        />
        <VscSettings
          size={25}
          style={{
            rotate: "90deg",
          }}
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center  rounded-full bg-blue-50 h-12 p-2 gap-2">
          <GoDotFill  className="text-green-500" />
          <span>Active</span>
          <RiArrowDropDownLine  className=""/>
        </button>
        <FiHelpCircle size={25} />
        <IoSettingsOutline size={25} />
        <CgMenuGridR size={25} />
        <Image
        src="https://lh3.googleusercontent.com/a/ACg8ocK9GKJnigu8vrGL7bcTWVI8Ip4C5xaAL0O69ncUHNTwoCHy6K7Y=s96-c"
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
