// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
// import v1 from "./images/v1.png"
import "./Gymkhana.css"
import LazyLoad from 'react-lazyload';



export default function Gymkhana() {
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response1.json();
    // console.log(json);
    const name01 = json.userRiddleIndex;
    setUserIndex(name01);
    // console.log(userIndex, "userIndex--mainB--")
  }
  useEffect(() => {
    userdeatils();
    document.title="TAdS | VCT"
    // eslint-disable-next-line
    
  }, [userIndex, setUserIndex]);

  // -************************

  const UserRiddleupdatecount = async (score) => {
    const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/updatecount", {
      method: "PUT",
      headers: {
        "authToken": localStorage.getItem("usertoken"),
        "userScore": score
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json, "jiii");
  }
  // --------------------
  const navigate = useNavigate();
  const handlecorrect = () => {
    if (userIndex === 9) {
      toast.success("Ye to kamaal ho gya..dhoti faad ke rumaal ho gya...", {
        position: "top-center",
        autoClose: 1500
      });
      const score = userIndex + 1;
      // console.log("score---> ", score)
      UserRiddleupdatecount(score);
      setTimeout(() => {
        navigate("/game/map", { replace: true });
      }, 2000);
    }
    else {
      toast.error("Are you comedy me....", {
        position: "top-center",
        autoClose: 2000
      });
    }
  }
  // eslint-disable-next-line
  const handlewrong1 = () => {
    toast.error("Itna Galat Kaise ho sakte ho....", {
      position: "bottom-center",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong2 = () => {
    toast.error("Udi  baba... Mera 20 saal ka tajurba mei itna galat kabhi nhi dekha.", {
      position: "top-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong3 = () => {
    toast.error("Be Hermione, not be Ron, give a try more bcoz you are wrong", {
      position: "top-right",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong4 = () => {
    toast.error("Kacha badaam dada kacha badaam... Galti kar di hai tumnei sanam...", {
      position: "bottom-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong5 = () => {
    toast.error("Aise jawab ke liye aapko Hogwarts...jaadu aur tantr ke vidyalaya se nikala jata hai...", {
      position: "bottom-right",
      autoClose: 3000
    });
  }



  return (
    <>
      <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/new_riddles/TSG_Pic%20horror%20f%20(1).png?raw=true"} alt="hii" className='gym' /></LazyLoad>
      <div className='backbutton'>
        <h1 className="mx-3">
          <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
        </h1>
      </div>
      <div className="xyz1">
        {/* <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/TSG/fur.png?raw=true"} alt="hii" className='vectors gym1' onClick={handlecorrect} aria-hidden="true" /> */}
        <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/TSG/dustbin-01.png?raw=true"} alt="hii" className='vectors gym2' onClick={handlecorrect} aria-hidden="true" />
        <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/TSG/flying%20bat.png?raw=true"} alt="hii" className='vectors gym3' onClick={handlewrong3} aria-hidden="true" />
        {/* <img src={v1} alt="hii" className='vectors gym4' onClick={handlewrong1} aria-hidden="true" /> */}
        {/* <img src={v1} alt="hii" className='vectors gym5' onClick={handlewrong1} aria-hidden="true" /> */}
        <ToastContainer />
      </div>
    </>
  )
}
  