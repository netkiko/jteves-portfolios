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

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Cv page!</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
