import React from "react";
import data from "../SpecialSession/Special-Session-Content";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { ConferenceDate } from "../../Global-variables";
const SpecialSessionPaper = ({ match }) => {
  const name = match.params.name;
  const paperComponent = data.find(data => data.title === name);
  return (
    <>
      <Box m={3}>
        <Typography align={"center"} variant={"h4"}>
          {paperComponent.sessionTitle}
        </Typography>
        <Typography variant={"h6"}>
          <ConferenceDate />
        </Typography>
        <Typography
          align={"center"}
          variant={"h6"}
          color="textSecondary"
          gutterBottom
        >
          Chaired and Organized by
        </Typography>
        <Typography align={"center"} variant={"h6"}>
          {paperComponent.speaker1} <br /> {paperComponent.speaker2}
        </Typography>
        <Box my={3} mx={8}>
          <Typography variant={"body1"}>
            {paperComponent.description}
          </Typography>
          <Box my={3}>
            <Typography variant={"h6"}>
              Topics include, but not limited to:
            </Typography>
          </Box>
          <Box my={3}>
            <Typography>
              {paperComponent.topics.map(string => (
                <li>{string}</li>
              ))}
            </Typography>
          </Box>
          <Box my={3}>
            <Typography variant={"h6"}>Submission Procedure:</Typography>
          </Box>
          <Box my={3}>
            Researchers and practitioners are invited to submit papers for this
            special theme session on {paperComponent.sessionTitle}. All
            submissions must be original and may not be under review by another
            publication.
            <br />
            Interested authors can consult the conference’s guidelines for
            manuscript submissions.
            <br />
            All submitted papers will be reviewed on a double-blind, peer review
            basis.
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SpecialSessionPaper;
