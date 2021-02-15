import { Container, Typography } from "@material-ui/core";
import { Outlet, useParams, Link } from "react-router-dom";
import { NotFound } from "../NotFound";
import { shoes } from "../../data.js";
import { useStyles } from "./Products.style";

export const ProductsIndex = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.paddingTop}>
                <Typography variant="h4" className={classes.title}>
                    Products
                </Typography>
                <Outlet />
            </Container>
        </>
    );
};

export function Product() {
    const { productId } = useParams();
    const shoe = shoes[productId];

    if (!shoe) {
        return <NotFound />;
    }
    const { imgSrc, description, price } = shoe;

    return (
        <>
            <h1>Product</h1>
            <ProductItem imgSrc={imgSrc} desc={description} price={price} />
        </>
    );
}
