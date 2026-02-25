/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
  baseURL: 'https://farmacia-js12.onrender.com/'
})

export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async (url: string, dados: object,setDdaos: Function) => {
  const resposta = await api.post(url, dados)
  setDdaos(resposta.data)
}
