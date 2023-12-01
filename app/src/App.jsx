import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
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
