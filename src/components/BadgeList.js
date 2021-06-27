import React from "react";
import "./styles/BadgeList.css";
import twiterLogo from "../images/twitter.png";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <div className="BadgesListItem">
                <div className="BadgesListItem__avatar">
                  <img src={badge.avatarUrl} alt="Avartar" />
                </div>
                <div className="">
                  <li key={badge.id}>
                    <p>
                      {badge.firstName} {badge.lastName}
                    </p>
                    <p className="Twitter_Logo">
                      <img src={twiterLogo} alt="twittLogo" />
                      @{badge.twitter}
                    </p>
                    <p>{badge.jobTitle}</p>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
