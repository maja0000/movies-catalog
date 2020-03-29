import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Movie.css";

export default function Movie({ uniqueMovieProps, addBook, deleteBook }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={uniqueMovieProps.posterUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {uniqueMovieProps.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {uniqueMovieProps.plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addBook}>
          Add to favourites!
        </Button>
        <Button size="small" color="primary " onClick={deleteBook}>
          Remove from Favourites!
        </Button>
      </CardActions>
    </Card>
  );
}
