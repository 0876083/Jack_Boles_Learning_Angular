import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Record} from "./Shared/models/record";
import {NgFor, NgIf} from "@angular/common";
import { RecordListComponent } from "./record-list/record-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, RecordListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'})

export class AppComponent {
  title = 'Record Store';
}
