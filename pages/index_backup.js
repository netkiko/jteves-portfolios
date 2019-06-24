import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typecode.com/todos/1"
      );
      // console.log(response.data);
      userData = response.data;
    } catch (err) {
      console.log(err);
    }
    // console.log("I am getInitialProps");
    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    // debugger;
    super(props);
    // debugger;

    this.state = {
      title: "I am Index page"
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  updateTitle = () => {
    this.setState({ title: "I am updated Index page" });
  };

  render() {
    const { title } = this.state;
    const { intialData, userData } = this.props;
    return (
      <BaseLayout>
        <h1>I am index from the Class Component</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;

//Sample of Passing Props to Child Component
{
  /* <Header title="I am a Header Title">
<h1>I am Header subtitle</h1>
</Header> */
}

// const Index = () => {
//   return (
//     <div>
//       <p>Hello Next.js</p>
//     </div>
//   );
// };
