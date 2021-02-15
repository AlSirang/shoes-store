import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { ProductsIndex, Product } from "./Components/Products/Products";
import { ProductsList } from "./Components/ProductsList/ProductsList";

import { NotFound } from "./Components/NotFound";
import { Header } from "./Components/Header/Header";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsIndex />}>
                    <Route path="/" element={<ProductsList />} />
                    <Route path=":productId" element={<Product />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
