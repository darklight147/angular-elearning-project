import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from 'confetti-js';
import { LearningComponent } from '../common/learningComponent';
import { Question } from '../multichoicecomponent/question.model';
import { Quiz } from '../multichoicecomponent/quiz.model';

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.css'],
})
export class BashComponent extends LearningComponent implements OnInit {
  ngOnInit(): void {}

  public introduction: string = `
  Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used widely as the default login shell for most Linux distributions and Apple's macOS Mojave and earlier releases. It has been included as the default shell in most free Unix-like operating systems. Bash is a command language interpreter that executes commands read from the standard input device, the keyboard. Bash also incorporates useful features from the Korn and C shells (ksh and csh).
  `;
  examples = [
    {
      title: 'List files',
      code: `ls`,
      output: `file1.txt file2.txt file3.txt`,
    },
    {
      title: 'Print working directory',
      code: `pwd`,
      output: `/home/user`,
    },
    {
      title: 'Change directory',
      code: `cd /home/user`,
      output: ``,
    },
    {
      title: 'Create directory',
      code: `mkdir /home/user/newdir`,
      output: null,
    },
    {
      title: 'Remove directory',
      code: `rmdir /home/user/newdir`,
      output: null,
    },
  ];

  videos = [
    {
      title: 'Bash Tutorial for Beginners',
      url: 'https://www.youtube.com/embed/oxuRxtrO2Ag',
    },
  ];

  diagrams = [
    {
      title: 'Bash Architecture',
      url: 'https://automationlaboratories.com/wp-content/uploads/2018/02/Shell.png',
    },
  ];

  public quizzes: Quiz[] = [
    {
      title: 'Bash Basics',
      questions: [
        {
          text: 'What is the command to list files?',
          answers: ['ls', 'list', 'dir', 'show'],
          correctAnswer: 0,
        },
        {
          text: 'What is the command to print working directory?',
          answers: ['pwd', 'print', 'dir', 'show'],
          correctAnswer: 0,
        },
        {
          text: 'What is the command to change directory?',
          answers: ['cd', 'change', 'dir', 'show'],
          correctAnswer: 0,
        },
        {
          text: 'What is the command to create directory?',
          answers: ['mkdir', 'create', 'dir', 'show'],
          correctAnswer: 0,
        },
      ],
    },
  ];
  public quizzenabled = false;

  public checkQuizAnswer(answer: number, question: Question): boolean {
    console.log(answer, question);
    console.log(answer === question.correctAnswer);
    if (answer === question.correctAnswer) {
      const confettiSettings = {
        target: `canvas-${question.text}`,
        max: 150,
        size: 1,
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
      confetti.render();

      return true;
    } else {
      return false;
    }
  }
}
