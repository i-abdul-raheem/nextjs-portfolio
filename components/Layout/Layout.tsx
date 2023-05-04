import { Header } from "../Header";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
