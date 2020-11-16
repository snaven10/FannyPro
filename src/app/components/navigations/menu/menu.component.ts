import { Component } from '@angular/core';
import { faTachometerAlt, faArchive, faBoxOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faTachometerAlt = faTachometerAlt;
  faArchive = faArchive;
  faBoxOpen = faBoxOpen;
}
