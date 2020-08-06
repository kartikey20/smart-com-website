import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  RegistrationDate,
  Email,
  CameraReadyDate,
  ConferenceDate
} from "../Global-variables";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SubjectIcon from "@material-ui/icons/Subject";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
function createData(name, mobile_no) {
  return { name, mobile_no };
}

const rows = [
  createData("Dr. Sirish Chandravanshi", "9827063045"),
  createData("Dr. Kireet Semwal", "9897510297"),
  createData("Mr. Jitendra Singh Rauthan", "9997886333"),
  createData("Dr. Agya Ram Verma", "9557331937")
];

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "auto"
  }
});
const PaperSubmissionGuidelines = () => {
  const classes = useStyles();
  return (
    <>
      <Box m={3}>
        <Typography variant="h2">Paper Submission Guidelines</Typography>
      </Box>
      <Box style={{ width: "60%", margin: "auto" }} m={3}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={"h5"}>
              Documents for Camera Ready Paper Submission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box>
                  <a href="">
                    <SubjectIcon /> Camera Ready Paper Format
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> Registration Form
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> Permission Verification Form
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> Permission + Flowchart
                  </a>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <a href="">
                    <SubjectIcon /> Consent To Publish
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> Copyright Form
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> ArtWork
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <SubjectIcon /> T & F Permission FAQ
                  </a>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={"h5"}>
              Camera Ready Paper Submission Guidelines
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Fill Online Registration Form after payment of Registration
                  Fee (on or before <RegistrationDate />: Online Google
                  Registration Form
                </li>
                <li>
                  Submit your Camera Ready manuscript in both PDF and in
                  Microsoft Word format.
                </li>
                <li>
                  Please mail to us filled Registration form , Copyright form,
                  payment Proof ( Registration Fee) and Camera Ready Paper at:
                  <Email /> (on or before <RegistrationDate /> )
                </li>
                <li>
                  If you have any questions regarding registration process of
                  your paper, please feel free to contact us at: <Email />
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={"h5"}>Rules / Guidelines</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Pay Registration Fees Online-NEFT / RTGS / Wire Transfer in
                  our SBI Bank (All authors from India/Outside India). While
                  making online payment, authors are further requested to
                  mention their Paper ID and Author name in Payment Remark to
                  enable us to trace your payment in the Bank Statement. Kindly
                  also note to add the applicable bank charges, if any, for
                  online payment.
                </li>
                <li>
                  If multiple authors of the same paper are attending the
                  conference, then at least one of the author (preferably paper
                  presenter) has to pay the full registration fee, whereas, rest
                  of the authors can register himself/herself as attendee.
                  Different registration forms are required for each author.
                </li>
                <li>
                  At least one author of each accepted paper must register and
                  present the paper at the conference in order to include the
                  paper in the SMART COM proceeding.
                </li>
                <li>No cancellation & refund of Registration Fee.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={"h5"}>
              Instructions for Paper/keynote Online Presentation During Smart
              Com 2020
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  The conference presentations on <ConferenceDate /> will be
                  done only through MS Teams application software.
                </li>
                <li>
                  The username and the password for logging into MS Teams is
                  provided to you through email (to the corresponding authors
                  and other speakers).
                </li>
                <li>
                  The presentation shall be identified through the paper
                  identification number ‘Paper Id’/Username.
                </li>
                <li>
                  The speaker is requested to see the schedule through
                  Conference Website and MS Teams calendar.
                </li>
                <li>
                  The speakers are required to adhere strictly to the declared
                  schedule.
                </li>
                <li>
                  The duration of Paper presentation should not exceed 10
                  minutes. It shall be followed by question/answer session for
                  maximum of 2-3 minutes.
                </li>
                <li>
                  The duration for keynote speech is 30-45 minutes; 10 minutes
                  question/answer session may follow.
                </li>
                <li>
                  Additionally, the authors are requested to prepare 8-10
                  minutes video of their paper presentation & share its Google
                  drive link positively by 24th June 2020. Send the video link
                  with filename including 'paper id' and subject as Video
                  presentation for 'Paper id' to our email id: <Email />
                </li>
                <li>
                  To ensure that no connectivity issue arise at the last moment,
                  a practice session shall be held on 22nd /23rd June 2020. The
                  testing schedule of 22nd June 2020 will be same as that of
                  conference schedule for 26th June 2020. The testing schedule
                  of 23nd June 2020 will be same as that of conference schedule
                  for 27th June 2020.
                </li>
                <li>
                  Please note that you require a high-speed data connectivity
                  for presentation as online video and audio communication will
                  be there. Presenter must be equipped with good computer system
                  having microphone, Webcam, PowerPoint presentation/video and
                  alternate mode of presentation. You may require about 2GB data
                  for 1hour online presentation with all features ON, so be
                  prepared.
                </li>
                <li>
                  All must connect at least 5 minute before the scheduled time
                  of any session with webcam and microphone OFF. Turn ON your
                  webcam and microphone when you are the speaker as per schedule
                  and invited by the Hall controller.
                </li>
                <li>
                  For any query regarding MS Teams operational difficulty
                  (before the conference) you may contact :
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">
                            Mobile Number
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.mobile_no}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
export default PaperSubmissionGuidelines;
