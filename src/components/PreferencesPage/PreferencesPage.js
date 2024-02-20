import React from "react";
import firebase from "../../firebase-config";
import Checkbox from "@material-ui/core/Checkbox";
import LoginBackground from "./Preferences.png";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import "./PreferencesPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(5),
    textAlign: "left",
    top: "210px",
    left: "150px",
    right: "300px",
    bottom: "350px",
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    WebDevelopment1: false,
    GameDevelopment1: false,
    MobileDevelopment1: false,
    ARVR1: false,
    Cybersecurity1: false,
    MachineLearningAndAI1: false,
    InterviewSkills1: false,
    JobApplications1: false,
    WorkplaceEtiquette1: false,
    Productivity1: false,
    Communication1: false,
    Music1: false,
    WebDevelopment2: false,
    GameDevelopment2: false,
    MobileDevelopment2: false,
    ARVR2: false,
    Cybersecurity2: false,
    MachineLearningAndAI2: false,
    InterviewSkills2: false,
    JobApplications2: false,
    WorkplaceEtiquette2: false,
    Productivity2: false,
    Communication2: false,
    Music2: false,
  });
  const handleChange = async (event) => {
    var email = null;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        email = user.email;
      }
    });
    setState({ ...state, [event.target.name]: event.target.checked });
    const db = await firebase.firestore();
    if (true) {
      setState({ ...state, [event.target.name]: event.target.checked });

      db.collection("preferences").doc(`${email}`).set(state);
      const citiesRef = db.collection("citipreferenceses");
      const snapshot = await citiesRef.where("capital", "==", false).get();
    }
  };

  const {
    WebDevelopment1,
    GameDevelopment1,
    MobileDevelopment1,
    ARVR1,
    Cybersecurity1,
    MachineLearningAndAI1,
    InterviewSkills1,
    JobApplications1,
    WorkplaceEtiquette1,
    Productivity1,
    Communication1,
    Music1,
    WebDevelopment2,
    GameDevelopment2,
    MobileDevelopment2,
    ARVR2,
    Cybersecurity2,
    MachineLearningAndAI2,
    InterviewSkills2,
    JobApplications2,
    WorkplaceEtiquette2,
    Productivity2,
    Communication2,
    Music2,
  } = state;

  return (
    <div
      style={{
        backgroundImage: `url(${LoginBackground})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Development</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={WebDevelopment1}
                  onChange={handleChange}
                  name="WebDevelopment1"
                  color="primary"
                />
              }
              label="Web Development"
            >
              <div>
                {" "}
                control=
                {
                  <Checkbox
                    checked={WebDevelopment1}
                    onChange={handleChange}
                    name="WebDevelopment1"
                    color="primary"
                  />
                }
              </div>
            </FormControlLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={GameDevelopment1}
                  onChange={handleChange}
                  name="GameDevelopment1"
                  color="primary"
                />
              }
              label="Game Development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={MobileDevelopment1}
                  onChange={handleChange}
                  name="MobileDevelopment1"
                  color="primary"
                />
              }
              label="Mobile Development"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Specialisations</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ARVR1}
                  onChange={handleChange}
                  name="ARVR1"
                  color="primary"
                />
              }
              label="AR/VR"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Cybersecurity1}
                  onChange={handleChange}
                  name="Cybersecurity1"
                  color="primary"
                />
              }
              label="Cybersecurity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={MachineLearningAndAI1}
                  onChange={handleChange}
                  name="MachineLearningAndAI1"
                  color="primary"
                />
              }
              label="Machine Learning and AI"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Technical Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={InterviewSkills1}
                  onChange={handleChange}
                  name="InterviewSkills1"
                  color="primary"
                />
              }
              label="Interview Skills"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={JobApplications1}
                  onChange={handleChange}
                  name="JobApplications1"
                  color="primary"
                />
              }
              label="Job Applications"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={WorkplaceEtiquette1}
                  onChange={handleChange}
                  name="WorkplaceEtiquette1"
                  color="primary"
                />
              }
              label="Workplace Etiquette"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Other</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Productivity1}
                  onChange={handleChange}
                  name="Productivity1"
                  color="primary"
                />
              }
              label="Productivity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Communication1}
                  onChange={handleChange}
                  name="Communication1"
                  color="primary"
                />
              }
              label="Communication"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Music1}
                  onChange={handleChange}
                  name="Music1"
                  color="primary"
                />
              }
              label="Music"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Development</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={WebDevelopment2}
                  onChange={handleChange}
                  name="WebDevelopment2"
                />
              }
              label="Web Development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={GameDevelopment2}
                  onChange={handleChange}
                  name="GameDevelopment2"
                />
              }
              label="Game Development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={MobileDevelopment2}
                  onChange={handleChange}
                  name="MobileDevelopment2"
                />
              }
              label="Mobile Development"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Specialisations</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ARVR2}
                  onChange={handleChange}
                  name="ARVR2"
                />
              }
              label="AR/VR"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Cybersecurity2}
                  onChange={handleChange}
                  name="Cybersecurity2"
                />
              }
              label="Cybersecurity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={MachineLearningAndAI2}
                  onChange={handleChange}
                  name="MachineLearningAndAI2"
                />
              }
              label="Machine Learning and AI"
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Technical Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={InterviewSkills2}
                  onChange={handleChange}
                  name="InterviewSkills2"
                />
              }
              label="Interview Skills"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={JobApplications2}
                  onChange={handleChange}
                  name="JobApplications2"
                />
              }
              label="Job Applications"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={WorkplaceEtiquette2}
                  onChange={handleChange}
                  name="WorkplaceEtiquette2"
                />
              }
              label="Workplace Etiquette"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Other</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Productivity2}
                  onChange={handleChange}
                  name="Productivity2"
                />
              }
              label="Productivity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Communication2}
                  onChange={handleChange}
                  name="Communication2"
                />
              }
              label="Communication"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Music2}
                  onChange={handleChange}
                  name="Music2"
                />
              }
              label="Music"
            />
          </FormGroup>
        </FormControl>
      </div>
      <Link to="/conference">
        <button className="button-submit center">Submit</button>
      </Link>
    </div>
  );
}
