import React from "react";

export const App = () => (
  <>
    <main>
      <div className="px-4 py-6 mt-10  sm:px-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900  sm:text-5xl sm:leading-none md:text-6xl">
            app1 is heavily using <br className="xl:hidden" /> <a
              target="_blank"
              className="text-indigo-600 underline hover:text-indigo-500"
              href="https://tailwindcss.com"
            >
              Tailwind CSS
            </a>
          </h2>
          <p className="mt-3 text-base text-gray-500  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            All the code present here is part of a free sample.
          </p>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="https://github.com/posva/vite-tailwind-starter"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md  hover:bg-indigo-500 focus:outline-none focus:ring md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md  hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </main>
    <hr />
    <a href="/app2/">Go to app2</a>
  </>
);
