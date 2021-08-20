import React from "react";

export const App = () => (
  <>
    <main>
      <div className="px-4 py-6 mt-10  sm:px-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900  sm:text-5xl sm:leading-none md:text-6xl">
            app1 is heavily using <br className="xl:hidden" />{" "}
            <a
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
    <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">
                  Successfully saved!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <a href="/app2/">Go to app2</a>
  </>
);
