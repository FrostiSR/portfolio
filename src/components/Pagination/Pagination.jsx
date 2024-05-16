import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import "./Pagination.css";

export default function Pagination({ clickFunc, pageConst, activeClassPag }) {
  return (
    <div>
      <MDBPagination className="mb-0 ">
        <MDBPaginationItem>
          <MDBPaginationLink
            className={activeClassPag}
            onClick={clickFunc}
            aria-disabled="true"
          >
            {pageConst}
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </div>
  );
}
