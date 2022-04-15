import React, {Component} from "react";
import TextField from '@mui/material/TextField';
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

class AddUserComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            nome: "",
            login: "",
            idade: "",
            perfil: ""
        }
        this.saveUser = this.saveUser.bind(this);
    }

    componentDidMount(){
        this.setState({id: this.getQueryParams('id')});
        this.setState({nome: this.getQueryParams('nome')});
        this.setState({idade: this.getQueryParams('idade')});
        this.setState({perfil: this.getQueryParams('perfil')});
    }

    getQueryParams(variable){
        var query = window.location.search.substring(1);
        console.log(query);
        var vars = query.split("&");
        console.log(vars);
        for(var i = 0; i < vars.length; i++){
            var pair = vars[i].split("=");
            console.log(pair)
            if(pair[0] === variable){return pair[1];}
        }
        return(false);
    }

    //salva o usuariono backend
    saveUser = (e) => {
        alert('Usuario Salvo');
    }

    //modifica o valor do state do campo alterado
    onChange = (e) =>this.setState({ [e.target.name]: e.target.value});

    render(){
        return(
            <Container maxWidth="sm">
                <div>
                    <h2 className="text-center">Adicionar Usuario</h2>
                    <form>
                     <Grid container spacing={2}>
                         <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="nome"
                                name="nome"
                                label="Nome"
                                value={this.state.nome}
                                onChange={this.onChange}
                                helperText={this.state.nomeVazio ? "Preencha o campo" : null}
                                error={this.state.nomeVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="login"
                                name="login"
                                label="Login"
                                value={this.state.login}
                                onChange={this.onChange}
                                helperText={this.state.loginVazio ? "Preencha o campo" : null}
                                error={this.state.loginVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                type="date"
                                id="idade"
                                name="idade"
                                value={this.state.idade}
                                onChange={this.onChange}
                                helperText={this.state.idadeVazio ? "Preencha o campo" : null}
                                error={this.state.idadeVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="perfil"
                                name="perfil"
                                label="Perfil"
                                value={this.state.perfil}
                                onChange={this.onChange}
                                helperText={this.state.perfilVazio ? "Preencha o campo" : null}
                                error={this.state.perfilVazio}>
                            </TextField>
                         </Grid>

                     </Grid>
                      
                      
                    <br></br>

                        <Button variant="contained" color="primary" disableElevation onClick={(e) => {this.saveUser(e)}}>Salvar</Button>
                    </form>
                </div>
            </Container>
        )
    }
    
}

export default AddUserComponent