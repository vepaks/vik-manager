import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
          <div class="bg-white p-5 max-w-md mx-auto rounded shadow-sm">
              <h2 class="text-4xl px-4 ">Влез в облака</h2>
              <form class="mt-10 space-y-8">
                  <input
                      class="w-full border rounded h-12 px-4 focus:outline-none"
                      placeholder="Email adress "
                      type="email"
                  />

                  <div class="flex items-center ">
                      <input
                          class="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                          placeholder="Password"
                          type="password"
                      />
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.607"
                          height="17.076"
                          viewBox="0 0 17.607 17.076"
                      >
                          <path
                              id="eye-off"
                              d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
                              transform="translate(-1.957 -2.293)"
                              fill="none"
                              stroke="#949090"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeidth="1"
                          />
                      </svg>
                  </div>
                  <div>
                      <div class="flex flex-col md:flex-row md:items-center justify-between ">
                          <input
                              class="bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
                              type="submit"
                              value="Влез"
                          />
                          <p
                              class="text-gray-400 text-sm
            underline self-center
            md:self-auto mt-4 md:mt-0"
                          >
                              Нямаш регистрация?
                          </p>
                      </div>
                  </div>
              </form>
</div>

      </div>
  );
}
export default App;