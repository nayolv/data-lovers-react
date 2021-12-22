import { Modal } from "@mui/material";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalContainer = ({ open, handleClose, content, film }) => {
  return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div className="style-box">
    <section>
      <FaTimes onClick={handleClose}/>
    </section>
    <h2>
      Synopsis of "{film}"
    </h2>
    <p>
      {content}
    </p>
  </div>
</Modal>

  );
};
export default ModalContainer;
