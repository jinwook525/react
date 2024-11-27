import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

// import Hello from './01/Hello';
import MyClock from './021/MyClock';
import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RecoilMain from './15/RecoilMain';
import Rest from './16/Rest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 h-screen mx-auto
                          flex flex-col justify-center items-center">
      <header className='w-full h-20
                          flex justify-between items-center
                          bg-slate-200'>
        <p className='text-2xl font-bold p-5'>
          React 기초
        </p>
        <ul className='flex text-xl font-bold m-2 justify-center items-center'>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/clock'>시계</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/lotto'> 로또</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/food'>푸드뱅크</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/boxoffice'>박스오피스</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/traffic'>교통사고</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/gallery'>관광</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/festival'>축제</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/fcst'>일기예보</Link></li>
            <li className='mx-4 p-2 hover:bg-amber-200 rounded-md'><Link to='/rest'>Restfull</Link></li>
            </ul>  
        <p className='text-2xl font-bold p-5'><Link to='/'><FaHome /></Link>
        </p>
      </header>
      <main className='w-full grow
                          flex flex-col items-center
                          overflow-y-auto'>
      <Routes>
        <Route path='/clock' element={<MyClock />}/>     
        <Route path='/lotto' element={<Lotto />}/>  
        <Route path='/food' element={<FoodMain />}/>
        <Route path='/boxoffice' element={<BoxOffice />}/> 
        <Route path='/traffic' element={<Traffic />}/> 
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/festival' element={<Festival />}/>
        <Route path='/fcst' element={<Fcst />}/>
        <Route path='/fcstlist' element={<FcstList />}/>
        <Route path='/div' element={<MyDiv1 />}/>
        <Route path='/recoil' element={<RecoilMain />}/>
        <Route path='/rest' element={<Rest />} />
      {/* <MyDiv1/> */}
      {/* {< MyClock />} */}
      {/* <MyList/> */}
      {/* <Lotto /> */}
      {/* <FoodMain/> */}
      {/* <BoxOffice /> */}
      {/* <MyBox /> */}
      {/* <Traffic /> */}
      {/* <MyRef /> */}
      {/* <Gallery/> */}
      {/* <Festival /> */}
      {/* <RouteMain /> */}
      </Routes> 
      </main>
      <footer className='w-full h-20
                          flex justify-center items-center flex-shrink-0
                          bg-black text-white'>
        <p>K-digita 8기
          </p>                  
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
