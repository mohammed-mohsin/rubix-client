import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner d-flex">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/uJOsHaO.png"
              alt="First slide"
            />
            <div
              style={{ top: "50%" }}
              className="carousel-caption  align-baseline"
            >
              <h3 className="text-dark h1 pb-5">
                Normann Copenhagen - <br /> Craft salt and pepper grinder
              </h3>
              <Link to="/products">
                <button className="btn btn-lg btn-dark ">
                  Products &#8680;{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/33fPKiL.png"
              alt="Second slide"
            />
            <div
              style={{ top: "50%" }}
              className="carousel-caption  align-baseline"
            >
              <h3 className="text-dark h1 pb-5">
                Wood Minimal Office Chair <br /> Craft salt and pepper
                grinderExtra 40% off now
              </h3>
              <Link to="/products">
                <button className="btn btn-lg btn-dark ">
                  Products &#8680;{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/hjiOfMh.png"
              alt="Third slide"
            />
            <div
              style={{ top: "50%" }}
              className="carousel-caption  align-baseline"
            >
              <h3 className="text-dark h1 pb-5">
                About Sweeper and funnel <br /> Everyone's talking
              </h3>
              <Link to="/products">
                <button className="btn btn-lg btn-dark ">
                  Products &#8680;{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
