export const ErrorMessage = ({ message }) => {
  return (
    <div className="flex text-red-400 items-center justify-center">
      <p>{message ? message : "Something went wrong, we are working on it!"}</p>
    </div>
  );
};
