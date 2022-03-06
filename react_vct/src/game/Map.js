import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../components/Page';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { GiStarKey } from 'react-icons/gi';
// import { ProgressBar } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from 'react-bootstrap'
import Sound from './images/theme.mp3'
import { AiFillSound } from 'react-icons/ai'
import './map.css';
// eslint-disable-next-line
import DataLoader from 'src/components/DataLoader/DataLoader';
import LazyLoad from 'react-lazyload';

export default function Map() {

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
        const n1 = json.userRiddleIndex;
        setUserIndex(n1);
    }
    // useEffect(() => {
    //     userdeatils();
    //     // setTimeout(() => userdeatils(), 2000);
    //     // console.log(userIndex)
    //     // eslint-disable-next-line
    // }, []);

    // -------------------
    const navigate = useNavigate();
    const [riddles, setRiddles] = useState(" ");
    const riddledeatils = async () => {
        const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/riddle/getriddle2", {
            method: "GET",
            headers: {
                "riddleIndex": userIndex,
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        const json = await response.json();
        setRiddles(json.Result[0].riddle)
        // console.log(riddles);
    }
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        userdeatils();
        riddledeatils();
        // setTimeout(() => riddledeatils(), 1000);
        // setTimeout(() => setLoading(false), 6000)
        // eslint-disable-next-line 
    }, [userIndex, riddles]);

    // const s = userIndex * 7;
    if (userIndex === 17) {
        toast.error("Lorem ipsum dolorunde sed dignissimos magni minima doloremque praesentium est id! Sunt, eum libero!", {
            position: "top-center",
            autoClose: 3000
        });
        navigate("/game/gameEnd", { replace: true })
    }

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    let audio = new Audio(Sound)

    const playBg = () => {
        window.focus();
        audio.pause()
        audio.play()

        audio.loop = true
    }


    return (
        <>
            {/* {loading === false ? ( */}
            <Page title="Map | TAdS-VCT">
                <ToastContainer />
                <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/BG%20images/map%20vct%20final.png?raw=true"} alt="hii" className='mapvct' id='mapvct' /></LazyLoad>
                <div className="box" id='map'>
                    <div className="xyz">
                        <div className='d-flex justify-content-start'>
                            <h1 className="iconBody  mx-4 mt-1" >
                                <FaChevronCircleLeft color="#000000" onClick={() => navigate("/", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
                                <AiFillSound color="#000000" onClick={playBg} aria-hidden="true" style={{ cursor: "pointer", marginLeft: "20px" }} />
                            </h1>
                            <h1 className="iconBody mx-1 mt-1" >
                                <GiStarKey color="#000000" show={show} onClick={handleShow} style={{ cursor: "pointer" }} />
                            </h1>
                        </div>

                        <h4 className='mx-4 mt-1' style={{ textShadow: "1px 1px red", color: "white" }}>Score: {`${userIndex}`} / 17 </h4>
                        <div>
                            <Modal size="lg" show={show} onHide={handleClose} centered style={{ opacity: "0.5", fontSize: "40px" }} >

                                <Modal.Header style={{ backgroundColor: "#4A341E", color: "#fff", fontSize: "40px" }} closeButton>
                                    <Modal.Title id="exampleModalCenterTitle" style={{ fontSize: "36px" }} >
                                        Here's Your Hint
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ fontSize: "40px" }}>
                                    <br />
                                    <h5 style={{ fontSize: "36px" }}>
                                        {`${riddles}`}
                                    </h5>
                                    <br />
                                </Modal.Body>
                            </Modal>
                        </div>
                        {/* <div className="container">
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalCenterTitle">Here's Your Hint</h5>
                                        </div>
                                        <div className="modal-body">
                                            {`${riddles}`}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>



                    {/* ---------------------------- */}



                    <LazyLoad>
                        <div className="img__wrap">
                            <img className="MAIN_BUILDING img__img" id="00MB" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/mb", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Main Building</p>
                            </div>
                        </div>
                        <div className="img__wrap">
                            <img className="LAKE" id="01lake" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/lake", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Lake</p>
                            </div>
                        </div>
                        <div className="img__wrap">
                            <img className="NALANDA" id="02nalanda" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/nalanda", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Nalanda</p>
                            </div>
                        </div>
                        <div className="img__wrap">
                            <img className="NEHRU_MUSEUM" id="03NehruMuseum" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/nehru", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Nehru Museum</p>
                            </div>
                        </div>
                        <div className="img__wrap">
                            <img className="CLOCK_TOWER" id="04tower" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/clock", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Clock Tower</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="SHIRU_CAFE" id="05shiru" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/shiru", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Shiru Cafe</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="TECH_MARKET" id="06TechMarket" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/techm", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Tech Market</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="JNAN_GHOSH" id="07jnan" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/jg", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Jnan Ghosh</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="AGRICULTURE_DEPARTMENT" id="08agri" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/agri", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Agriculture Department</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="GYMKHANA" id="09gym" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game//gym", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Technology Students Gymkhana</p>
                            </div>
                        </div>

                        <div className="img__wrap"><img className="TOAT" id="10Toat" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/toat", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Tagore Open Air Theater</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="LIBRARY" id="11lib" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/lib", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Library</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="PFC" id="12Pfc" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/pfc", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">PAN Food Center</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="SBI" id="13Sbi" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/sbi", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">SBI</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="PURI_GATE" id="14puri" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/puri", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Puri Gate</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="Chedis" id="15chedis" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/chedis", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Chedis</p>
                            </div>
                        </div>
                        <div className="img__wrap"><img className="Pls" id="16pls" src={"https://github.com/TAdS-VCT/Media/blob/main/pointer.png?raw=true"} alt="pointer" onClick={() => navigate("/game/pls", { replace: true })} aria-hidden="true" />
                            <div className="img__description_layer">
                                <p className="img__description">Professor Lake Side</p>
                            </div>
                        </div>
                    </LazyLoad>
                </div>
            </Page>
            {/* ) : (
                <DataLoader /> */}
            {/* )} */}
        </>
    )
}

