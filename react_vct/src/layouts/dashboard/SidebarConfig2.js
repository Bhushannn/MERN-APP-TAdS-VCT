import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import logout from '@iconify/icons-eva/log-out-fill';


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

// const handleonclick= () =>{
// display:none;
// }

const sidebarConfig2 = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Profile',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Virtual Cycle Trip',
    path: '/dashboard/vct',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Logout',
    path: '/login',
    icon: getIcon(logout)
  }
];
export default sidebarConfig2;

