// eslint-disable-next-line
import React, { useState } from "react"
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { RiGhost2Line } from 'react-icons/ri'




function MyVerticallyCenteredModal(props) {


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered

      contentClassName="custom-modal-style"
      dialogClassName="modal-w "
      className="mobile_view"
      transparent={true}
      style={{
        backdropFilter: "blur(6px) saturate(180%)",
        webkitbackdropFilter: "blur(6px) saturate(180%)",
        backgroundColor: "rgba(155, 155, 155, 0.45)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        marginLeft: "7%"
      }}
      closeButton
    >
      <Modal.Header style={{ backgroundColor: "rgba(91 48 8)", color: "#fff", fontSize: "40px" }} closeButton>
        <Modal.Title id="exampleModalCenterTitle" style={{ fontSize: "36px" }} >
          Instructions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton
        style={{ backgroundColor: "rgb(91 48 8)", border: "1px solid #333333" }}
      >
        <div style={{ padding: "7%", color: "#ffffff", fontWeight: "500", fontSize: "20px", lineHeight: "2.4" }}>
          1.	Click on "Let's Go" button on the page that appears to start the game. Beware… the countdown begins! So be quick.<br />
          2.  Do not use the back and forward buttons of your laptop. Use the one displayed on the screen.
          3.	On the screen, a clue indicating a location on the IIT KGP campus emerges. Guess the location and click on the respective pointer on the map.<br />
          4.	The pointer you choose opens an image of the same. This image contains spme vectors out of which only 1 vector is correct. Find that one, and you get the next hint on your screen.<br />
          5.	Click the Key icon in the top-left corner of the screen to see the clue once more. This area of the screen also allows you to check your score.<br />
          6.	To win interesting prizes, complete all of the riddles in the same way, as quickly as possible.<br />
          7.	Make sure you complete the VCT in one sitting. OR the time keeps increasing <br />
          PS: The music starts as you click on the Start button and you are not allowed to stop that <RiGhost2Line /> Refreshing the page stops the music, to play it again, click on the sound icon in the top-left of the screen
          PPS: Click on F11 button for Better Experience<RiGhost2Line />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;