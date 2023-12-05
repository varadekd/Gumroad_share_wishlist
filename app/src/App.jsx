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
      <div className="flex flex-col h-screen bg-neutral-800 text-white overflow-auto">
        <div className="flex-1 border m-2">
          <h1>GUMROAD </h1>
          <RouterProvider router={routes} />
        </div>
      </div>
    </>
  );
}

export default App;
