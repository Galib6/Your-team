import React, { useState, useEffect, useContext } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AuthContext } from "@/context/AuthProvider";
import { useSelector } from "react-redux";

const Header = () => {
  const teamMembers = useSelector((state) => state.allEmployee.teamMembers);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[60px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 shadow-md ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold lg:text-[30px] text-[15px]  justify-center text-neutral-600 flex items-center">
            YourTeam <RiTeamLine className="ml-1" />
          </h1>
        </Link>

        <div className="flex items-center gap-2 text-black ml-[-120px]">
          {/* search bar */}

          {/* Icon start */}
          {/* Icon end */}

          {/* Icon start */}

          <ul>
            <Link href="/team">
              <li className="mx-6">
                <div className="indicator mt-2">
                  <span className="indicator-item badge badge-error text-white">
                    {teamMembers.length}
                  </span>
                  <AiOutlineTeam style={{ height: 30, width: 30 }} />
                </div>
              </li>
            </Link>
          </ul>
          {user ? (
            <></>
          ) : (
            <>
              <Link
                href="/login"
                className=" px-3 py-2  text-blue-600 rounded-lg"
              >
                <button>Sign in</button>
              </Link>
            </>
          )}
          {user && (
            <ul>
              <li>
                <button
                  className="bg-blue-500 rounded-full text-white p-2 hidden lg:flex"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}

          {/* Icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
