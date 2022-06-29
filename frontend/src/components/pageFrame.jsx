import { useParams } from "react-router-dom";
import Nav from "./nav";
import { Outlet } from "react-router-dom";

export default function PageFrame() {
  let params = useParams();
  return (
    <>
      <Nav></Nav>
      <Outlet />
    </>
    
  );
}
