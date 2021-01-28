import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" bg-dark">
        <div  className="container">
          
          <p className=" text-center text-light p-5">&copy; {new Date().getFullYear()} RUBIX All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
