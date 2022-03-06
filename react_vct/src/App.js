// routes
import Router from './routes';
import React, { useState, useEffect } from 'react'
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataLoader from './components/DataLoader/DataLoader';
// components
// import ScrollToTop from './components/ScrollToTop';
// import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  
  return (
    <>
    {loading === false ? (
      <ThemeConfig>
      {/* <ScrollToTop /> */}
      <GlobalStyles />
      {/* <BaseOptionChartStyle /> */}
      <Router />
    </ThemeConfig>
    ) : (
      <DataLoader />
    )}
    </>
  );
}
