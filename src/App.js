import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello';
//import MyClock from './021/MyClock';
import { FaHome } from "react-icons/fa";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';

function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                          flex flex-col justify-center items-center">
      <header className='w-full h-20
                          flex justify-between items-center
                          bg-slate-200'>
        <p className='text-2xl font-bold p-5'>
          React 기초
        </p>
        <p className='text-2xl font-bold p-5'><FaHome />
        </p>
      </header>
      <main className='w-full grow
                          flex flex-col justify-center items-center
                          overflow-y-auto'>
      {/* <MyDiv1/> */}
      {/* <MyList/> */}
      {/* <Lotto /> */}
      <FoodMain/>
      </main>
      <footer className='w-full h-20
                          flex justify-center items-center
                          bg-black text-white'>
        <p>K-digita 8기
          </p>                    
      </footer>
    </div>
  );
}

export default App;
