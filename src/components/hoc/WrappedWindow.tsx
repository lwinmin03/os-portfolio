import React from "react";
import Control from "@/components/common/Control";
import { folderLogo } from "@/assets";

const withWindow = (WrappedComponent) => {
  const HOC = (props) => {
    return (
      <section className="w-2xs bg-white rounded-sm">
        {/* header */}
        <div className="flex items-center justify-between gap-6 px-1.5">
          <img src={folderLogo} className="size-4" alt="folder" />
          <span className="text-sm">Name</span>
          <Control />
        </div>

        {/* body */}
        <div className="p-2">
          <WrappedComponent {...props} />
        </div>
      </section>
    );
  };


//   HOC.displayName = `withWindow(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return HOC;
};

export default withWindow;
