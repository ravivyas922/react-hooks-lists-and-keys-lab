import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksMap = links.map((links) => 
  {
    return <a key = {links} href = {"#"+links}>{links}</a>
  });
  return <nav>{linksMap}</nav>;
}

export default NavBar;
