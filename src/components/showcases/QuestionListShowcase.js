import React from 'react';
import WriteButton from './../../containers/showcase/writeButton';
import { NavLink } from 'react-router-dom';

const QuestionListShowcase = () => (
  <div className="ClauseUpper">
    <div className="jumbotron ClauseJumbotron">
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
          <NavLink className="dropdown-item" to="/loading/sort/good">좋아요</NavLink>
          <NavLink className="dropdown-item" to="/loading/sort/view">조회수</NavLink>
          <NavLink className="dropdown-item" to="/loading/sort/reward">리워드</NavLink>
        </div>
      </span>
    </div>
  </div>
);

export default QuestionListShowcase;
