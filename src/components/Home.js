import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="box">
      <Link to="/chest" className="move">
        가슴
      </Link>
      <Link to="/lower" className="move">
        다리
      </Link>
      <Link to="/back" className="move">
        등
      </Link>
      <Link to="/shoulder" className="move">
        어깨
      </Link>
      <Link to="/arm" className="move">
        팔
      </Link>
    </div>
  );
};

export default Home;
