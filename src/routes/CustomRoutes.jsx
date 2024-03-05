import Navbar from '../components/Navbar/Navbar';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import { Routes, Route } from 'react-router-dom';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/"  element={ <WelcomeScreen /> }/>
            <Route path="/admin" element={ <Navbar /> } />
        </Routes>
    )
}