import { useState } from "react";
import { useEffect } from "react";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/user")
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((e) => alert("There's an Error"));
  }, []);

  return (
    <StyledHeader>
      {/* Left */}
      <span className="brand">Edvora&trade;</span>

      {/* Right */}
      <div className="user">
        <span>{user.name}</span>
        <img src={user.url} alt="User Avatar" />
      </div>
    </StyledHeader>
  );
};

export default Header;
