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
import SpecialSession from "./pages/SpecialSession";
import SpecialSessionPaper from "./components/SpecialSession/SpecialSessionPaper";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/committee" component={Committee} />
          <Route
            path="/paper-submission-guidelines"
            component={PaperSubmissionGuidelines}
          />
          <Route path={"/registration"} component={Registration} />
          <Route path={"/contact-us"} component={ContactForm} />
          <Route path={"/call-for-papers"} component={CallForPapers} />
          <Route
            path={"/call-for-special-session"}
            component={CallForSpecialSession}
          />
          <Route path={"/special-session"} component={SpecialSession} />
          <Route
            path={"/special-sessions/:name"}
            component={SpecialSessionPaper}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
