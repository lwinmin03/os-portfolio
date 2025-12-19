import Navbar from "@/components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="fixed bottom-0 left-0 w-full">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
