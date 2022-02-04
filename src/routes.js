import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from './pages/Error';
import Home from './pages/Home/index';
import Links from './pages/Link/index';

export function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/links" element={<Links/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}