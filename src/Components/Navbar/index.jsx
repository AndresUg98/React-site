import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

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
            to="/clothes"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
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
            to="/furnitures"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4"
                : ""
            }
          >
            Toys
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/others"
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
        <li>👜{context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
