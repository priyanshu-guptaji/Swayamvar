import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from './Pages/components/Sidebar';

function App(){
  return <>
    <Header/>
    <Sidebar />
    <main className="main-content">
      <Outlet/>
    </main>
  </>
}

export default App;