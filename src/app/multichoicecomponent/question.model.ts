export class Question {
  public text!: string;
  public answers!: string[];
  public correctAnswer!: number;

  public static from(object: any) {
    return Object.assign<Question, Question>(new Question(), object);
  }

  public hash() {
    return this.text.replace(/\s/g, '').split('\n').join('');
  }
}
