import React from 'react';
import ReactMarkDown from 'react-markdown';
import moment from 'moment';
import '../../../styles/css/QuestionEntry.css';
import {
  QuestionAnswer,
  LikeCount,
  ViewCount,
  Reward,
  Writer,
  Reply,
  TenaryOption,
} from './question-entry';
import { Tags } from '../question/question-list';
import QuestionEntryShowcase from '../../showcases/QuestionEntryShowcase';

const QuestionEntry = ({
  username,
  myID,
  userID,
  title,
  qBody,
  qGood,
  qView,
  tags,
  qReward,
  qTime,
  pickAnswer,
  raiseLikeCount,
  replies,
  answers,
  qID,
  image,
  existPickedAnswer,
  postQuestionReply,
  postAnswerReply,
  deleteQuestion,
  deleteAnswer,
  deleteChAnswer,
  deleteReply,
  fetchModifyQuestion,
  fetchModifyAnswer,
  isLoggedIn,
  dealBreak,
  setRecipient,
}) => (
  <div>
    <QuestionEntryShowcase />
    <div className="QuestionEntryHeader">
      <div className="QuestionEntryHeaderTop">
        <h1>{title}</h1>
        {existPickedAnswer ? (
          <span className="badge badge-info complete-badge">
            <h5>채택이 완료된 게시글 입니다</h5>
          </span>
        ) : null}
      </div>
      <Tags tags={tags} />
    </div>

    <div className="QuestionEntryMain">
      <div className="QuestionEntryMainFirst">
        <LikeCount count={qGood} raiseLikeCount={raiseLikeCount} isLoggedIn={isLoggedIn} />
      </div>
      <div className="QuestionEntryMainSecond">
        <ReactMarkDown source={qBody.replace(/(?:\r↵|\r|↵)/g, '\n')} />
        <div className="write-info">
          {moment(qTime)
            .startOf()
            .fromNow()}에 작성 되었습니다
          <span>
            {myID === userID && (
              <TenaryOption
                deleteQuestion={deleteQuestion}
                fetchModifyQuestion={fetchModifyQuestion}
                qID={qID}
              />
            )}
          </span>
        </div>
        <div className="QuestionEntryMainSecondReplyTitle">댓글</div>
        <div className="QuestionEntryMainSecondReply">
          {replies.map(reply => (
            <Reply
              myID={myID}
              username={reply.username}
              userID={reply.userID}
              rID={reply.rID}
              body={reply.rBody}
              time={reply.rTime}
              deleteReply={deleteReply}
              key={reply.rID}
            />
          ))}
        </div>
        <div className="QuestionEntryAnswerSecondReplyAdd">
          <div className="form-group QuestionEntryAnswerSecondReplyAddInput">
            <label htmlFor="exampleFormControlTextarea1">add a comment</label>
            <textarea
              className="form-control questionReplyBody"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <div className="QuestionEntryAnswerSecondReplyAddBtn">
            <button
              onClick={() => postQuestionReply(qID)}
              className="btn btn-primary mb-2 write-btn"
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="QuestionEntryMainThird">
        <div className="QuestionEntryMainThirdItemBox">
          <ViewCount count={qView} />
        </div>
        <div className="QuestionEntryMainThirdItemBox">
          <Reward reward={qReward} />
        </div>
        {myID === userID && <div>종결</div>}
        <div className="QuestionEntryMainThirdItemBox">
          <Writer username={username} userID={userID} image={image} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </div>
    <div className="QuestionEntryHeader">
      <div className="QuestionEntryHeaderTop">
        <h1>답변 {answers.length}</h1>
      </div>
    </div>
    <div className="QuestionEntryAnswer">
      {answers.map(answer => (
        <QuestionAnswer
          aID={answer.aID}
          myID={myID}
          username={answer.username}
          questionID={userID}
          userID={answer.userID}
          isLoggedIn={isLoggedIn}
          picked={answer.picked}
          chAnswers={answer.chAnswers}
          count={answer.aGood}
          body={answer.aBody}
          time={answer.aTime}
          aImage={answer.aImage}
          pickAnswer={pickAnswer}
          raiseLikeCount={raiseLikeCount}
          postAnswerReply={postAnswerReply}
          deleteAnswer={deleteAnswer}
          deleteChAnswer={deleteChAnswer}
          fetchModifyAnswer={fetchModifyAnswer}
          key={answer.aID}
          dealBreak={dealBreak}
          setRecipient={setRecipient}
        />
      ))}
    </div>
  </div>
);

export default QuestionEntry;

/* <div className="QuestionEntryAnswer">
  <Answer count={7} raiseLikeCount={raiseLikeCount} />
</div>; */
