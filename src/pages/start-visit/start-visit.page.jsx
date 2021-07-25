import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import { json } from "./survey_json.js";

Survey.StylesManager.applyTheme("modern");

class StartVisit extends React.Component {
  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  }
  render() {
    var model = new Survey.Model(json);

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
              Hello Omar. To help Dr. Badri offer you the best care, please fill out this survey with your medical
              information.
            </h1>

            <Survey.Survey model={model} showPreviewBeforeComplete="showAnsweredQuestions" Complete={this.onComplete} />
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default StartVisit;
