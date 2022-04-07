import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  console.log("HeaderOnly");
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
