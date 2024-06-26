import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Funcionario } from '../models/Funcionario';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.api}/api/funcionario`;

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  CriarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario>> {
    return this.http.post<Response<Funcionario>>(`${this.apiUrl}`, funcionario);
  }

  AtualizarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario>> {
    return this.http.put<Response<Funcionario>>(`${this.apiUrl}`, funcionario);
  }

  InativarFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.put<Response<Funcionario>>(`${this.apiUrl}/InativarFuncionario/${id}`, id);
  }

  DeletarFuncionario(id: number) : Observable<Response<Funcionario>> {
    return this.http.delete<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

}
