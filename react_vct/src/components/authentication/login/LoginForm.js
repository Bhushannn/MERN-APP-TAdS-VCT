// import * as Yup from 'yup';
import { useState } from 'react';
// import { useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  // Link,
  Stack,
  // Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  // FormControlLabel,
  Typography
  // Alert
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", passcode: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com//user/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "POST",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: cred.email, passcode: cred.passcode })
    });
    const json = await response.json();

    if (json.success) {
      setTimeout(() => {
        toast.success("Login Successful \n Welcome to TAdS VCT", {
          position: "top-center",
          autoClose: 5000
        });

      }, 100);
      setTimeout(() => {
        localStorage.setItem("usertoken", json.authToken);
        // localStorage.setItem("count", 0);
        navigate("/dashboard", { replace: true });
      }, 5000);
    } else {
      toast.warn("Invalid Credentials", {
        position: "top-center"
      });

    }
  };

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleLogout = () => {
    localStorage.removeItem('usertoken');
    setTimeout(() => {
      toast.success("Logout Successfully", {
        position: "top-center",
        autoClose: 4000
      });
    }, 100);
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 5000);
  };

  return (
    <>
      {!localStorage.getItem('usertoken') ? <><Stack sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
          Sign in to Virtual Cycle Trip
        </Typography>
        <Typography sx={{ color: '#fff' }}>Enter your details below.</Typography>
      </Stack><form onSubmit={handleSubmit}>
          <Stack spacing={3} style={{
            color: "#fff", backgroundColor: "rgba(155, 155, 155, 0.45)", borderRadius: "12px",
            border: "3px solid #6a3406", backdropFilter: "blur(6px) saturate(180%)", padding: "10px 10px"
          }}>
            <TextField sx={{ input: { color: 'white' }, label: { color: 'white' } }} fullWidth label="Email address" type="email" value={cred.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <TextField sx={{ input: { color: 'white' }, label: { color: 'white' } }} fullWidth label="PassCode" type={showPassword ? "text" : "password"} value={cred.passcode} onChange={onChange} id="passcode" name="passcode"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }} />
            <LoadingButton fullWidth size="large" type="submit" variant="contained">
              Login...
            </LoadingButton>
          </Stack>
          <ToastContainer />
        </form></> : <><Stack spacing={3}><h1>Could I say... a GoodBye to you?</h1> <LoadingButton onClick={handleLogout} fullWidth size="large" type="submit" variant="contained">
          Logout...
        </LoadingButton></Stack>
        <ToastContainer />
      </>
      }

    </>
  );
}
