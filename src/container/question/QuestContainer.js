import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quest from '../../components/body/question/Quest';
import { fetchOne } from '../../store/actions/questionAction';

class QuestContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchOne(id);
  }

  render() {
    const { title, body } = this.props.question;
    return (
      <div>
        <Quest title={title} body={body} />
      </div>
    );
  }
}

QuestContainer.propTypes = {
  fetchOne: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

// 원하는이름 : state.(Reducer/index.js 정의한 이름).(initialState 해당 이름)
const mapStateToProps = state => ({
  question: state.questions.item,
});

// export default 커넥트(mapStateToProps, { action에 정의된 함수 })(해당 컴포넌트)
export default connect(mapStateToProps, { fetchOne })(QuestContainer);