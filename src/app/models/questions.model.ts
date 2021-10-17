import Answer from "./answers.model";

interface Question {
  correctAnswer?: string,
  question?: string,
  id?: string,
  answers?: Array<Answer>,
  selectedAnswer?: Answer
};

export default Question;
