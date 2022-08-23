import styled from "styled-components";
const LayoutDiv = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: purple;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 20px 100px;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  h1 {
    font-weight: bold;
    cursor: pointer;
  }
`;
const Layout = ({ children }) => {
  return (
    <>
      <LayoutDiv>
        <h1>Todo App</h1>
      </LayoutDiv>
      {children}
    </>
  );
};
export default Layout;
