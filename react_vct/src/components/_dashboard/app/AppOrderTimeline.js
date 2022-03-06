// import faker from 'faker';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// material
// eslint-disable-next-line
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
// import {
//   Timeline,
//   TimelineItem,
//   TimelineContent,
//   TimelineConnector,
//   TimelineSeparator,
//   TimelineDot
// } from '@mui/lab';
import { styled } from '@mui/material/styles';
// utils
// import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  // textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "#4a341e",
  fontSize: "40px",
  backdropFilter: "blur(6px) saturate(180%)",
  webkitbackdropFilter: "blur(6px) saturate(180%)",
  backgroundColor: "rgba(155, 155, 155, 0.45)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)"
}));

// const TIMELINES = [
//   {
//     title: 'TAdS Introductory Seminar',
//     string: '27th December 2021',
//     type: 'order1'
//   },
//   {
//     title: 'TAdS Virtual Cycle Trip',
//     string: '29th January 2022',
//     type: 'order2'
//   },
//   {
//     title: 'TAdS Upcoming Event',
//     string: 'To Be Announced',
//     type: 'order3'
//   },
//   {
//     title: 'TAdS Upcoming Event1',
//     string: 'To Be Announced',
//     type: 'order4'
//   },
//   {
//     title: 'TAdS Upcoming Event2',
//     string: 'To Be Announced',
//     type: 'order5'
//   }
// ];

// ----------------------------------------------------------------------

// OrderItem.propTypes = {
//   item: PropTypes.object,
//   isLast: PropTypes.bool
// };

// function OrderItem({ item, isLast }) {
//   const { type, title, string } = item;
//   return (
//     <TimelineItem>
//       <TimelineSeparator>
//         <TimelineDot
//           sx={{
//             bgcolor:
//               (type === 'order1' && 'primary.main') ||
//               (type === 'order2' && 'success.main') ||
//               (type === 'order3' && 'info.main') ||
//               (type === 'order4' && 'warning.main') ||
//               'error.main'
//           }}
//         />
//         {isLast ? null : <TimelineConnector />}
//       </TimelineSeparator>
//       <TimelineContent>
//         <Typography variant="subtitle2">{title}</Typography>
//         <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//           {string}
//         </Typography>
//       </TimelineContent>
//     </TimelineItem>
//   );
// }

export default function AppOrderTimeline() {
  return (
    // <RootStyle>
    //   <Card
    //   sx={{
    //     '& .MuiTimelineItem-missingOppositeContent:before': {
    //       display: 'none'
    //     }
    //   }}
    // >
    //   <CardHeader title="Event Timeline" />
    //   <CardContent>
    //     <Timeline>
    //       {TIMELINES.map((item, index) => (
    //         <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
    //       ))}
    //     </Timeline>
    //   </CardContent>
    // </Card>
    // </RootStyle>
    <RootStyle>

      <Typography className="text-center mb-3" style={{ fontWeight: "600", fontSize: "30px" }}>Instructions and Rules</Typography>
      <Typography className="text my-2" style={{ padding: "10px", fontWeight: "600", fontSize: "20px" }} >
        1) Please use Desktop/Laptop <br />
        2) Register with a username and your email id. 	<br />
        3) You will get a passcode through the email registered.<br />
        4) Then login using the email id and the passcode.<br />
        5) Voila! You successfully entered the Hogwarts world.<br />
        6) Now take the hints from the clue displayed and find the location accordingly.<br />
        7) Try to find the hidden clue in that location and continue your magical virtual tour of IIT KGP!!.

      </Typography>

    </RootStyle>
  );
}
