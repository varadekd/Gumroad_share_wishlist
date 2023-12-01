import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div
          className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl 
    lg:px-8 border flex-1 m-10"
        >
          <RouterProvider router={routes} />
        </div>
      </div>
    </>
  );
}

export default App;
