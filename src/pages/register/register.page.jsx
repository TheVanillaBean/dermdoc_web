import React from "react";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

class Register extends React.Component {
  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <section>
          <div className="container">
            <h1>
              Register before completing this visit. This helps us ensure we can properly keep track of your visit.
            </h1>

            <form>
              <label for="fname">Email:</label>
              <br />
              <input type="text" id="fname" name="fname" value="obadri@gmail.com" />
              <br /> <br />
              <label for="lname">Password:</label>
              <br />
              <input type="text" id="lname" name="lname" value="Password" />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Register;
