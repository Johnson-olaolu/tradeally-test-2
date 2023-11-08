import React from "react";
import Logo from "../../assets/icons/Logo";
import NavHomeIcon from "../../assets/icons/nav/NavHomeIcon";
import Nav1Icon from "../../assets/icons/nav/Nav1Icon";
import Nav2Icon from "../../assets/icons/nav/Nav2Icon";
import Nav3Icon from "../../assets/icons/nav/Nav3Icon";
import Nav4Icon from "../../assets/icons/nav/Nav4Icon";
import Nav5Icon from "../../assets/icons/nav/Nav5Icon";

const Sidebar = () => {
  return (
    <aside className=" shrink-0 w-24 py-7 px-6 flex flex-col items-center bg-[#FBFAFF]">
      <Logo />
      <nav className="mt-44">
        <ul className="flex flex-col items-center ">
          <li className="mb-8 " role="button">
            <NavHomeIcon />
          </li>
          <li className="mb-12" role="button">
            <Nav1Icon />
          </li>
          <li className="mb-12" role="button">
            <Nav2Icon />
          </li>
          <li className="mb-12" role="button">
            <Nav3Icon />
          </li>
          <li className="mb-12" role="button">
            <Nav4Icon />
          </li>
          <li className="mb-12" role="button">
            <Nav5Icon />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
