import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="pt-5">
        <div
          className="container-fluid"
          style={{
            background: `url("https://i.imgur.com/2zkYWpZ.png")`,
            minHeight: "400px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container d-flex align-items-center">
            <div
              style={{
                maxWidth: "930px",
                opacity: ".9",
                padding: "80px 15px",
                margin: "50px auto",
              }}
              className=" bg-light w-100  text-center clearfix "
            >
              <div className="wrap">
                <div className=" pb-5">
                  <h3 className=" text-center">Subcribe To Our Newsletter</h3>
                  <span className="">
                    Sign up for the weekly newsletter and build better ecommerce
                    stores.
                  </span>
                </div>
                <div className="">
                  <form
                    method="post"
                    action="/contact#contact_form"
                    id="contact_form"
                    acceptCharset="UTF-8"
                    className="contact-form"
                  >
                    <input type="hidden" name="form_type" value="customer" />
                    <input type="hidden" name="utf8" value="✓" />

                    <div className="form-group input-group">
                      <input
                        className="form-control"
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address..."
                      />
                      <span className="input-group-btn">
                        <button className=" ml-2 btn  btn-dark" type="submit">
                          <span>Subscribe</span>
                        </button>
                      </span>
                      <input type="hidden" name="action" value="0" />
                    </div>
                  </form>
                  <div className="newsletterDescription">
                    We respect your privacy, so we never share your info.
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

export default Newsletter;
