import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconTruckDelivery,
  IconUser,
  IconLogout,
  IconMessageQuestion,
} from "@tabler/icons-react";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const menuItems = [
    {
      icons: <IconTruckDelivery stroke={2} />,
      label: "MY MOVES",
    },
    {
      icons: <IconUser stroke={2} />,
      label: "MY PROFILE",
    },
    {
      icons: <IconMessageQuestion stroke={2} />,
      label: "GET QUOTE",
    },
    {
      icons: <IconLogout stroke={2} />,
      label: "LOGOUT",
    },
  ];

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen sm:translate-x-0 border-r"
      aria-label="Sidebar"
    >
      <div className="h-full px-8 py-10 flex flex-col items-center">
        <ul>
          {menuItems.map((page: any, index: number) => (
            <li key={index}>
              <Link
                to="/"
                className={`px-4 mb-8 flex items-center ${
                  index === 0
                    ? "flex items-center border-l-4 border-red-600 -ml-1"
                    : ""
                }`}
              >
                {page.icons}
                <span className="ms-3 font-bold">{page.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
