import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
import billspg from "../images/bills3.jpg";
import expensepg from "../images/expensespg3.jpg";
import savingspg from "../images/savingspg3.jpg";
import goosepg from "../images/goosepg2.jpg";

export default function CarouselSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      sx={{
        position: "center",
        backgroundColor: "white",

        maxWidth: "100%",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src={goosepg}
            style={{
              width: "60%",
              height: "75vh",
              margin: "auto",
            }}
          />
        </div>
        <div>
          <img
            src={expensepg}
            style={{ width: "60%", height: "75vh", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={savingspg}
            style={{ width: "60%", height: "75vh", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={billspg}
            style={{ width: "60%", height: "75vh", margin: "auto" }}
          />
        </div>
      </Slider>
    </Box>
  );
}
