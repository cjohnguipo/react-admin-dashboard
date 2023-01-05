import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
 
import Login from "../../components/auth/Login";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

  return (
    <Login />
  );
};

export default Home;
