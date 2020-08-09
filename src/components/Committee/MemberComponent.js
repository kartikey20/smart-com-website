import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import data from "../../components/Committee/MemberData";

export default function MemberCommittee() {
  return (
    <>
      <Grid container direction={"row"} spacing={2}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <Grid item xs={4}>
              <Box my={3}>
                <Typography align={"center"} variant="h4">{key}</Typography>
              </Box>
              <Card>
                <CardContent>
                  <Typography variant={"h7"} color="textSecondary">
                    {value.map(props => {
                      return (
                        <>
                          <Typography variant={"h5"}>{props.name}</Typography>
                          {props.designation}
                          <br />
                          {props.location}
                        </>
                      );
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
