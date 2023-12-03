import { Link, Outlet } from "react-router-dom";
import { BiSolidHomeSmile } from "react-icons/bi";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header>
        <ParagraphTop> Welcome to my super application ;) </ParagraphTop>
        <ParagraphBottom>
          If you want to go home, just click on
          <Link to={"/"}>
            <Button>
              <BiSolidHomeSmile />
            </Button>
          </Link>
        </ParagraphBottom>
      </Header>
      <Outlet />
    </>
  );
};

const Header = styled.header`
  font-size: 2em;
`;

const Button = styled.button`
  font-size: 1em;
  padding: 0.2em;
  color: #fff;
  &:hover {
    filter: drop-shadow(0px 0px 0.5em #fff);
  }
`;

const ParagraphTop = styled.p`
  margin: 0;
  padding: 0;
`;

const ParagraphBottom = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.5em;
`;

export default Layout;
