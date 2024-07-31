import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  // creating properties and register them as events and set what to emit or expose outside
  // so these are event emitter objects
  // @Output is added to make it listenable from outside
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  
  onAddServer() {
    console.log("AddServer called: ", this.newServerName, this.newServerContent);
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
  }

}
