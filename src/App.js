import { useState, useEffect } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
 
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState('false');


  useEffect(() => { 
    setIsLoggedIn((isLoggedIn) => isLoggedIn); 
  }, []); // <- add empty brackets here

  return (
   <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
     <CssBaseline />
     <div className="app">
    
        <Sidebar isSidebar={isSidebar} isLoggedIn={isLoggedIn}  /> 
        <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />  
            <Routes>
              <Route path="/" element={ <Dashboard /> } style />  
              <Route path="/profile" element={ <Profile /> } />  
              <Route path="/team" element={<Team />} />
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

export default App;
