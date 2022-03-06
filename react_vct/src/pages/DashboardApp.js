// material
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
// import { style } from '@mui/system';
// import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';
// components
// import Page from '../components/Page';
import {
  // AppTasks,
  // AppNewUsers,
  // AppBugReports,
  // AppItemOrders,
  AppWeeklySales,
  AppNewsUpdate,
  AppOrderTimeline,
  // AppCurrentVisits,
  // AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentSubject,
  // AppConversionRates,
  // AppTasks
} from '../components/_dashboard/app';
// import whitepng from './white.png'

// ----------------------------------------------------------------------
// document.body.title("Hello");
export default function DashboardApp() {
  return (
    <>

      <div
        style={{
          backgroundColor: '#c7b48a',
          backgroundImage: 'url("https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/content%20BK.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          paddingTop: '0',
          paddingLeft: '6px',
          paddingRight: '6px',
          marginTop: '0px',
          // overflow: 'visible'
          // overflow: 'scroll'
        }}
      >
        <Page title="TAdS | VCT">
          <Container maxWidth="xl">
            <Box sx={{ pb: 3 }}>
              <Typography variant="h2" style={{textAlign: 'center',fontWeight: '800'}}><span style={{color: 'red'}}>T</span>echnology <span style={{color: 'red'}}>Ad</span>venture <span style={{color: 'red'}}>S</span>ociety<div className="blockquote-footer" style={{textAlign: 'center', marginTop:"10px"}}> Welcomes You...</div></Typography>
              {/* <img src={whitepng} alt="hey" className='house_image' /> */}
            </Box>
            {/* <DashboardNavbar/> */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <AppWeeklySales />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppNewUsers /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppItemOrders /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppBugReports /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <AppNewsUpdate />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <AppOrderTimeline />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppCurrentVisits /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                {/* <AppWebsiteVisits /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                {/* <AppConversionRates /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppCurrentSubject /> */}
              </Grid>

              <Grid item xs={12} md={9} lg={12}>
                {/* <AppTrafficBySite /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppTasks /> */}
              </Grid>
            </Grid>
          </Container>
        </Page>
      </div>
    </>
  );
}
