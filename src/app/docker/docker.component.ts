import { Component, OnInit } from '@angular/core';
import { LearningComponent } from '../common/learningComponent';
import { Question } from '../multichoicecomponent/question.model';
import { Quiz } from '../multichoicecomponent/quiz.model';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.css'],
})
export class DockerComponent extends LearningComponent implements OnInit {
  public quizzenabled = false;

  public introduction: string = `
  Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines. Containers are created from images that specify their precise contents. Images are often created by combining and modifying standard images downloaded from public repositories.
  `;
  examples = [
    {
      title: 'List Docker containers',
      code: `docker ps`,
      output: `CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS   PORTS     NAMES`,
    },
    {
      title: 'Hello world',
      code: `docker run hello-world`,
      output: `Hello from Docker!
      This message shows that your installation appears to be working correctly.`,
    },
  ];

  videos = [
    {
      title: 'Docker Tutorial for Beginners',
      url: 'https://www.youtube.com/embed/fqMOX6JJhGo',
    },
  ];

  diagrams = [
    {
      title: 'Docker Architecture',
      url: 'https://docs.docker.com/engine/images/architecture.svg',
    },
    {
      title: 'Docker Containers',
      url: 'https://static.packt-cdn.com/products/9781787285965/graphics/assets/B07033_03_01.png',
    },
  ];

  public quizzes: Quiz[] = [
    {
      title: 'Docker Basics',
      questions: [
        {
          text: 'What is the command to run a Docker container?',
          answers: [
            'docker start',
            'docker run',
            'docker execute',
            'docker go',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What is the command to list all running Docker containers?',
          answers: ['docker list', 'docker ps', 'docker show', 'docker top'],
          correctAnswer: 1,
        },
        {
          text: 'What is the command to stop a running Docker container?',
          answers: ['docker halt', 'docker stop', 'docker kill', 'docker exit'],
          correctAnswer: 1,
        },
      ],
    },
    {
      title: 'Docker Networking',
      questions: [
        {
          text: 'What is the command to create a new Docker network?',
          answers: [
            'docker network new',
            'docker network create',
            'docker network add',
            'docker network init',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What is the command to connect a container to a network?',
          answers: [
            'docker network join',
            'docker network connect',
            'docker network attach',
            'docker network link',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What is the command to list all networks?',
          answers: [
            'docker network list',
            'docker network show',
            'docker network ls',
            'docker network info',
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      title: 'Docker Volumes',
      questions: [
        {
          text: 'What is the command to create a new Docker volume?',
          answers: [
            'docker volume new',
            'docker volume create',
            'docker volume add',
            'docker volume init',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What is the command to list all volumes?',
          answers: [
            'docker volume list',
            'docker volume show',
            'docker volume ls',
            'docker volume info',
          ],
          correctAnswer: 0,
        },
        {
          text: 'What is the command to remove a Docker volume?',
          answers: [
            'docker volume remove',
            'docker volume delete',
            'docker volume rm',
            'docker volume del',
          ],
          correctAnswer: 2,
        },
      ],
    },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  public checkAnswerWithSimilarity(answer: string, question: string): boolean {
    return super.checkSimilarity(answer, question) > 0.5;
  }

  public checkQuizAnswer(answer: number, question: Question): boolean {
    console.log(answer, question);
    console.log;
    return answer === question.correctAnswer;
  }
}
