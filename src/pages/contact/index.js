import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="">
          <div className="">
            <div className="center measure-wide pv5">
              <div className="pb5">
                <h1 className={`f-subheadline pv3`}>Get in touch with us</h1>
                <p className={`f3 pb3 light-blue lh-copy`}>
                  We actually read these and will get back to you in 24 hours.
                </p>
                <p className={`f5 pb3 gray lh-copy`}>
                  AlleyCorp is dedicated to building transformative companies in
                  New York City.
                </p>
                <p className={`f5 pb3 gray lh-copy`}>
                  We also angel and seed invest across sectors, usually as the
                  one of the first investors. Conversations often start
                  pre-product and pre-deck. If you are interesting in connecting
                  with us, please fill out the form below. We look forward to
                  connecting!
                </p>
              </div>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className={`gray`}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label dark-gray" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control mv3">
                    <input
                      className="input-reset br4 ba b--light-gray input pa3 w-100"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label dark-gray" htmlFor={"email"}>
                    Email Address
                  </label>
                  <div className="control mv3">
                    <input
                      className="input-reset br4 ba b--light-gray input pa3 w-100"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label dark-gray" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control mv3">
                    <textarea
                      className="input-reset br4 ba b--light-gray textarea pa3 w-100"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label dark-gray" htmlFor={"file"}>
                    Attach a deck or write up
                  </label>
                  <div className="control mv3">
                    <input
                      className="file-input input-reset br4 ba b--light-gray textarea pa3 w-100"
                      type="file"
                      name="attachment"
                      onChange={this.handleAttachment}
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                    className="input-reset fl button is-link pa3 br4 pointer grow"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
