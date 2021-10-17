import Answer from "./answers.model";

interface Result {
  idQuestion?: string,
  question?: string,
  answer?: Answer,
  correct?: boolean,
}

interface Results {
  answers?: Array<Result>,
  id?: string,
};

export {Results, Result};
