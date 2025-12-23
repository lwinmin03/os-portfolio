import React from "react";
import Control from "@/components/common/Control";
import { folderLogo } from "@/assets";

type WithWindowProps = {}; // HOC-specific props (empty for now)

function withWindow<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const HOC = React.forwardRef<HTMLDivElement, P & WithWindowProps>(
    (props, ref) => {
      return (
        <section ref={ref} className="w-2xl bg-white rounded-sm p-1">
          {/* header */}
          <div className="flex items-center justify-between gap-6 px-1.5">
            <img src={folderLogo} className="size-4" alt="folder" />
            <span className="text-sm">Name</span>
            <Control />
          </div>

          {/* body */}
          <div className="p-2">
            <WrappedComponent {...(props as P)} />
          </div>
        </section>
      );
    }
  );

  HOC.displayName = `withWindow(${
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"
  })`;

  return HOC;
}

export default withWindow;
