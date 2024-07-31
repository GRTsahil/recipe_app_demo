import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent{
  // type definition: Is it similar to defining model?
  // @Input is added to make property bindable from outside
  @Input() element: {type: string, name: string, content: string};
  

}
