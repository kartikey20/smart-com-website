import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Email } from "../Global-variables";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 16
  },
  margin: "auto"
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(registrationType, indianFee, foreignFee) {
  return { registrationType, indianFee, foreignFee };
}
const rows = [
  createData("Delegates From Industry", "₹ 2000", "$ 100"),
  createData("Delegates From Academics", "₹ 1500", "$ 75"),
  createData("Full Time Students", "₹ 1000", "$ 50"),
  createData("Attendee Only", "₹ 750", "$ 25")
];

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});
const Registration = () => {
  const classes = useStyles();
  return (
    <>
      <Box m={3}>
        <Typography variant="h2">Registration</Typography>
      </Box>
      <Box m={3}>
        <TableContainer
          style={{ width: 500, margin: "auto" }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="Left">
                  Registration Type
                </StyledTableCell>
                <StyledTableCell align="right">Indian</StyledTableCell>
                <StyledTableCell align="right">Foreigner</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.registrationType}>
                  <StyledTableCell component="th" scope="row">
                    {row.registrationType}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.indianFee}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.foreignFee}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box m={3}>
        <Typography align={"center"}>
          At least one author must register to include the paper in the
          conference on or before 18th June, 2020.
        </Typography>
      </Box>
      <Box m={3}>
        <Typography>
          If more than one author will be coming to attend the conference for
          paper presentation then at least one author need to register as a
          Regular Author/Student Author/Industry Author (as applicable) and rest
          of the authors can register as attendee.
        </Typography>
      </Box>
      <Box>
        <Typography align={"center"}>
          For Account Related Information, Please Check Following Table:
          <Divider />
          Payment Mode: Online (After making payments kindly send the details to{" "}
          <Email /> on same day)
        </Typography>
      </Box>
    </>
  );
};
export default Registration;
