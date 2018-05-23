import React from 'react';
import { NavLink } from 'react-router-dom';
import WriteButton from './../../containers/showcase/writeButton';

const QuestionListShowcase = () => (
  <div className="homeUpper">
    <div className="jumbotron HomeJumbotron">
      <h1>돈이 곧 명예</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <span className="homeLBtn">
        <WriteButton />
      </span>
      <span className="homeRBtn dropdown">
        {/* <NavLink to="/mywallet" className="item">
          <button type="button" className="btn btn-outline-light btn-lg">
            정렬 방법
          </button>
        </NavLink> */}
        <button className="btn btn-outline-light btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          정렬방법
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">좋아요</a>
          <a className="dropdown-item" href="#">조회수</a>
          <a className="dropdown-item" href="#">리워드</a>
        </div>
      </span>
    </div>
  </div>
);

export default QuestionListShowcase;
