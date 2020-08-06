import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Committee from "./pages/Committee";
import PaperSubmissionGuidelines from "./pages/Paper-submission-guidelines";
import Registration from "./pages/Registration";
import ContactForm from "./pages/Contact-us";
import CallForPapers from "./pages/Call-for-papers";
import CallForSpecialSession from "./pages/Call-for-special-session";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Committee" component={Committee} />
          <Route
            path="/Paper-Submission-Guidelines"
            component={PaperSubmissionGuidelines}
          />
          <Route path={"/Registration"} component={Registration} />
          <Route path={"/Contact-us"} component={ContactForm} />
          <Route path={"/Call-For-Papers"} component={CallForPapers} />
          <Route
            path={"/Call-For-Special-Session"}
            component={CallForSpecialSession}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
