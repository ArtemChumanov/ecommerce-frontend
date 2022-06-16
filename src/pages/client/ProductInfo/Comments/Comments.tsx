import React, { FC, useState } from "react";
import styled from "styled-components/macro";
import Button from "../../../../components/shared/UI-elements/Button/Button";
import { QuestionType } from "../../../../types/types";
import { useAppDispatch } from "../../../../redux/store";
import {
  addReviewByProduct,
  updateReviewByProduct,
} from "redux/products/actions";
import moment from "moment";
import Rating from "../../../../components/Rating/Rating";
// @ts-ignore
import AnswerArrowIcon from "assets/icons/right-arrow-answer.svg";
interface CommentsProps {
  comments: QuestionType[];
  isReviews: boolean;
}
interface CartProps {
  comments: QuestionType;
  isReviews: boolean;
}

const Cart: FC<any> = ({
  comment: { id, question, date, answers },
  isReviews,
  setComment,
  handleAddComment,
}) => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [textAnswer, setTextAnswer] = useState("");

  const handleAnswer = () => {
    setShowTextArea(!showTextArea);
    setComment("");
  };
  return (
    <CartStyle>
      <CartHeader>
        <h3>{"Name  Name"}</h3>
        <span>{date}</span>
      </CartHeader>
      <CartContent>
        <p>{question}</p>
        {isReviews && <Rating countActive={3} size={"small"} />}
        <TextareaWrapper>
          {!showTextArea ? (
            <AnswerButton onClick={handleAnswer}>
              <img src={AnswerArrowIcon} />
              {"Answer"}
            </AnswerButton>
          ) : (
            <>
              {" "}
              <Textarea
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
              />
              <Button
                title={"Add comment"}
                onClick={() =>
                  handleAddComment({
                    id,
                    question,
                    date,
                    answers: [
                      ...answers,
                      {
                        id: answers.length,
                        date: moment().format("DD.MM.YY"),
                        text: textAnswer,
                      },
                    ],
                  })
                }
              />
            </>
          )}
        </TextareaWrapper>
      </CartContent>
      <AnswersWrapper>
        {answers.map((a) => {
          return (
            <>
              <CartHeader>
                <h3>{"Name  Name"}</h3>
                <span>{date}</span>
              </CartHeader>
              <CartContent>
                <p>{a.text}</p>
              </CartContent>
            </>
          );
        })}
      </AnswersWrapper>
    </CartStyle>
  );
};

const Comments: FC<CommentsProps> = ({ comments, isReviews }) => {
  const [comment, setComment] = useState("");
  const dispatch = useAppDispatch();
  const handleAddComment = (value) => {
    if (value) {
      dispatch(updateReviewByProduct(value));
    } else {
      dispatch(
        addReviewByProduct({
          question: comment,
          date: moment().format("DD.MM.YY"),
          answers: [],
        })
      );
      setComment("");
    }
  };
  return (
    <CommentsStyle>
      <TextareaWrapper>
        <Textarea
          placeholder={"Enter your comment"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={() => handleAddComment(null)} title={"Add comment"} />
      </TextareaWrapper>

      {comments.map((c) => {
        return (
          <Cart
            comment={c}
            isReviews={isReviews}
            handleAddComment={handleAddComment}
          />
        );
      })}
    </CommentsStyle>
  );
};

export default Comments;

const CommentsStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartStyle = styled.div`
  display: flex;
  flex-direction: column;
  //width: 90%;
  margin-bottom: 40px;
`;
const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e9e9e9;
  border-style: solid solid none solid;
  box-sizing: border-box;
  h3,
  span {
    padding: 3px 10px;
  }
`;
const CartContent = styled.div`
  border: 1px solid #e9e9e9;
  border-style: solid solid solid solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 20px 10px;
  //p {
  //  //padding: 20px 10px;
  //  margin: 0 0;
  //}
`;
const AnswersWrapper = styled.div`
  &:before {
    position: absolute;
    height: calc(100% - 10px);
    content: "";
    border-left: 1px solid #e9e9e9;
    left: 0;
    top: 0;
  }
  position: relative;
  width: 100%;
  padding: 0 0 0 15px;
`;
const TextareaWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const Textarea = styled.textarea`
  width: inherit;
  display: block;
  margin-bottom: 5px;
`;

const AnswerButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primaryGreen};
  cursor: pointer;

  img {
    width: 10px;
    height: 9px;
    margin-right: 10px;
  }
`;
