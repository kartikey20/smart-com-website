import React from "react";
import Description from "../components/Homepage/Description";
import Grid from "@material-ui/core/Grid";
import SpeakerCard from "../components/Homepage/Speakers-card";
import SimpleTab from "../components/Homepage/NotificationTab";
import PictureCarousel from "../components/Homepage/PictureCarousel";

const Homepage = () => {
  return (
    <>
      <PictureCarousel />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Description />
        </Grid>
        <Grid item xs={4}>
          <SimpleTab />
        </Grid>
      </Grid>
      <SpeakerCard />
    </>
  );
};
export default Homepage;
