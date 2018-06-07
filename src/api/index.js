import axios from "axios";
//tem uma lib pra chamadas a api, só que tem que instalar
const listaClientes = () => {
  // é tipo o $.ajax
  //aqui vc chamaria o server e com o resultado vc retorna a lista
  //tinah q tacar na pasta public o json pra funcionar
  return axios.get("/clientes.json");
};

export { listaClientes };
