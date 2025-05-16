import { QuizConfig } from "../quiz-config";

export interface ConfigState {
  config: QuizConfig; 
}

export const initialConfigState: ConfigState = {
  config: new QuizConfig({
    allowBack: true,
    allowReview: true,
    autoMove: false,    
    duration: 10,  
    pageSize: 1,
    requiredAll: false,
    richText: false,
    shuffleQuestions: false,
    shuffleOptions: false,
    showClock: true,
    showPager: true
    
    }) // Initialiser avec une instance de QuizConfig 
}