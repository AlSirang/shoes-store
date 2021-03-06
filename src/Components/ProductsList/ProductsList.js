import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProductItem } from "../ProductItem/ProdcutItem";
import { shoes } from "../../data";

const useStyles = makeStyles((t) => ({
    linkStyle: {
        textDecoration: "none",
    },
}));

export function ProductsList() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                {Object.entries(shoes).map(
                    ([shoe, { imgSrc, description, price }], i) => {
                        return (
                            <Grid item md={4} sm={6} key={shoe}>
                                <Link
                                    to={`/products/${shoe}`}
                                    className={classes.linkStyle}>
                                    <ProductItem
                                        key={shoe}
                                        imgSrc={imgSrc}
                                        desc={description}
                                        price={price}
                                    />
                                </Link>
                            </Grid>
                        );
                    }
                )}
            </Grid>
        </>
    );
}
