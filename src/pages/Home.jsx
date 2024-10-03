import { Link, NavLink } from "react-router-dom";

export default function Home(){
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About Page</Link>
      <NavLink to="/">Home Page</NavLink>
    </>
  );
}