import {
  battery,
  wifiLogo,
} from "@/assets";
import { images } from "@/constant";
import dayjs from "dayjs";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  return (
    <main className="w-full ">
      <nav className=" flex gap-1 items-center justify-between mx-1 px-2 py-1 rounded-md my-1 bg-white/40 ">
        {/* logos */}

        <div className="flex gap-x-2">
          {images.map((item) => (
            <img
             data-tooltip-id="nav-tooltip"
  data-tooltip-content={item.tooltip}
  data-tooltip-place="top-start"
 data-tooltip-variant="light"

 

              key={item.id}
              alt="logo"
              className="size-10
               p-2
               hover:bg-slate-100/50 rounded-sm   transition-all ease-in-out delay-100"
              src={item.href}
            />
          ))}
          <Tooltip id="nav-tooltip" style={{backgroundColor:"bg-red-300"}} className="react-tooltip bg-red-900"/>
        </div>
        <div className="flex items-center  gap-x-5 md:gap-x-2 select-none ">
          <img src={wifiLogo} className="size-4" />

          <img src={battery} className="size-4" />

          <time className="me-1 hidden md:flex">{dayjs().format("dddd MMM D h:mm A")}</time>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
