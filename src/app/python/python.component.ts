import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from 'confetti-js';
import { LearningComponent } from '../common/learningComponent';
import { Question } from '../multichoicecomponent/question.model';
import { Quiz } from '../multichoicecomponent/quiz.model';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent extends LearningComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  public introduction: string = `
  Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write, and it is also very powerful. Python is a great language to learn if you are interested in data science because it is very easy to learn and it is also very powerful. Python is a general-purpose programming language that is becoming increasingly popular in the data science community. It is a high-level language that is easy to read and write`;

  public examples: { title: string; code: string; output: string | null }[] = [
    {
      title: 'Example 1',
      code: `
        # This is a comment
        print("Hello World")
      `,
      output: 'Hello World',
    },
    {
      title: 'For loop',
      code: `
      for i in range(10):
        print(i)`,
      output: `
      0
      1
      2
      3
      4
      5
      6
      7
      8
      9`,
    },
    {
      title: 'While loop',
      code: `
      i = 0
      while i < 10:
        print(i)
        i += 1`,
      output: `
      0
      1
      2
      3
      4
      5
      6
      7
      8
      9`,
    },
    {
      title: 'If statement',
      code: `
      if 1 < 2:\n
        print("1 is less than 2")`,
      output: '1 is less than 2',
    },
  ];

  public videos: any[] = [
    {
      title: 'Python Tutorial for Beginners',
      url: 'https://www.youtube.com/embed/YYXdXT2l-Gg',
    },
    {
      title: 'Python for Data Science',
      url: 'https://www.youtube.com/embed/LHBE6Q9XlzI',
    },
  ];

  public diagrams: any[] = [
    {
      title: 'List explanation',
      url: 'https://miro.medium.com/max/1400/1*01vApchQJQjewbR3w0-O0w.png',
    },
  ];

  public quizzes: Quiz[] = [
    {
      title: 'Python Quiz 1',
      questions: [
        {
          text: 'What is the output of the following code? \n\na = [1, 2, 3]\nb = a\nb[1] = 4\nprint(a)',
          answers: ['[1, 2, 3]', '[1, 4, 3]', '[4, 2, 3]', 'Error'],
          correctAnswer: 1,
        },
        {
          text: 'What is the correct way to import the math module?',
          answers: [
            'import math',
            'include math',
            'using math',
            'require math',
          ],
          correctAnswer: 0,
        },
        {
          text: 'What is the output of the following code? \n\nx = "Hello"\ny = "World"\nprint(x + " " + y)',
          answers: ['Hello World', 'Hello', 'World', 'Error'],
          correctAnswer: 0,
        },
        {
          text: 'What is the correct way to define a function in Python?',
          answers: [
            'function myFunc()',
            'def myFunc():',
            'myFunc() {',
            'function = myFunc',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What is the output of the following code? \n\nx = [1, 2, 3]\nx.append(4)\nprint(x)',
          answers: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
          correctAnswer: 1,
        },
        {
          text: 'What is the output of the following code? \n\nx = "python"\nprint(x[2:4])',
          answers: ['th', 'yt', 'on', 'Error'],
          correctAnswer: 0,
        },
        {
          text: 'What is the output of the following code? \n\nx = {"name": "John", "age": 30}\nprint(x["name"])',
          answers: ['John', '30', 'name', 'Error'],
          correctAnswer: 0,
        },
        {
          text: 'What is the output of the following code? \n\nx = ["apple", "banana", "cherry"]\nfor i in x:\n    print(i)',
          answers: ['apple', 'banana', 'cherry', 'Error'],
          correctAnswer: 0,
        },
      ].map(Question.from),
    },
  ];

  public checkQuizAnswer(answer: number, question: Question) {
    console.log(answer, question);
    console.log(answer === question.correctAnswer);
    const confettiSettings = {
      target: `canvas-${question.hash()}`,
      size: 1,
      max: 150,
      animate: true,
      props: ['square', 'triangle', 'line'],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: 25,
      rotate: false,
      width: 200,
      height: 200,
      start_from_edge: true,
    };
    const confetti = new ConfettiGenerator(confettiSettings);

    if (answer === question.correctAnswer) {
      confetti.render();

      return true;
    } else {
      confetti.clear();
      return false;
    }
  }

  public quizzenabled: boolean = false;
}
