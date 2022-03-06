// import * as Yup from 'yup';
import { useState } from 'react';
// import { Icon } from '@iconify/react';
// import { useFormik, Form, FormikProvider } from 'formik';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ name: "", email: "", rollno: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com//user/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "POST",
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, rollno: cred.rollno })
    });
    const json = await response.json();
    // console.log(json);



    if (json.success === true) {
      setTimeout(() => {
        toast.success("User Created Successfully, Please Check Your Email ID for PassCode", {
          position: "top-center"
        });
      }, 100);
      setTimeout(() => {
        // localStorage.setItem("name", JSON.stringify(cred.name));
        // localStorage.setItem("email", JSON.stringify(cred.email));
        // localStorage.setItem("rollno", JSON.stringify(cred.rollno));
        // localStorage.setItem('token', json.authToken);
        navigate('/login', { replace: true });
      }, 5000);
    }
    else {
      toast.warn("Invalid Credentials", {
        position: "top-center"
      });
    }
  }
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  // eslint-disable-next-line
  const styles = theme => ({
    multilineColor:{
        color:'#fff'
    }
});
// eslint-disable-next-line

// eslint-disable-next-line
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 2),
  color: "#4a341e",
  fontSize: "40px",
  backdropFilter: "blur(6px) saturate(180%)",
  webkitbackdropFilter: "blur(6px) saturate(180%)",
  backgroundColor: "rgba(155, 155, 155, 0.45)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)"
}));
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <Stack spacing={3} style={{color:"#fff", backgroundColor:"rgba(155, 155, 155, 0.45)",borderRadius: "12px",
  border: "3px solid #6a3406",backdropFilter: "blur(6px) saturate(180%)", padding:"10px 10px"}}>
          {/* <RootStyle> */}
          <TextField sx={{ input: { color: 'white' } ,  label: { color: 'white' } }}  fullWidth label="User Name" type="text" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} style={{color:"#fff"}}/>
          <TextField sx={{ input: { color: 'white' } ,  label: { color: 'white' } }} fullWidth label="Email address" type="email" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} style={{color:"#fff"}}/>
          <TextField sx={{ input: { color: 'white' } ,  label: { color: 'white' } }} fullWidth label="Roll No." type="text" id="rollno" name="rollno" aria-describedby="emailHelp" onChange={onChange} style={{color:"#fff"}}/>
          <LoadingButton fullWidth size="large" type="submit" variant="contained">
            Register...
          </LoadingButton>
          {/* </RootStyle> */}
        </Stack>
        <ToastContainer />
      </form>
    </>
  );
}
