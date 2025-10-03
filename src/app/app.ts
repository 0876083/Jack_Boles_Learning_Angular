import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Record} from "./Shared/models/record";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'})

export class App {
  title = 'Record Store';

  records: Record[] = [
    {title: 'Abbey Road', artist: 'The Beatles', genre: 'Rock', price: 29.99, releaseYear: 1969},
    {title: 'Nevermind', artist: 'Nirvana', genre: 'Grunge', price: 34.99, releaseYear: 1991},
    {title: 'Back In Black', artist: 'AC/DC', genre: 'Rock', price: 27.99, releaseYear: 1980},
    {title: 'Dookie', artist: 'Green Day', genre: 'Punk', price: 29.99},
    {title: 'The Dark Side of the Moon', artist: 'Pink Floyd', genre: 'Progressive Rock', price: 30.00, releaseYear: 1973},
    {title: 'Rumours', artist: 'Fleetwood Mac', genre: 'Rock', price: 25.99}];
}
