import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import data from "../components/SpecialSession/Special-Session-Content";
const SpecialSession = () => {
  return (
    <>
      <Box m={3}>
        <Typography variant="h2">Special Session</Typography>
      </Box>
      {data.map(props => {
        return (
          <>
            <Box m={3}>
              <Box style={{ margin: "auto", width: "55%" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href={`http://localhost:3000/special-sessions/${props.title}`}
                >
                  <Card>
                    <CardContent>
                      <Typography
                        align={"center"}
                        color={"textPrimary"}
                        variant={"h6"}
                      >
                        {props.sessionTitle}
                      </Typography>
                      <Typography
                        align={"center"}
                        color="textSecondary"
                        gutterBottom
                      >
                        Chaired and Organized by
                      </Typography>
                      <Typography
                        align={"center"}
                        color={"textPrimary"}
                        variant={"h6"}
                      >
                        {props.speaker1} <br />
                        {props.speaker2}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Box>
            </Box>
          </>
        );
      })}
    </>
  );
};
export default SpecialSession;
