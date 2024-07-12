import { Outlet } from "react-router-dom";
import Left from "./components/Leftcomponents/Left";
import Right from "./components/Rightcomponents/Right";


function App() {
  
  return (
    <>
      <main className="bg-black">
        <Left/>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
