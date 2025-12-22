import Navbar from "@/components/Navbar";
import DragFolder from "./components/DragFolder";
import { folderLogo } from "./assets";

function App() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="fixed bottom-0 left-0 w-full">
        <Navbar />
      </div>

      <DragFolder img={folderLogo} placeholder="Personal" />
    </main>
  );
}

export default App;
