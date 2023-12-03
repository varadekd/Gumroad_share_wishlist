import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { updateWishlist } from "./store/wishlist";
import { getDataFromApiAndCache } from "./util/api";

const USERID = "656c0d5e7306f441560932ea";

function App() {
  const dispatch = useDispatch();
  const userData = getDataFromApiAndCache(`/user/${USERID}`);

  if (userData && userData.isSuccess) {
    dispatch(updateWishlist(userData.data.data.wishlisted));
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 border m-2">
          <RouterProvider router={routes} />
        </div>
      </div>
    </>
  );
}

export default App;
