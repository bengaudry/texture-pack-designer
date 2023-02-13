import { TopBar } from "@/components/TopBar/TopBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-layout">
      <TopBar />
      <div className="body-layout">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
