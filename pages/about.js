import React from "react";
// import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

// export default function About() {
//   return (
//     <div>
//       <p>This is the about page</p>
//     </div>
//   );
// }

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <h1>I am About page!</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
