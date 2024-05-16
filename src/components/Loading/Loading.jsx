import { MDBSpinner } from "mdb-react-ui-kit";

export default function Loading() {
  return (
    <div className="p-5 mt-5">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
}
