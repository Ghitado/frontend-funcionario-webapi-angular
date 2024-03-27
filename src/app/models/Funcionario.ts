export interface Funcionario {
  id?: number,
  nome: string,
  sobrenome: string,
  departamento: string,
  turno: string,
  ativo: boolean,
  dataDeCriacao?: string,
  dataDeAlteracao?: string,
}
