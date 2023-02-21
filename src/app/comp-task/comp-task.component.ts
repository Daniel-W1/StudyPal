import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-task',
  templateUrl: './comp-task.component.html',
  styleUrls: ['./comp-task.component.css']
})
export class CompTaskComponent {
  @Input() task: any;
}
