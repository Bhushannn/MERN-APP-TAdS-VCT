import { useEffect, useState } from 'react';
import Page from '../components/Page';
import './User.css'
// import profileImg from './harrypotterbg.png'

export default function User() {
  const [username, setusername] = useState("");
  const userdeatils = async () => {
    const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response.json();
    // console.log(json);
    const name01 = json.name;
    setusername(name01);
    // console.log(username)
  }
  useEffect(() => {
    userdeatils();
  }, [username, setusername]);
  const participantID = [
    {
      "houseName": "Ravenclaw",
      "bloodStatus": "Pure-blood"
    },
    {
      "houseName": "Huffle Puff",
      "bloodStatus": "Half-blood"
    },
    {
      "houseName": "Gryffindor",
      "bloodStatus": "Muggle-born"
    },
    {
      "houseName": "Slytherin",
      "bloodStatus": "Pure-blood"
    }
  ]
  const x = Math.floor(Math.random() * (3) + 0);
  // const [isLoading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise(resolve => setTimeout(() => resolve(), 2500));
  // }

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div style={{
        backgroundImage: "url('https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Profilebg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        // paddingTop: '0',
        // paddingLeft: '6px',
        // paddingRight: '6px',
        marginTop: '0px',
        overflow: "hidden",
        fontStyle: "Poppins"
      }}>
        <Page title="User | TAdS-VCT">
          {/* {userdeatils} */}
          <div className="user_maindiv" >
            {/* <img src="https://github.com/TAdS-VCT/Media/blob/main/BG%20images/harrypotterbg.png?raw=true" alt="hey" className='house_image' /> */}
            <div className='user_details'>
              <h1>Name:<span>{`${username}`}</span></h1>
              {/* <h1>Name:<span>v</span></h1> */}
              {/* <h1>Rollno:<span>{`${userrollno}`}</span></h1> */}
              <h1>Species: <span>Wizard / Human</span></h1>
              <h1>Blood Status: <span>{participantID[x].bloodStatus}</span></h1>
              <h1>Registered:<span>Yes</span></h1>
              <h1>House:<span>{participantID[x].houseName}</span></h1>
            </div>
          </div>
        </Page >
      </div>
    </>
  );
}
