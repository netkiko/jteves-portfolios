import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    console.log("Query", query);
    const portfolioId = query.id;
    let portfolio = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + portfolioId
      );
      portfolio = response.data;
    } catch (err) {
      console.error(err);
    }
    return { portfolio };
  }
  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <h1>{portfolio.title}</h1>
          <p>Body: {portfolio.body}</p>
          <p>Id: {portfolio.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
