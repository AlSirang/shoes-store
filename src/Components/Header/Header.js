import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    makeStyles,
    Hidden,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((t) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#000 !important",
    },
    title: {
        flexGrow: 1,
        textTransform: "uppercase",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "1.56rem",
    },
    btn: {
        color: "#000",
        fontWeight: 500,
        fontSize: "1rem",
        textDecoration: "none",
    },
}));

export const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <nav className={classes.root}>
            <AppBar color="inherit" position="static">
                <Toolbar>
                    <Hidden xsDown>
                        <Typography
                            variant="h6"
                            className={classes.title}
                            onClick={() => {
                                navigate("/");
                            }}>
                            Shoe Store
                        </Typography>
                    </Hidden>

                    <Button>
                        <Link to="/" className={classes.btn}>
                            Home
                        </Link>
                    </Button>
                    <Button>
                        <Link to="products" className={classes.btn}>
                            Products
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </nav>
    );
};
