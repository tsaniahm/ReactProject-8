import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';
import GlobalData from './container/GlobalData';

import { IndoContextProvider } from './context/IndonesiaContext';
import { ProvinceContextProvider } from './context/ProvinceContext';
import { IndonesiaDailyContextProvider } from './context/IndonesiaDailyContext';
import { CountriesContextProvider } from './context/CountriesContext';
import { GlobalContextProvider } from './context/GlobalContext';

function App() {
  return (
    <React.Fragment>
      <GlobalContextProvider>
        <IndoContextProvider>
          <ProvinceContextProvider>
            <IndonesiaDailyContextProvider>
              <CountriesContextProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<LandingPage />}></Route>
                    <Route
                      path='/indonesia'
                      element={<IndonesiaData />}
                    ></Route>
                    <Route path='/global' element={<GlobalData />}></Route>
                  </Routes>
                </BrowserRouter>
              </CountriesContextProvider>
            </IndonesiaDailyContextProvider>
          </ProvinceContextProvider>
        </IndoContextProvider>
      </GlobalContextProvider>
    </React.Fragment>
  );
}

export default App;
