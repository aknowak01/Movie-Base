import { Route, Routes, Navigate } from 'react-router-dom';
import { isExpired } from "react-jwt";
import Home from '../../../WebstormProjects/untitled/src/pages/Home';
import ErrorPage from '../../../WebstormProjects/untitled/src/pages/ErrorPage';
import LoginPage from '../../../WebstormProjects/untitled/src/pages/LoginPage'
import RegisterPage from '../../../WebstormProjects/untitled/src/pages/RegisterPage'
import Details from "../../../WebstormProjects/untitled/src/pages/Details";
import AddMovie from "../../../WebstormProjects/untitled/src/pages/AddMovie";
function App() {
	// localhost:3000
	return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
        <Route path="signin" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <LoginPage/>} />
        <Route path="signup" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <RegisterPage/>} />
      <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie/>}/>
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
