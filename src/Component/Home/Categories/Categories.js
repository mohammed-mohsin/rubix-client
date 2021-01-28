import React from "react";

const Categories = () => {
  return (
    <>
      <section className="pt-5">
        <h1 className="h1 text-center pt-5"> Categories </h1>

        <div className="container">
          <div className="row pt-5">
            <div className="col-md-8 ">
              <div className="row">
                <div className="col">
                  <img
                    className="w-100  "
                    src="https://i.imgur.com/zyoXkOk.png"
                    alt=""
                  />
                  <div
                    className="bg-light text-center "
                    style={{
                      width: "200px",
                      height: "100px",

                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h6 className="pt-3">Sofas</h6>
                    <p className="">(17 Items)</p>
                  </div>
                </div>
                <div className="row p-3">
                  <div className="col-6">
                    <img
                      className="w-100  "
                      src="https://i.imgur.com/w0AyXAE.png"
                      alt=""
                    />
                    <div
                      className="bg-light text-center "
                      style={{
                        width: "200px",
                        height: "100px",

                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h6 className="pt-3">Furniture</h6>
                      <p className="">(17 Items)</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      className="w-100   "
                      src="https://i.imgur.com/0Dy8iDv.png"
                      alt=""
                    />
                    <div
                      className="bg-light text-center "
                      style={{
                        width: "200px",
                        height: "100px",

                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h6 className="pt-3">Lighting</h6>
                      <p className="">(17 Items)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="row pb-4">
                <div className="col ">
                  <img
                    className="w-100  "
                    src="https://i.imgur.com/TerozPf.png"
                    alt=""
                  />
                  <div
                    className="bg-light text-center "
                    style={{
                      width: "200px",
                      height: "100px",

                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h6 className="pt-3">Chair</h6>
                    <p className="">(17 Items)</p>
                  </div>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col ">
                  <img
                    className="w-100  "
                    src="https://i.imgur.com/JvxcB8q.png"
                    alt=""
                  />
                  <div
                    className="bg-light text-center "
                    style={{
                      width: "200px",
                      height: "100px",

                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h6 className="pt-3">Decorations</h6>
                    <p className="">(17 Items)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
