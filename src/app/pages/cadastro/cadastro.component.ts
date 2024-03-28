import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar!";
  btnTitulo = "Cadastrar Funcionário!";

  constructor(
    private funcionarioService : FuncionarioService,
    private router: Router) {}

  ngOnInit(): void {}

  criarFuncionario(funcionario: Funcionario){
    this.funcionarioService.CriarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

}
