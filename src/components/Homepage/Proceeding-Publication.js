import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Image from 'react-bootstrap/Image'

const ProceedingPublication = () => {
  return (
    <>
      <Box m={3}>
        {" "}
        <Typography variant="h2">Proceeding Publication</Typography>
      </Box>
      <Box mx={3}>
        <Typography variant={"body1"}>
          The Conference Proceedings will be published in CRC Press/ Balkema,
          Taylor & Francis Group, submitted for indexing by Clarivate Analytics
          (Formerly known as Thomson Reuters/ISI), Web of Knowledge, SciVerse,
          SCOPUS, EI Compendex, Google Scholar and many others.
        </Typography>
      </Box>
      <Box m={3} display="flex" justifyContent="center">
          <Image src="https://dummyimage.com/640x4:3" thumbnail />
      </Box>
    </>
  );
};
export default ProceedingPublication;
