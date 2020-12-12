import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externalappst',
  templateUrl: './externalappst.component.html',
  styleUrls: ['./externalappst.component.scss']
})
export class ExternalappstComponent implements OnInit {
  
  //prueba info
  lista:string[]=["hola","que","tal","estas","hola","que","tal","estas","que","tal","estas","hola","que","tal","estas","que","tal","estas","hola","que","tal","estas"];

  constructor() { }

  ngOnInit(): void {
  }

}
