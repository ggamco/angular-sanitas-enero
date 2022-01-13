import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo-view',
  templateUrl: './saludo-view.component.html',
  styleUrls: ['./saludo-view.component.css']
})
export class SaludoViewComponent implements OnInit {

  // mensajeBotonSaludo = "Saludar a mis amigos"
  esVisible: boolean = false;
  mensaje = ""

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMensaje() {
    this.esVisible = !this.esVisible;
  }

}
