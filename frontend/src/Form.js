import React, { useEffect, useState } from "react";
import Sawo from "sawo";
// import styles from "./styles"

function Form() {

  // state values
  const [userPayload, setUserPayload] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    // Sawo Configuration, required to render form in the container
    // onSuccess callback will get invoke, after successful login

    const sawoConfig = {
      // should be same as the id of the container
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key
      apiKey: "3cd03d45-468b-4a01-902c-97b678143caf",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: onSuccessLogin
    };

    // creating instance
 const sawo = new Sawo(sawoConfig)

    // calling method to show form
    sawo.showForm();
  }, [])



  // Sawo: 
  // OnSuccess Callback method

  const onSuccessLogin = async(payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
  }


  const styles = {
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9"
    },
    sectionStyle: {
        width: "500px",
        height: "400px",
        border: "1px",
        borderColor: "black"
    },

    formContainer: {
        padding: "1rem",
        backgroundColor: "#f3f3f3",
        height: "300px",
        width: "400px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loggedin: {
        olor: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
        padding: "1rem"
    }
}

  return (
    <React.Fragment>
      
      <div style={styles.containerStyle}>
        <section>
          <h1>SawoShop Auth</h1>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.loggedin}>
                <h2>User Successfull login</h2>
                <div>UserId: {userPayload.user_id}</div>
                <div>Verification Token: {userPayload.verification_token}</div>
              </div>
            </React.Fragment>
          )}

          {/* Showing login form */}
          {
            !isLoggedIn && (
              <div style={styles.formContainer} id="sawo-container">
                {/* Sawo form will appear here */}
              </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default Form;
