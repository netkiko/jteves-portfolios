import React from "react";
// import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "../styles/docs.css";
import "../styles/slick-theme.css";
import "../styles/slick.css";

// export default function About() {
//   return (
//     <div>
//       <p>This is the about page</p>
//     </div>
//   );
// }

class About extends React.Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      // centerMode: true,
      infinite: true,
      // centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 5
    };
    return (
      <BaseLayout>
        <BasePage>
          <div>
            <h2>Multiple Rows</h2>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div>
              <div>
                <h3>10</h3>
              </div>
              <div>
                <h3>11</h3>
              </div>
              <div>
                <h3>12</h3>
              </div>
              <div>
                <h3>13</h3>
              </div>
              <div>
                <h3>14</h3>
              </div>
              <div>
                <h3>15</h3>
              </div>
              <div>
                <h3>16</h3>
              </div>
              <div>
                <h3>17</h3>
              </div>
              <div>
                <h3>18</h3>
              </div>
              <div>
                <h3>19</h3>
              </div>
            </Slider>
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
