import { AuthContextProvider } from "./_uttils/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
