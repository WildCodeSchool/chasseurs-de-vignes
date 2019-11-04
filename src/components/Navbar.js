import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <i id="open-menu" className="fa fa-bars"></i>
        <div className="Navbar">
          <ul className="Navbar-group">
            <li className="Navbar-group-item"></li>
            <li className="Navbar-group-item"></li>
          </ul>
        </div>
        <script>
          {document.addEventListener("DOMContentLoaded", () => {
            const clickBurger = document.querySelector("#open-menu");
            const header = document.querySelector(".Header");
            const openMenu = document.querySelector(".Navbar-group");
            clickBurger.addEventListener("click", () => {
              header.classList.toggle("Header--mobile");
              openMenu.classList.toggle("Navbar-group--mobile");
              clickBurger.classList.toggle("fa-bars");
              clickBurger.classList.toggle("fa-times");
            });
          })}
        </script>
      </div>
    );
  }
}
export default Navbar;
