import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Wyjście" : "Nowe zadanie"}
        onClick={onAdd}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Lista zadań",
};

export default Header;
