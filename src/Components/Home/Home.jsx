import React from "react";
import { Link, NavLink } from "react-router";
import "./home.css";

const Home = () => {
  return (
    <div>
      <h1>Hi,,Iam Md Nazmul Hossen</h1>
      <h3>This is Home Component</h3>

      <nav>
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/main">Main</a>
        </li>
        <li>
          <a href="/navigation">Navigation</a>
        </li>
        <li>
          <a href="/app">App</a>
        </li> */}

        <NavLink to="/">
          {({ isPending }) => <p>Home {isPending && <p>Loading....</p>}</p>}
        </NavLink>
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/navigation">Navigation</NavLink>
        <NavLink to="/app">App</NavLink>
        <NavLink to="/albums">
          {({ isPending }) => <p>Album {isPending && <p>Loading....</p>}</p>}
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/comments">Comments</NavLink>
      </nav>
    </div>
  );
};

export default Home;
