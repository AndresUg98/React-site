import "./App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { ShoppingCartProvider } from "../../Context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
