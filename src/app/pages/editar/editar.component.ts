import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  btnTitulo = "Editar Funcionário!";
  funcionario!: Funcionario;

  constructor(
    private funcionarioService : FuncionarioService,
    private router : Router,
    private route : ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
    });
  }

  editarFuncionario(funcionario : Funcionario) {
    this.funcionarioService.AtualizarFuncionario(funcionario).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
