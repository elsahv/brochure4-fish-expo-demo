import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const Header = () => {
  return (
    <Nav>
      <h1>Hovey Roofing</h1>
    </Nav>
  );
};

export default Header;
