import NavBar from "./NavBar";

const BaseLayout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default BaseLayout;
