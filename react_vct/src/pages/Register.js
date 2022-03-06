import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
// import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  },
  backgroundImage: "url('https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Login%20and%20Resgister.jpg')",
  color:"#fff"
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  backdropFilter: "blur(6px) saturate(180%)",
  webkitbackdropFilter: "blur(6px) saturate(180%)",
  backgroundColor: "rgba(155, 155, 155, 0.45)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  color:"#fff",
  textAlign: "center"
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
  color:"#fff"
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | TAdS-VCT">
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            TAdS create a new user
          </Typography> */}
          <img alt="register" src="https://github.com/TAdS-VCT/Media/blob/main/BG%20images/register%20vector01.png?raw=true" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" gutterBottom>
              Register to Virtual Cycle Trip !
            </Typography>
            <Typography sx={{ color: '#fff' }}>Enter Your Details</Typography>
          </Box>
          <RegisterForm />
          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
