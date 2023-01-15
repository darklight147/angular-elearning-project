import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-multichoicecomponent',
  templateUrl: './multichoicecomponent.component.html',
  styleUrls: ['./multichoicecomponent.component.css'],
})
export class MultichoicecomponentComponent {
  @Input() question!: Question;
  @Output() answerSelected: EventEmitter<number> = new EventEmitter<number>();

  onAnswerSelected(answerIndex: number) {
    this.answerSelected.emit(answerIndex);
  }
}
