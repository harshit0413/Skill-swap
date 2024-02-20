import React, { useEffect, useState } from "react";
import sad from "../../Sad";
import firebase from "../../firebase-config";
import { useHistory } from "react-router-dom";

function ConferencePage() {
  let history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        sad();
      } else {
        history.push("/");
        window.location.reload();
      }
    });
  }, []);

  return (
    <>
      <div className="stuff">
        <div className="className">
          <h3 style={{ marginLeft: "20px" }}>You have been matched!</h3>
          <h4 style={{ marginLeft: "20px" }}>
            Your room email is bob@gmail.com
          </h4>
        </div>
      </div>
    </>
  );
}

export default ConferencePage;
