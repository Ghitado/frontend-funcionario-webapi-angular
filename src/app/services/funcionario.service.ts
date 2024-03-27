import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Funcionario } from '../models/Funcionario';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.api}/api/funcionario`;

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetByIdFuncionario(id: number) : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(`${this.apiUrl}/${id}`);
  }

  CriarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario>> {
    return this.http.post<Response<Funcionario>>(this.apiUrl, funcionario);
  }

  AtualizarFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.put<Response<Funcionario>>(`${this.apiUrl}/${id}`, id);
  }

  InativarFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.put<Response<Funcionario>>(`${this.apiUrl}/InativarFuncionario/${id}`, id);
  }

  DeletarFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.delete<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

}
