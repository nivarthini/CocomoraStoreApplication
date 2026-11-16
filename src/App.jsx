import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import BasketProvider from './Context/BasketContext';
import CoconutFlesh from './DiscoverComponents/CoconutFlesh';
import CoconutFlower from './DiscoverComponents/CoconutFlower';
import CoconutHusk from './DiscoverComponents/CoconutHusk';
import CoconutLeaves from './DiscoverComponents/CoconutLeaves';
import CoconutMaterials from './DiscoverComponents/CoconutMaterials';
import CoconutOil from './DiscoverComponents/CoconutOil';
import CoconutShell from './DiscoverComponents/CoconutShell';
import CoconutWater from './DiscoverComponents/CoconutWater';
import Footer from './Components/Footer';
import About from './Pages/About';
import BasketPage from './Pages/BasketPage';
import Business from './Pages/Business';
import Community from './Pages/Community';
import Contact from './Pages/Contact';
import Discover from './Pages/Discover';
import Featured from './Pages/Featured';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Wishlist from './Pages/Wishlist';

function DiscoverLayout() {
    return <Outlet />;
}

export default function App() {
    return (
        <BrowserRouter>
            <BasketProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/discover" element={<DiscoverLayout />}>
                        <Route index element={<Discover />} />
                        <Route path="coconut-flesh" element={<CoconutFlesh />} />
                        <Route path="coconut-flower" element={<CoconutFlower />} />
                        <Route path="coconut-water" element={<CoconutWater />} />
                        <Route path="coconut-oil" element={<CoconutOil />} />
                        <Route path="coconut-shell" element={<CoconutShell />} />
                        <Route path="coconut-husk" element={<CoconutHusk />} />
                        <Route path="coconut-leaves" element={<CoconutLeaves />} />
                        <Route path="coconut-materials" element={<CoconutMaterials />} />
                    </Route>

                    <Route path="/featured" element={<Featured />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </BasketProvider>
        </BrowserRouter>
    );
}
