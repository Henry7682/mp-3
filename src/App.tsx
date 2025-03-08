import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import References from './pages/References';

function Root() {
    return (
        <>
            <Header />
            <div id={"column"}>
                <Navbar />
                <Routes>
                    <Route path="/*"
                           element={<Home />} />
                    <Route path="/education/*"
                           element={<Education />} />
                    <Route path="/experience/*"
                           element={<Experience />} />
                    <Route path="/skills/*"
                           element={<Skills />} />
                    <Route path="/projects/*"
                           element={<Projects />} />
                    <Route path="/references/*"
                           element={<References />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}
