import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private myService: MessageService) {}

  ngOnInit() {
    this.myService.getData().subscribe((response) => {
      this.title = response;
      console.log(this.title);
    });
  }
}
