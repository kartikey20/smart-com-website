import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Objective = () => {
  return (
    <>
      <Box m={3}>
        {" "}
        <Typography variant="h2">Objective</Typography>
      </Box>
      <Box mx={3}>
        <Typography variant={"body1"}>
          <ul>
            <Box my={1}>
            <li>
              To bring together academicians, researchers and industry
              professionals to exchange and share research on various aspects of
              contemporary computing and applications
            </li>
            </Box>
            <Box my={1}>
            <li>
              To create an opportunity to gain insight into advancement in the
              field and provide a platform for industry and academia.
            </li>
            </Box>
            <Box my={1}>
            <li>
              To promote the discipline of contemporary computing and
              applications as a profession to a larger community of academicians
              and professionals.
            </li>
            </Box>
            <Box my={1}>
            <li>
              Participation from Academia, Research Organizations and Industry
              in the form of Technical Sessions, Panel Discussions, Industry
              Forum, Keynote Speeches, Invited & Submitted papers, Special
              Sessions on Selected Topics.
            </li>
            </Box>
          </ul>
        </Typography>
      </Box>
    </>
  );
};
export default Objective;
