import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

const Paragraph = () => {
  const preventDefault = event => event.preventDefault();

  return (
    <>
      <Typography paragraph={true}>
        Prospective authors are invited to submit original manuscripts
        (unpublished / not communicated / under review of any other conference /
        journal) of research and recent developments in the topics related to
        the conference. It is required that the manuscript follows the standard
        camera-ready format. Please{" "}
        <Link href="#" onClick={preventDefault}>
          click here
        </Link>{" "}
        to download the templates in MS Word.
      </Typography>
      <Typography paragraph={true}>
        Authors should submit the papers online at{" "}
        <Link href="#" onClick={preventDefault}>
          click here
        </Link>{" "}
        All submitted papers will be peer reviewed and evaluated based on
        originality, technical strength, scientific contribution, relevance to
        conference theme, and readability. Acceptance notification of papers
        will be communicated to authors by email. The authors of the accepted
        papers will be allowed to make corrections in accordance with the
        suggestions and comments of the reviewers and submit final camera-ready
        papers within the final submission deadline.
      </Typography>
      <Typography paragraph={true}>
        Topics Covered Technical papers describing original, previously
        unpublished research, not currently under review by another conference
        or journal, are solicited. The specific topics of the conference
        include, but are not limited to:
      </Typography>
    </>
  );
};
export default Paragraph;
