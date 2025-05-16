import { Quiz } from "../quiz";
import { QuizConfig } from "../quiz-config";

export interface CounterState {
  counter: number;
 // quiz?:Quiz;
 configdata:QuizConfig;
  
}

// État initial
export const initialCounterState: CounterState = {
  counter: 0
  ,configdata:new QuizConfig({}) // Initialiser avec une instance de QuizConfig
};