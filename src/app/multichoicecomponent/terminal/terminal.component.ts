import { Component, Input } from '@angular/core';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent {
  @Input() prompt: string = '$';
  public currentCommand!: string;
  public commands: string[] = [];

  runCommand() {
    this.commands.push(this.currentCommand);
    this.currentCommand = '';
  }
}
