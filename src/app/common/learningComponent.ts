import { Question } from '../multichoicecomponent/question.model';
import { Quiz } from '../multichoicecomponent/quiz.model';

interface Video {
  title: string;
  url: string;
}
interface Diagram {
  title: string;
  url: string;
}

export abstract class LearningComponent {
  public abstract introduction: string;
  public abstract examples: any[];
  public abstract videos: Video[];
  public abstract diagrams: Diagram[];
  public abstract quizzes: Quiz[];

  public checkAnswer(answer: string, question: Question): boolean {
    return answer.trim().toLowerCase() === question.text.toLowerCase();
  }

  public checkSimilarity(a: string, b: string) {
    const aWords = a.replace(/(\s)+/g, ' ').trim().split(' ');
    const bWords = b.replace(/(\s)+/g, ' ').trim().split(' ');
    const aSet = new Set(aWords);
    const bSet = new Set(bWords);
    const intersection = new Set([...aSet].filter((x) => bSet.has(x)));
    return intersection.size / aWords.length;
  }
}
