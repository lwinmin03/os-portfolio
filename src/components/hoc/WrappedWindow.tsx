import React from "react";
import Control from "@/components/common/Control";
import { folderLogo } from "@/assets";
import { WindowType } from "@/type";
import useWindowStore from "@/store/windowStore";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(Draggable);

type WithWindowProps = {
  window: WindowType;
};

function withWindow<P extends object>(
  WrappedComponent: React.ComponentType<P & WithWindowProps>
) {
  const HOC = ({ window, ...props }: WithWindowProps & P) => {
    const closeWindow = useWindowStore((s) => s.closeWindow);
    const bringToFront = useWindowStore((s) => s.bringToFront);
    const Index=useWindowStore((s)=>s.zIndex)
console.log(Index);



    const windowRef = React.useRef<HTMLDivElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);

    // ✅ GSAP animation + draggable in SAME CONTEXT
    useGSAP(() => {
      if (!windowRef.current) return;

      // OPEN animation
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.25,
          ease: "power3.out",
          onComplete: () => {
       
            Draggable.create(windowRef.current!, {
              type: "x,y",
              handle: headerRef.current!,
              inertia: false,
            });
          },
        }
      );
    }, []);

    const handleClose = () => {
      gsap.to(windowRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -20,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => closeWindow(window),
      });
    };

    return (
      <section
        ref={windowRef}
        className={`w-2xl bg-white rounded-sm p-1 absolute z-[${Index}] `}
        onMouseDown={bringToFront}
      >
        {/* header (drag handle) */}
        <div
          ref={headerRef}
          className="flex items-center justify-between gap-6 px-1.5 cursor-move"
        >
          <img src={folderLogo} className="size-4" />
          <span className="capitalize text-sm">{window}</span>
          <Control onClick={handleClose} />
        </div>

        {/* body */}
        <div className="p-2">
          <WrappedComponent {...(props as P)} window={window} />
        </div>
      </section>
    );
  };

  return HOC;
}

export default withWindow;
