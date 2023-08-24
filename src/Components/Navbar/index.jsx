import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid"; //Añadiendiendo iconos con hero icons (https://heroicons.com/)

const Navbar = () => {
  const context = useContext(ShoppingCartContext); // importamos el contexto para poder usar los estados globales: count
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Women's clothing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className=" text-black/60">andres@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Sing in
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black-500" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
