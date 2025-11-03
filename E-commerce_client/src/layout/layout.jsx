import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="  min-h-[30vh]"> {children}</div>
      <Footer />
    </div>
  );
};
