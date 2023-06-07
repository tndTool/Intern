import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AiFillMessage } from "react-icons/ai";
import { FaPinterest, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoMdExit } from "react-icons/io";

import { Web3Provider } from "@ethersproject/providers";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(false);

  // Test
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [location]);

  useEffect(() => {
    if (isSignedOut) {
      setIsConnected(false);
    }
  }, [isSignedOut]);

  const connectWallet = async () => {
    try {
      const provider = new Web3Provider(window.ethereum);
      await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);
      setIsConnected(true);
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_logout" });
      setIsConnected(false);
      localStorage.setItem("isLoggedIn", "false");
    } catch (error) {
      console.error(error);
    }
  };

  const handleConnect = async () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  const onSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsSignedOut(true);
    navigate("/");
  };

  return (
    <div className="d-flex align-items-center p-3 text-dark bg-light">
      <div className="mx-2">
        <Link to="/" className="text-decoration-none">
          <FaPinterest className="text-primary fs-1 pointer cursor-pointer h-2" />
        </Link>
      </div>

      <Link to="/" className="text-decoration-none">
        <button className="d-flex h-3 w-6 align-items-center justify-content-center border-radius-2 bg-dark">
          <span className="text-white font-weight-bold">Home</span>
        </button>
      </Link>

      <NavDropdown title="Create" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Create idea pin</NavDropdown.Item>
        <NavDropdown.Item href="#">Create pin</NavDropdown.Item>
      </NavDropdown>

      <div className="flex-075">
        <form className="d-flex flex-1 px-1 border-secondary border-radius-4">
          <div className="d-flex align-items-center h-3 w-100 border-radius-4 ml-1 border-none bg-light px-1 cursor-pointer ">
            <FaSearch className="m-2" />
            <input
              className="w-100 border-none bg-light h-100 border-radius-4 outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>

      <div className="d-flex align-items-center justify-content-space-between ml-1 flex-025">
        <div className="cursor-pointer mx-2 position-relative">
          <IoIosNotifications className="fs-1 cursor-pointer text-secondary" />
        </div>

        <div className="cursor-pointer mx-2 position-relative">
          <AiFillMessage className="fs-1 cursor-pointer text-secondary" />
        </div>

        {isConnected ? (
          <>
            <Link to="/profile" className="text-decoration-none">
              <img
                src="https://www.scoliosis-rehabilitation.com/mymedia/2016/06/no-face.png"
                alt="Avatar"
                className="mx-2 rounded-circle h-2"
              />
            </Link>
            <button
              className="cursor-pointer mx-2 position-relative"
              onClick={onSignOut}
            >
              <IoMdExit className="fs-1 cursor-pointer text-secondary" />
            </button>
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
      {isSignedOut && (
        <span className="text-primary fs-5 pointer cursor-pointer"></span>
      )}
    </div>
  );
};

export default Header;
