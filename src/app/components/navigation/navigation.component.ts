import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTachometerAlt, faArchive, faBoxOpen  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faBell = faBell;
  faUser = faUser;
  faTachometerAlt = faTachometerAlt;
  faArchive = faArchive;
  faBoxOpen = faBoxOpen;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  isdashboar: boolean = false;

}
