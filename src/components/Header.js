import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  // const onClick = () => {
  //   console.log("clicked from Header component");
  // };

  const [buttonState, setButtonState] = useState(true);
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={buttonState ? "Add Item" : "Close"}
        color={buttonState ? "green" : "red"}
        onClick={() => {
          onAdd();
          setButtonState(!buttonState);
        }}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Default header value"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const headingStyle = {
  color: "green",
  backgroundColor: "pink"
};

export default Header;
