import { NavDropdown } from "react-bootstrap";

import { FaPinterest, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoMdExit } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Thực hiện các thao tác kết nối ở đây
    setIsConnected(true);
  };
  return (
    <div className="d-flex align-items-center p-3 text-dark bg-light">
      <div className="mx-2">
        <FaPinterest className="text-primary fs-1 pointer cursor-pointer h-2" />
      </div>

      <button className="d-flex h-3 w-6 align-items-center justify-content-center border-radius-2 bg-dark">
        <span className="text-white font-weight-bold">Home</span>
      </button>

      <NavDropdown title="Create" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Create idea pin</NavDropdown.Item>
        <NavDropdown.Item href="#">Create pin</NavDropdown.Item>
      </NavDropdown>

      <div className="flex-075 ">
        <form className="d-flex flex-1 px-1 border-secondary border-radius-4">
          <div className="d-flex align-items-center h-3 w-100 border-radius-4 ml-1 border-none bg-light px-1 cursor-pointer ">
            <FaSearch className="m-2" />
            <input
              className="w-100 border-none bg-light h-100 border-radius-4 outline-none "
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>

      <div className="d-flex align-items-center justify-content-space-between ml-1 flex-025">
        <div className="cursor-pointer mx-2 posistion-relative">
          <IoIosNotifications className="fs-1 cursor-pointer text-secondary" />
        </div>

        <div className="cursor-pointer mx-2 posistion-relative">
          <AiFillMessage className="fs-1 cursor-pointer text-secondary" />
        </div>

        {isConnected ? (
          <>
            <Link to="/profile">
              <img
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Avatar"
                className="mx-2 rounded-circle"
                style={{ height: "2rem" }}
              />
            </Link>
            <div className="cursor-pointer mx-2 posistion-relative">
              <IoMdExit className="fs-1 cursor-pointer text-secondary" />
            </div>
          </>
        ) : (
          <button
            className="d-flex h-3 mx-2 w-6 align-items-center justify-content-center border-radius-2 bg-danger border-none"
            onClick={handleConnect}
          >
            <span className="text-white font-weight-bold">Connect</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
