import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((t) => ({
    center: {
        textAlign: "center !important",
    },
    paddingTop: {
        paddingTop: "30px",
    },
}));

export const BigHeading = ({ name }) => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.paddingTop}>
                <Typography variant="h3" className={classes.center}>
                    {name}
                </Typography>
            </Container>
        </>
    );
};
