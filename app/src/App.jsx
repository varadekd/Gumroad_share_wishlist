//Imports
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { updateWishlist } from "./store/wishlist";
import { makeAPICall } from "./util/api";

function App() {
  const userID = useSelector((state) => state.wishlistStore.userID);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await makeAPICall("GET", `/user/${userID}`, "get user");

      if (userData && userData.success) {
        dispatch(updateWishlist(userData.data.data.wishlisted));
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen bg-neutral-800 text-white overflow-hidden">
        <div className="h-16 bg-gray-800 flex items-center justify-center">
          This a demo for Gumroad hiring challenge
        </div>
        <div className="flex-1 m-2 h-96  overflow-auto">
          <RouterProvider router={routes} />
        </div>
        <div className="h-12 bg-gray-800 flex items-center justify-center">
          Project created by 
          <a className="mx-2" href="https://github.com/varadekd">
            Kushagra Varade
          </a> the full code can be found 
          <a className="mx-2" href="https://github.com/varadekd/Gumroad_share_wishlist">
            here
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
