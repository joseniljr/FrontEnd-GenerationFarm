import type Categoria from './Categoria';


export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Categoria| null;
 
}