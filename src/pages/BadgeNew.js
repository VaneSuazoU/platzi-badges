import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import NavBar from "../components/NavBar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

//<></>

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      form: nextForm,
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
               firstName= {this.state.form.firstName}
               lastName= {this.state.form.lastName}
               email= {this.state.form.email}
               twitter= {this.state.form.twitter}
               jobTitle= {this.state.form.jobTitle}
               avatarURL
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
