import { MDBSpinner } from "mdb-react-ui-kit";

export default function Loading() {
  return (
    <div className="d-flex flex-row justify-content-center w-100 align-items-center h-100">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
}
