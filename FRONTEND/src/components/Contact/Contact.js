import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { baseUrl } from "../url";
import "../../App.css";
import "../../bootstrap.min.css";
import "../../font-awesome.css";

function Contact() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [sub, setSub] = useState();

  const OnInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log("=====>", data);

  const submite = async () => {
    const Sdata = await axios
      .post(`${baseUrl}/contact/insert`, data)
      .then((res) => {
        console.log(res);
        //  setSub(res)
        //  setData({
        //   name:'',
        //   email:'',
        //   subject:'',
        //   message:''
        //  })
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const OnReg = (event) => {
    event.preventDefault();
    submite();
  };

  return (
    <>
      <div style={{ marginTop: "70px" }} id="expert">
        <section
          class="section section-bg"
          id="call-to-action"
          style={{
            backgroundImage: "url('./image/banner-image-1-1920x500.jpg')",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="cta-content">
                  <br />
                  <br />
                  <h2>
                    Meet Our <em>Experts</em>
                  </h2>
                  <p>A directory of wonderful things…</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section" id="features">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  Experts <em> info</em>
                </h2>
                <img src="./image/line-dec.png" alt="waves" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>

              <h5>+91 9510578562</h5>

              <br />
            </div>

            <div className="col-md-4">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>

              <h5>experts1@gmail.com</h5>

              <br />
            </div>

            <div
              className="col-md-4"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/livechat");
              }}
            >
              <div className="icon">
                <i className="fa fa-comments"></i>
              </div>

              <h5>Wp : 9168433666</h5>

              <br />
            </div>
          </div>
        </div>
      </section>
      <div className="basecont">
        <div className="full">
          <div className="main1">
            <div className="rgif">
              <img src="./image/message.gif" alt="" class="animatimg" />
            </div>

            <form
              className="main"
              onSubmit={OnReg}
              style={{ marginTop: "70px" }}
            >
              <div className="container1">
                <label for="uname">
                  <b>Name</b>
                </label>
                <input
                  className="text"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={OnInput}
                  placeholder="Enter Name"
                  required="true"
                />

                <label for="uname">
                  <b>Email</b>
                </label>
                <input
                  className="text"
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={OnInput}
                  placeholder="Enter Email"
                  required="true"
                />

                <label for="uname">
                  <b>Subject</b>
                </label>
                <input
                  className="text"
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={OnInput}
                  placeholder="Enter Subject"
                  required="true"
                />
                <label for="uname">
                  <b>Message</b>
                </label>
                <textarea
                  className="text"
                  type="text"
                  name="message"
                  value={data.message}
                  onChange={OnInput}
                  placeholder="Enter Message"
                  required="true"
                />
                <button className="text" type="submit">
                  Send Message
                </button>
              </div>
              <div className="container2"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
