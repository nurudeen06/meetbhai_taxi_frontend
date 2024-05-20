import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Loader from './components/loader/Loader';
import Airport from './pages/airport/Airport';
import Sidebar from './components/menu/Sidebar';
import Header from './components/header/Header';
import StateMaster from './pages/state/StateMaster';
import CityMaster from './pages/city/CityMaster';
import AdminLogin from './pages/adminAuth/AdminLogin';
import LocalTrips from './pages/localTrips/LocalTrips';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOverLap, setmenuOverLap] = useState(false)
  // const [menuOverLap, setmenuOverLap] = useState(true)
  const [addPakagesModal, setAddPakagesModal] = useState(false);

  const userlocation = useLocation();
  const currentLocation = userlocation.pathname;

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your asynchronous operation here

      // Simulate a delay (remove this line in a real application)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once the data is loaded, set loading to false
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleaddPakagesModal = () => {
    setAddPakagesModal(true)
}

  return (
    <>
      <div className="w-100">
        {loading ?
          <Loader />
          :
          <>
            {currentLocation === "/" ?
              <Routes>
                <Route path="/" element={<AdminLogin />} />
              </Routes>
              :
              <div className='w-100 max-w-[100%] ease-in duration-700 flex gap-4 justify-between'>
                <div className={`col ease-in duration-700 h-[100vh] flex flex-col ${menuOverLap ? " gap-0" : " gap-0"} justify-between `}>
                  <Sidebar menuOverLap={menuOverLap} setmenuOverLap={setmenuOverLap}  setAddPakagesModal={setAddPakagesModal} />
                  <div className={`w-100 duration-700  ${menuOverLap ? "h-[calc(100vh-190px)]" : "h-[calc(100vh-170px)]"} mx-auto shadow-md rounded-tl-lg overflow-hidden `}>
                    <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/airport" element={<Airport />} />
                      <Route path="/local-trips" element={<LocalTrips setAddPakagesModal={setAddPakagesModal} addPakagesModal={addPakagesModal} />} />
                      <Route path="/state" element={<StateMaster />} />
                      <Route path="/city" element={<CityMaster />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          </>
        }
      </div>
    </>
  )
}

export default App
