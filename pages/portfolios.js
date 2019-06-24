import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

// import Link from "next/link";
import { Link } from "../routes";
import axios from "axios";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
      // console.log(posts);
    } catch (err) {
      console.error(err);
    }
    return { posts: posts.splice(0, 10) };
  }

  renderPosts = posts => {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          {/* <Link
            as={`/portfolio/${post.id}`}
            href={`/portfolio?title=${post.title}`}
          >
            <a>{post.title}</a>
          </Link> */}
          <Link route={`/portfolio/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  };
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Portfolios page!</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
