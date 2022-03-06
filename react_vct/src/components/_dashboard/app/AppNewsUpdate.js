// import faker from 'faker';
// import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import { formatDistance } from 'date-fns';
// import { Link as RouterLink } from 'react-router-dom';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
// import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line
import { Card, Typography, CardHeader } from '@mui/material';
// utils
// import { mockImgCover } from '../../../utils/mockImages';
//
// import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

// const NEWS = [...Array(5)].map((_, index) => {
//   const setIndex = index + 1;
//   return {
//     title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: mockImgCover(setIndex),
//     postedAt: faker.date.soon()
//   };
// });
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "#4a341e",
  fontWeight: "700",
  fontSize: "25px",
  backdropFilter: "blur(6px) saturate(180%)",
  webkitbackdropFilter: "blur(6px) saturate(180%)",
  backgroundColor: "rgba(155, 155, 155, 0.45)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)"
}));
// ----------------------------------------------------------------------

// NewsItem.propTypes = {
//   news: PropTypes.object.isRequired
// };

// function NewsItem() {
// const { image, title, description, postedAt } = news;

// return (<></>
// <Stack direction="row" alignItems="center" spacing={2}>
//   <Box
//     component="img"
//     alt={title}
//     src={image}
//     sx={{ width: 48, height: 48, borderRadius: 1.5 }}
//   />
//   <Box sx={{ minWidth: 240 }}>
//     <Link to="#" color="inherit" underline="hover" component={RouterLink}>
//       <Typography variant="subtitle2" noWrap>
//         {title}
//       </Typography>
//     </Link>
//     <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
//       {description}
//     </Typography>
//   </Box>
//   <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
//     {formatDistance(postedAt, new Date())}
//   </Typography>
// </Stack>
// );
// }

export default function AppNewsUpdate() {
  return (
    <RootStyle>

      <Typography className="text-center mb-5" style={{ fontWeight: "700", fontSize: "30px" }}>The Virtual Cycle Trip</Typography>
      <Typography className="text-center my-2" style={{ padding: "20px", fontWeight: "600", fontSize: "26px" }} >
        Every year Technology Adventure Society, IIT Kharagpur organises a Cycle Trip for the Freshers to get familiar with different places in the campus. To make sure that you guys don't miss on the experience this year, we have organised a Virtual Cycle Trip in the form of a Treasure Hunt to give you a virtual magical tour of the campus and win some exciting prizes along the way.

      </Typography>


    </RootStyle>
  );
}
