import { HomeComponent } from './../../pages/home/home.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit{

  inputdata:any
  funcionario!: Funcionario;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private ref:MatDialogRef<ExcluirComponent>) {}

  ngOnInit(): void {
    this.inputdata = this.data;

    this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe(data => {
      this.funcionario = data.dados;
    });
  }

  excluir(){
    this.funcionarioService.DeletarFuncionario(this.inputdata.id).subscribe(data => {
      this.ref.close();
      window.location.reload();
    });
  }

  cancelar() {
    this.ref.close();
  }

}
