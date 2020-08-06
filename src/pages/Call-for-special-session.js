import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
const CallForSpecialSession = () => {
  return (
    <>
      <Box m={3}>
        <Typography variant={"h3"}>
          Invitation to conduct special session in SMART COM 2020
        </Typography>
      </Box>
      <Box m={3}>
        <Typography variant={"body1"}>
          Dear Sir/ Madam,
          <br />
          <br />
          Greeting from SMART COM 2020!
          <br />
          <br />
          SMART COM Conference team invites you to organize the special session
          on your research domain in International Conference on Smart Machine
          Intelligence and Real-Time Computing(SMART COM 2020), organized at G.B
          pant Institute of Engineering & Technology, Pauri Garhwal,
          Uttarakhand, India during 26th -27th June 2020. We are diligently
          working to bring some of the most knowledgeable researchers from all
          over the world along with the leaders from the industry to explore the
          important topics of research. The two-day conference will include
          technical sessions and keynotes on cutting edge technologies related
          to our industry.
          <br />
          <br />
          The URL for the conference:{" "}
          <Link to={"/"}>https://smartcom2020.com/index.html</Link>
          <br />
          <br />
          CFP for SMART COM 2020:{" "}
          <a href="https://easychair.org/cfp/SMARTCOM2020">
            https://easychair.org/cfp/SMARTCOM2020
          </a>
          <br />
          <br />
          International Conference on Smart Machine Intelligence and Real-Time
          Computing (SMART COM) is organized with the objective of bringing
          together innovative scientists, professors, research scholars,
          students and industrial experts to a common forum. The primary goal of
          the conference is to promote the exchange of innovative scientific
          information between researchers, developers, engineers, students, and
          practitioners. Another goal is to promote the transformation of
          fundamental research into institutional and industrialized research
          and to convert applied exploration into a real-time application.
          <br />
          Kindly increase the value of the conference by being part of this
          conference as a session chair and heading your own session in this
          esteemed conference. We are aware of your networking skills and of
          having an eye to identify quality research papers.
          <br />
          <br />
          <strong>
            Highlights of the conference and Special Session Benefits:
          </strong>
          <br />
          <br />
          <ul>
            <li>Proceedings in the reputed EDP SCIENCE (Proposed).</li>
            <li>
              You will get 25% of the total fees collected in your session.
            </li>
            <li> The minimum number of registrations should be 7.</li>
            <li>
              Extended papers in SCI/Scopus/ESCI/DBLP/ACM Digital Library
              journals. We have already got approval from some Scopus and high
              quality journals.
            </li>
            <li>
              High-quality publishing houses are part of this conference like
              Springer, Bentham Science, Inderscience and many more.
            </li>
            <li> Opportunity to be a Session Chair at the conference.</li>
            <li>
              Extra weightage and support will be provided for your session
              extended paper in SCI/ Scopus Journal
            </li>
            <li>
              Many international and national keynote speakers will be
              delivering their lectures on the latest innovative technologies at
              the conference.
            </li>
            <li> Easy accessibility of the well-connected conference venue.</li>
          </ul>
          If you are interested to conduct a special session, kindly mail us the
          special session proposal at infosmartcom2020@gmail.com latest by 15th
          May 2020 as per the format attached with this mail. SMART COM 2020
          brings together innovative research in the field to a common platform.
          The primary goal of the conference is to promote research and
          developmental activities. Another goal is to promote scientific
          information interchange between researchers, developers, engineers,
          students, and practitioners working in and around the world. All the
          accepted papers (after double-blinded peer review) will be published
          in an Edp Science (Proposed) and further extended accepted papers will
          be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM/EI
          indexed Journals.
          <br/>
          <br/>
          Looking to see you in SMART COM 2020.
          <br/>
          <br/>Sincerely,
          <br/>
          Organizer SMART COM 2020
        </Typography>
      </Box>
    </>
  );
};
export default CallForSpecialSession;
