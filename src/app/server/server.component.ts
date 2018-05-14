import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10; // Or you can define serverId: number = 10; however it is not necessarily because it can be inferred.
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
