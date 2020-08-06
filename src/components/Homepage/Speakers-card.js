import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const SpeakerInfo = [
  {
    title: "Speaker1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Speaker2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Speaker3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    title: "Speaker4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
];

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10
  }
});

const SpeakerCard = () => {
  const classes = useStyles();
  return (
    <>
      <Box mx={3} display="flex" flexDirection="row" justifyContent="center">
        {SpeakerInfo.map(data => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="img"
                  height="200"
                  image="https://dummyimage.com/16:9x1080"
                  title="Speaker-image"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align={"center"}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    {data.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
export default SpeakerCard;
