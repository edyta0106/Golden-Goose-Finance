import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";
// import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";

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
          {/* <img
            src={photo2}
            style={{
              width: "100%",
              height: "75vh",
              margin: "auto",
            }}
          /> */}
        </div>
        <div>
          <img
            src={photo3}
            style={{ width: "100%", height: "75vh", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={photo4}
            style={{ width: "100%", height: "75vh", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src={photo5}
            style={{ width: "100%", height: "75vh", margin: "auto" }}
          />
        </div>
      </Slider>
    </Box>
  );
}
