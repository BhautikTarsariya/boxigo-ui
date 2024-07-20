import React from "react";
import { Link } from "react-router-dom";
import {
  IconTruckDelivery,
  IconUser,
  IconLogout,
  IconMessageQuestion,
} from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen sm:translate-x-0 border-r"
      aria-label="Sidebar"
    >
      <div className="h-full px-8 py-10 flex flex-col items-center">
        <ul>
          <li>
            <Link
              to="/"
              className="px-4 mb-8 flex items-center flex items-center border-l-4 border-red-600 -ml-1"
            >
              <IconTruckDelivery stroke={2} />
              <span className="ms-3 font-bold">MY MOVES</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="px-4 mb-8 flex items-center">
              <IconUser stroke={2} />
              <span className="ms-3 font-bold">MY PROFILE</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="px-4 mb-8 flex items-center">
              <IconMessageQuestion stroke={2} />
              <span className="ms-3 font-bold">GET QUOTE</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="px-4 mb-8 flex items-center">
              <IconLogout stroke={2} />
              <span className="ms-3 font-bold">LOGOUT</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
