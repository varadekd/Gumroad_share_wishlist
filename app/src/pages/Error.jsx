const Error = () => {
  return (
    <>
      <div className="flex h-screen flex-col">

  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-white">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="/"
        className="mt-6 inline-block rounded bg-white px-5 py-3 text-sm font-medium text-black focus:ring"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Error;
