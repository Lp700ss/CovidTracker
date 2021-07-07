import React from "react";
import "./headers.css";
import Menu from "./Menu";

const Navbar = (props) => {
  return (
    <div>
      <section id="THeaders">
        <article>
          <div className="TLogo">
            {/* <a href="/">
              <img src="covid19.png" alt="logo" />
            </a> */}
          </div>
          <div className="TMenu">
            <Menu users={props.users} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Navbar;
