import React, { Component } from "react";

import { listaClientes } from "../api/index";
import Contador from "../components/Contador";
import DebugJs from "../components/DebugJs";
import { FormField, CheckboxField } from "../components/FormField";
import Button from "../components/Button";
import { withMessage } from "../components/Mensagem";
import ListaClientes from "../components/ListaClientes";

class Clientes extends Component {
  state = {
    clientes: [],
    cliente: {
      nome: "",
      sobrenome: "",
      canDelete: ""
    }
  };

  componentDidMount() {
    listaClientes().then(result => {
      this.setState({
        clientes: result.data
      });
    });
  }

  onAdd = valor => {
    this.setState(prevState => ({
      total: prevState.total + valor
    }));
  };

  onChangeField = ({ target }) => {
    this.setState(prevState => ({
      cliente: {
        ...prevState.cliente,
        [target.id]: target.value
      }
    }));
  };

  onChangeCheckbox = ({ target }) => {
    this.setState(prevState => ({
      cliente: {
        ...prevState.cliente,
        [target.id]: target.checked
      }
    }));
  };

  onSave = () => {
    const { messageContext } = this.props;

    let novoCliente = { ...this.state.cliente };

    this.setState(
      prevState => {
        return {
          clientes: [...prevState.clientes, novoCliente],
          cliente: {
            nome: "",
            sobrenome: "",
            canDelete: ""
          }
        };
      },
      () => {
        messageContext.onMessage(
          `Cliente ${novoCliente.nome} adicionado com sucesso!`
        );
      }
    );
  };

  onDelete = cliente => {
    this.setState(prevState => ({
      clientes: prevState.clientes.filter(c => c.nome !== cliente.nome)
    }));
  };

  render() {
    const { total, coiso, clientes, cliente } = this.state;

    return (
      <div className="App">
        <h1>Clientes</h1>

        <FormField
          label="Nome do cabra:"
          id="nome"
          value={cliente.nome}
          onChange={this.onChangeField}
        />

        <FormField
          label="Sobrenome:"
          id="sobrenome"
          value={cliente.sobrenome}
          onChange={this.onChangeField}
        />

        <CheckboxField
          label="Pode apagar?:"
          id="canDelete"
          value={cliente.canDelete}
          onChange={this.onChangeCheckbox}
        />

        <br />
        <Button corTexto="white" cor="green" onClick={this.onSave}>
          Salvar
        </Button>

        <ListaClientes clientes={clientes} onDelete={this.onDelete} />

        <DebugJs valor={this.state} />
      </div>
    );
  }
}

export default withMessage(Clientes);
