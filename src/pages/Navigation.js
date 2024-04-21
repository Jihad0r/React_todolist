import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <>
      <nav>
        <h1>Hi User</h1>
        <FaBars className="bar" onClick={toggleShow} />
        {show ? (
          <ul className="show">
            <Link to={"/Home"}>
              <li>Home</li>
            </Link>
            <Link to={"/crucial"}>
              <li>Crucial</li>
            </Link>
            <Link to={"/depends"}>
              <li>Depends</li>
            </Link>
            <Link to={"/irrelevant"}>
              <li>Irrelevant</li>
            </Link>
            <h3>Sign Out</h3>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/crucial"}>Crucial</Link>
            </li>
            <li>
              <Link to={"/depends"}>Depends</Link>
            </li>
            <li>
              <Link to={"/irrelevant"}>Irrelevant</Link>
            </li>
            <h3>Sign Out</h3>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  );
};
