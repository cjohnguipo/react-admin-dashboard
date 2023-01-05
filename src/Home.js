import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";

import Calendar from "./scenes/calendar/calendar";
import UserLogin from "./components/auth/Login";
import Registration from "./components/Registration";
import Profile from "./Profile";

import Parse from 'parse/dist/parse.min.js'; 

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'httTm9xjMmuDb8P6GoP6v9y6aVFj2MfPQl5qIzoB';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'jxKk0FTGS2OhrPwXAFaicBwTE859LwKsi1QugF9X';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const Home = () => {
 
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const navigate = useNavigate();

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
      navigate('/');
    } else {
      navigate('/user-login');
    }
  }, [authenticated]);
 

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
              { authenticated && (<Sidebar isSidebar={isSidebar} /> ) } 
              <main className="content" style={{display: authenticated ? 'block' : 'none' }}>
                  { authenticated && ( <Topbar setIsSidebar={setIsSidebar} authenticated={authenticated} /> ) } 
                  
                  <Routes>
                    <Route path="/" element={ <Dashboard />  } />   
                    <Route path="/dashboard" element={ <Dashboard /> } />  
                    <Route path="/profile" element={ <Profile /> } />  
                    <Route path="/team" element={ <Team />} />   
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/user-login" element={<UserLogin />} />
                    <Route path="/user-register" element={<Registration />} />
                    <Route path="*" element={<UserLogin />} /> 
                </Routes>
              </main>
            
          </div> 
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default Home;
