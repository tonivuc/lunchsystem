import { useParams } from "react-router-dom";
import Nav from "../components/nav";
import { Outlet } from "react-router-dom";

export default function LunchWishes() {
  let params = useParams();
  return (
    <>
      <h2>Lunch wishes page placeholder</h2>
    </>
    
  );
}
