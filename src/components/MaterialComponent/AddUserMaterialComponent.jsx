// eslint-disable-next-line
import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ApiService from "../Service/ApiService";

class AddUserMaterialComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        id: '',
        nome: '',
        login: '',
        idade: '',
        perfil: '',
        idadeVazio: false,
        nomeVazio: false,
        loginVazio: false
    }
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    this.setState({nomeVazio:(this.state.nome === "")});
    this.setState({loginVazio:(this.state.login === "")});
    this.setState({idadeVazio:(this.state.idade === "")});

    if(this.state.nomeVazio === false && this.state.loginVazio === false){
      e.preventDefault();
     let usuario = {id: this.state.id, nome: this.state.nome, login: this.state.login, idade: this.state.idade, perfil: this.state.perfil};
   
     ApiService.salvarUsuario(usuario)
          .then(res => { 
                  alert('Usuario salvo com sucesso!')
                })
          .catch(err => { 
                  alert('Nao foi possivel salvar o usuario!')
             });
        }
  }

  

  onChange = (e) => this.setState({[e.target.name]: e.target.value });

  render() {
    return (
      <Container maxWidth="sm">
        <div>
          <h2 className="text-center">Adicionar Usuario</h2>
          <form onSubmit={this.saveUser}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  id="nome"
                  name="nome"
                  label="Nome"
                  type="text"
                  value={this.state.nome}
                  onChange={this.onChange}
                  helperText={this.state.nomeVazio ? "Preencha o campo" : null}
                  error={this.state.nomeVazio}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="text"
                  id="login"
                  name="login"
                  label="Login"
                  value={this.state.login}
                  onChange={this.onChange}
                  helperText={this.state.idadeVazio ? "Preencha o campo" : null}
                  error={this.state.idadeVazio}
                ></TextField>
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="number"
                  id="idade"
                  name="idade"
                  label="Idade"
                  value={this.state.idade}
                  onChange={this.onChange}
                  helperText={this.state.idadeVazio ? "Preencha o campo" : null}
                  error={this.state.idadeVazio}
                ></TextField>
              </Grid>

             

              <Grid item xs={12}>
                <TextField
                  type="text"
                  required
                  autoFocus
                  fullWidth
                  id="perfil"
                  name="perfil"
                  label="Perfil"
                  value={this.state.perfil}
                  onChange={this.onChange}
                  helperText={
                    this.state.perfilVazio ? "Preencha o campo" : null
                  }
                  error={this.state.perfilVazio}
                ></TextField>
              </Grid>
            </Grid>

            <br></br>

            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={(e) => {this.saveUser(e)}}
            >
              Salvar
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddUserMaterialComponent;
