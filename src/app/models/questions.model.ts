import Answer from "./answers.models";

interface Question {
  correctAnswer?: string,
  question?: string,
  id?: string,
  answers?: Array<Answer>
};

export default Question;
