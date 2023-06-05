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
          <Pin
            url={
              "https://i.pinimg.com/564x/61/9e/bf/619ebfabd4d242ba411519103312e547.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/61/9e/bf/619ebfabd4d242ba411519103312e547.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/57/09/ff/5709ff123b652cd3f30c715af9aabd21.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/25/62/09/256209196d32bc96351ddbbc3a2f0021.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/95/cd/2b/95cd2bfbce699af22046270c9c272e2a.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/f3/8e/91/f38e9156be642e3f3900b43e2aebdcb8.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/c9/13/56/c91356dd01edd1b0d5e6aab822147de9.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/c9/13/56/c91356dd01edd1b0d5e6aab822147de9.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/f3/8e/91/f38e9156be642e3f3900b43e2aebdcb8.jpg"
            }
          />
          <Pin
            url={
              "https://i.pinimg.com/564x/95/cd/2b/95cd2bfbce699af22046270c9c272e2a.jpg"
            }
          />
          <Pin url={require("../assets/images/242-400x500.jpg")} />
          <Pin url={require("../assets/images/243-400x600.jpg")} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
