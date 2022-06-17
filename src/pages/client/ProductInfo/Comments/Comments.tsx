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
import {
  CommentsStyle,
  CartStyle,
  CartHeader,
  CartContent,
  TextareaWrapper,
  AnswerButton,
  Textarea,
  AnswersWrapper,
} from "./Comments.styled";

interface CommentsProps {
  comments: QuestionType[];
  isReviews: boolean;
}
interface CartProps {
  comment: QuestionType;
  isReviews: boolean;
  setComment: (arg) => void;
  handleAddComment: (arg) => void;
}

const Cart: FC<CartProps> = ({
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
              <img src={AnswerArrowIcon} alt={"answer"} />
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
                      //@ts-ignore
                      ...answers,
                      {
                        id: answers?.length,
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
        {answers?.map((a) => {
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
            setComment={() => {}}
          />
        );
      })}
    </CommentsStyle>
  );
};

export default Comments;
