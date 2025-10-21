import { Header } from "../components/header";

export const Layout = ( {children}) => {
  return <div>
    <Header />
    {
      children
    }

  </div>;
};
