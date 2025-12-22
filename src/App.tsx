import Navbar from "@/components/Navbar";
import DragFolder from "./components/DragFolder";
import { folderLogo } from "./assets";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function App() {
  const GRID_SIZE = 96;

  const containerRef = useRef<HTMLElement | null>(null);
  const targerRef = useRef<HTMLDivElement | null>(null);
  const cloneRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(Draggable);

  const snap = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;
  const tl = gsap.timeline();
  useGSAP(
    () => {
      if (!targerRef.current || !containerRef.current) return;

      Draggable.create(targerRef.current, {
        type: "x,y",
        inertia: false,
        bounds: containerRef.current,
        onPress() {
          const target = this.target as HTMLDivElement;

          const clone = target.cloneNode(true) as HTMLDivElement;
          clone.style.position = "absolute";
          clone.style.pointerEvents = "none";
          clone.style.opacity = "0.4";

          clone.style.left = target.offsetLeft + "px";
          clone.style.top = target.offsetTop + "px";

          containerRef.current!.appendChild(clone);
          cloneRef.current = clone;

          target.style.opacity = "0.6";
        },

        onRelease() {
          const target = this.target as HTMLDivElement;

          gsap.to(target, {
            x: snap(this.x),
            y: snap(this.y),
            duration: 0.1,
            ease: "none",
          });

          if (cloneRef.current) {
            cloneRef.current.remove();
            cloneRef.current = null;
          }

          target.style.opacity = "1";
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      className="relative min-h-screen w-screen flex flex-col"
      ref={containerRef}
    >
      <div className="fixed bottom-0 left-0 w-full">
        <Navbar />
      </div>

      <DragFolder
        id="Personal"
        ref={targerRef}
        img={folderLogo}
        placeholder="Personal"
      />
    </main>
  );
}

export default App;
