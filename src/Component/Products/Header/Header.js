import React from "react";

const Header = () => {
  return (
    <header>
      <div className="">
        <div
          style={{
            minHeight: "335px",
            background: `url("https://i.imgur.com/NHUFb28.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div style={{ top: "20%",right: "70%"}} className="carousel-caption  align-baseline">
            <h3 className="text-dark h1 ">
              Products Page
            </h3>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
