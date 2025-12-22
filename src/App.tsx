import Navbar from "@/components/Navbar";
import DragFolder from "./components/DragFolder";
import { folderLogo } from "./assets";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


function App() {


  const containerRef=useRef<HTMLElement| null>(null);
  const targerRef=useRef<HTMLDivElement | null>(null);
  const cloneRef=useRef<HTMLDivElement | null>(null)
  gsap.registerPlugin(Draggable);

const tl =gsap.timeline();
useGSAP(()=>{
Draggable.create(targerRef.current,{
  type:"x,y",
  inertia:true,


  onPress(){
    const target=this.target;

    const clone =target.cloneNode(true);
    clone.style.position="absolute";
    clone.style.pointerEvents = "none";
    // clone.style.transform = target.style.transform;
    target.style.opacity="0.6"
    clone.style.left = target.offsetLeft + "px";
     clone.style.top = target.offsetTop + "px";
    containerRef.current.appendChild(clone);
    cloneRef.current = clone;
  },


  onRelease(){
      const target=this.target;
    if(cloneRef.current){
        cloneRef.current.remove();
      cloneRef.current=null
        target.style.opacity="1"
    }
  }
  
})
},{scope:containerRef.current})





  return (
    <main className="relative min-h-screen w-screen flex flex-col" ref={containerRef}>
      <div className="fixed bottom-0 left-0 w-full">
        <Navbar />
      </div>

      <DragFolder id="Personal" ref={targerRef} img={folderLogo} placeholder="Personal" />
    </main>
  );
}

export default App;
