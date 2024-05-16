import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import "./Modal.css";

const ContentModal = forwardRef(function Modal({ title, children, size }, ref) {
  const [centredModal, setCentredModal] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setCentredModal(!centredModal);
      },
      onClose: () => {
        setCentredModal(false);
      },
    };
  });

  return createPortal(
    <MDBModal
      tabIndex="-1"
      open={centredModal}
      onClose={() => setCentredModal(false)}
    >
      <MDBModalDialog size={size} centered className="justify-content-center">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle className="text-dark">{title}</MDBModalTitle>
          </MDBModalHeader>
          <MDBModalBody>{children}</MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>,
    document.getElementById("modal")
  );
});

export default ContentModal;
