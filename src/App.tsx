import { TopBar } from "@/components/TopBar/TopBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-layout">
      <TopBar />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
