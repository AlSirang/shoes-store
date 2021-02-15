import { CardMedia, makeStyles } from "@material-ui/core";
import { BigHeading } from "../GeneralComponents/BigHeading";
import logo from "./nike-logo.png";

const useStyles = makeStyles((t) => ({
    img: {
        width: "50%",
        height: "50%",
        margin: "20px auto",
    },
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <>
            <BigHeading name="Welcome To Shoe Store" />
            <CardMedia
                className={classes.img}
                component="img"
                image={logo}
                alt="nike logo"
            />
        </>
    );
};
