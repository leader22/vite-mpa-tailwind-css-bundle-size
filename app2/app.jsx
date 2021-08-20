import React from "react";

export const App = () => (
  <>
    <main>
      <div className="px-4 py-6 mt-10  sm:px-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900  sm:text-5xl sm:leading-none md:text-6xl">
            app2 is lightly using <br className="xl:hidden" /> <a
              target="_blank"
              className="text-indigo-600 underline hover:text-indigo-500"
              href="https://tailwindcss.com"
            >
              Tailwind CSS
            </a>
          </h2>
        </div>
      </div>
    </main>
    <hr />
    <a href="/app1/">Go to app1</a>
  </>
);
