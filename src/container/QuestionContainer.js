import React, { Component } from 'react';
import Question from '../components/routes/Question';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions } from '../store/actions/questionAction';

class QuestionContainer extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const posts = this.props.questions;
    return (
      <div>
        <Question posts={posts} />
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  questions: state.questions.items,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchQuestions })(QuestionContainer);