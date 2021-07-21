import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyrigt &copy; 2021</p>
      <Link to="/about">O programie</Link>
    </footer>
  );
};

export default Footer;
