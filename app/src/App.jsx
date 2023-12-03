import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "./store/wishlist";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/656c0d5e7306f441560932ea")

        if(!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json
        dispatch(updateValue(result.data.wishlisted))
      } catch (error) {
        console.error('Error in fetching data: ' , error)
      }
    };

    fetchUser()
  }, [])

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
