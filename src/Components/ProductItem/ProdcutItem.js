import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
} from "@material-ui/core";

import { useStyles } from "./ProductItem.style";

export function ProductItem({ imgSrc, desc, price }) {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea className={classes.paddingAround}>
                <CardMedia component="img" image={imgSrc} alt={desc} />
                <CardContent className={classes.subHeading}>
                    <Typography gutterBottom variant="h6">
                        {desc}
                    </Typography>
                    <Typography variant="h6"> {price}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
