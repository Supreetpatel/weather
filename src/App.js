import './App.css';
import { FaReact } from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';


function App() {
  return (
    <>
    <div className="mx-auto max-w-screen-xl mt-4 py-5 px-20 bg-gradient-to-br shadow-lg shadow-slate-400 from-cyan-600  to-blue-700">
      <TopButtons/>
      <Inputs/>
    </div>
    </>
  );  
}

export default App;
