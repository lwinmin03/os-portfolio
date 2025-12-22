import React, { forwardRef } from "react";
import { Drag } from "@/type";

const DragFolder = forwardRef<HTMLDivElement, Drag>(
  ({ img, placeholder,id }, ref) => {
    return (
      <div
      id={id}
        ref={ref}
        className="flex flex-col w-20 rounded-sm hover:bg-white/20 px-3 py-1 select-none"
      >
        <div className="flex items-center justify-center">
          <img src={img} className="size-10" />
        </div>

        <span className="overflow-hidden w-full font-light text-white text-center">
          {placeholder}
        </span>
      </div>
    );
  }
);

export default DragFolder;
