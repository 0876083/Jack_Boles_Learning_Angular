import {Component, OnInit} from '@angular/core';
import {Record} from '../Shared/models/record';
import {NgForOf} from "@angular/common";
import {RecordListItemComponent} from '../record-list-item/record-list-item.component';
import {RecordStoreService} from "../services/record-store.service";

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [NgForOf, RecordListItemComponent],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.scss'
})
export class RecordListComponent implements OnInit {
recordList: Record[] = [];
constructor(private recordService: RecordStoreService) {}

  ngOnInit(): void {
  this.recordService.getRecords().subscribe({
    next: (data: Record[]) => this.recordList = data,
    error:err => console.error("Error fetching Records", err),
    complete:() => console.log("Record data fetch complete!"),
  })
  }
}
