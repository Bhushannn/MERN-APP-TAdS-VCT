import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});
// eslint-disable-next-line
const MainStyle = styled('div')(({ theme }) => ({
    // flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%'
}));

// ----------------------------------------------------------------------

export default function GameLayout() {
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);

    return (
        <RootStyle>
            {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}

            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
