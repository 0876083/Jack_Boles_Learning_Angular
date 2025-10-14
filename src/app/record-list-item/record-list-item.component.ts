import { Component, Input} from '@angular/core';
import {Record} from "../Shared/models/record";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-record-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './record-list-item.component.html',
  styleUrl: './record-list-item.component.scss'
})
export class RecordListItemComponent {
  @Input() content?: Record;
}
