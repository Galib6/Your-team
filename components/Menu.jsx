import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 2, name: "About", url: "/about" },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item ? (
              <Link href={`${item.url}`}>
                <li className="cursor-pointer flex items-center gap-2 relative">
                  {item.name}
                </li>
              </Link>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
