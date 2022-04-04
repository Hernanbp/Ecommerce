import { Product } from "./Product"
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/filter/filterSlice";
import { Filters } from "../filter/Filters";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Spinner } from "../utils/Spinner";

export const Products = () => {

    const [fakeProducts, setFakeProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const fetchProducts = async () => {
        setIsFetching(true);
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setFakeProducts(data);
        setIsFetching(false);
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const selecCategory = useSelector(getSelectedCategory);

    return (
        <div className="prod-cont">
            <h2>Products</h2>
            <Filters />
            <div className="products">
                {isFetching ? (<Spinner />) :
                    (
                        fakeProducts
                            .filter((product) => {
                                if (selecCategory === "All") return true;
                                return selecCategory === product.category;
                            })
                            .map(({ id, title, price, category, image }) => (
                                <Product key={id} title={title} price={price} category={category} image={image} />
                            ))
                    )
                }
            </div>

            <ToastContainer
                position="bottom-right"
            />
        </div>
    )
}
