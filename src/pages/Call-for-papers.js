import React from "react";
import Paragraph from "../components/Call-For-Paper/Paragraph";
import CallForPapersAccordion from "../components/Call-For-Paper/Accordion";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
const CallForPapers = () => {
  return (
    <>
        <Box m={3}>
            <Typography variant="h2">Call For Papers</Typography>
        </Box>
      <Box m={3}>
        <Paragraph />
        <CallForPapersAccordion />
      </Box>
    </>
  );
};
export default CallForPapers;
