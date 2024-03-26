import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import Dashboard from '../components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/"  element={ <WelcomeScreen /> }/>
            <Route path="/dashboard" element={ <Dashboard/> } />
        </Routes>
    )
}