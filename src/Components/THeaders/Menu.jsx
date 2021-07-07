import React, { Fragment, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import firebase from "../../firebase";
const Menu = props => {
  let [toggle, setToggle] = useState(false);
  let { displayName, photoURL } = props.users;
  return (
    <Fragment>
      <nav id="TMenuBlock">
        <ul className="leftMenu">
          <li>
            <a href="/" className="active">
             CovidTracker
            </a>
          </li>
          <li>
            <a href="/">Premium</a>
          </li>

          <li>
            <a href="/">news</a>
          </li>
        </ul>

        <ul className="authMenu">
          <li>
            <a href="/">
              <i className="fal fa-search"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {firebase.auth().currentUser ? (
                <img src={photoURL} alt={displayName} />
              ) : (
                <i className="far fa-user-circle"></i>
              )}
            </a>
          </li>
        </ul>
        <DropDownMenu toggle={toggle} users={props.users} />
      </nav>
    </Fragment>
  );
};

export default Menu;
