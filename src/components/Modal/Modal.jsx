import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { MDBModal, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";

const ImageModal = forwardRef(function Modal({ children, size }, ref) {
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
        <MDBModalContent>{children}</MDBModalContent>
      </MDBModalDialog>
    </MDBModal>,
    document.getElementById("modal")
  );
});

export default ImageModal;
