import { Spinner } from "flowbite-react";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <Spinner aria-label="Your content is been loaded" size="xl" />
      <p className="mt-4 text-lg">Your content is been loaded</p>
    </div>
  );
};
