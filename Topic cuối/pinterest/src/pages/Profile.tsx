import Pin from "../components/Pin";
import { useEffect, useState } from "react";

const Profile = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getAddress = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAddress();
  }, []);

  return (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-12 col-xl-4">
          <div className="card border-0 shadow">
            <div className="card-body text-center">
              <div className="mt-3 mb-4">
                <img
                  src="https://www.scoliosis-rehabilitation.com/mymedia/2016/06/no-face.png"
                  alt="Avatar"
                  className="rounded-circle img-fluid w-25"
                />
              </div>
              <h4 className="mb-2">{address}</h4>
              <p className="text-muted mb-4">@Programmer</p>
              <h4 className="text-muted mb-4">Created</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center w-100 h-100 mt-1 overflow-hidden">
        <div className="home-container">
          {Array.from({ length: 1 }, (_, i) => i + 1).map((tokenId) => (
            <Pin key={tokenId} tokenId={tokenId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
