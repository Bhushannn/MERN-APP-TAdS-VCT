import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// eslint-disable-next-line
import GameLayout from './layouts/GameLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
// import Blog from './pages/Blog';
import User from './pages/User';
import Map from './game/Map';
import GameEnd from './game/GameEnd';
import MainB from './game/MainBuilding';
// import Helipad from './game/Helipad';
import Lake from './game/Lake';
import Nalanda from './game/Nalanda';
import Nehru from './game/NehruMuseum';
// import TwoPoint from './game/TwoPointTwo';
import Clock from './game/ClockTower';
import Shiru from './game/ShiruCafe';
import TechM from './game/TechMarket';
import JGhosh from './game/JnanGhosh';
import Agri from './game/AgriDept';
// import Adda from './game/Adda';
import Gym from './game/Gymkhana';
// import Old from './game/Old_Archi';
import Toat from './game/Toat';
import Lib from './game/Library';
import Pfc from './game/Pfc';
import Sbi from './game/Sbi';
import Puri from './game/Puri';
import Chedis from './game/Chedis';
import ProfLakeSide from './game/ProfLakeSide';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" replace /> },
        { path: 'home', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'vct', element: <Products /> },

      ]
    },

    {
      path: '/game',
      element: <GameLayout />,
      children: [
        { element: <Navigate to="/game" replace /> },
        { path: 'map', element: <Map /> },
        { path: 'gameEnd', element: <GameEnd /> },
        { path: 'mb', element: <MainB /> },
        // { path: 'helipad', element: <Helipad /> },
        { path: 'lake', element: <Lake /> },
        { path: 'nalanda', element: <Nalanda /> },
        { path: 'nehru', element: <Nehru /> },
        // { path: 'twopoint', element: <TwoPoint /> },
        { path: 'clock', element: < Clock /> },
        { path: 'shiru', element: < Shiru /> },
        { path: 'techm', element: < TechM /> },
        { path: 'jg', element: < JGhosh /> },
        { path: 'agri', element: < Agri /> },
        // { path: 'adda', element: < Adda /> },
        { path: 'gym', element: < Gym /> },
        // { path: 'old', element: < Old /> },
        { path: 'toat', element: < Toat /> },
        { path: 'lib', element: < Lib /> },
        { path: 'pfc', element: < Pfc /> },
        { path: 'sbi', element: < Sbi /> },
        { path: 'puri', element: < Puri /> },
        { path: 'chedis', element: < Chedis /> },
        { path: 'pls', element: < ProfLakeSide /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        // { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
