import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit {
  @Input() prompt: string = '$';
  @Input() type: 'input' | 'output' = 'input';
  public currentCommand!: string;
  public commands: string[] = [];

  runCommand() {
    this.commands.push(this.currentCommand);
    this.currentCommand = '';
  }

  copyCommand() {
    const lastCommand = this.prompt;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = lastCommand.replace('$ ', '');
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  ngOnInit(): void {
    this.prompt =
      this.type === 'input' ? `$ ${this.prompt}` : `> ${this.prompt}`;
  }
}
