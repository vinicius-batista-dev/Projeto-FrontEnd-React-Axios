// eslint-disable-next-line
import React, {Component} from "react";
import TextField from '@mui/material/TextField';
import { Container, Link, MenuItem, FormGroup, Checkbox, Select, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, NativeSelect } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "../css/exercicio02.css"


class AddExercicio02 extends Component {


    constructor(props){
        super(props);
        this.state = {
            id: "",
            nome: "",
            login: "",
            idade: "",
            perfil: "",
            mensalidade: "",
            email: "",
            sobrenome: "",
            password: "",
            passwordVazio: false,
            sobrenomeVazio: false,
            emailVazio: false,
            mensalidadeVazio: false,
            perfilVazio: false,
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
        this.setState({perfilVazio:(this.state.perfil === "")});
        this.setState({mesalidadeVazio:(this.state.mensalidade === "")});
        this.setState({emailVazio:(this.state.email === "")});
        this.setState({sobrenomeVazio:(this.state.sobrenome === "")});
        this.setState({passwordVazio:(this.state.passwordVazio === "")});

        if(this.state.nomeVazio === false && this.state.sobrenomeVazio ){ 
            //=== false === this.state.idadeVazio === false === this.state.perfilVazio === this.state.mensalidadeVazio === this.state.emailVazio === this.state.sobrenomeVazio === this.state.passwordVazio){
            alert('Usuario Salvo!');
        }

        if(this.state.emailVazio === false && this.state.passwordVazio){
            alert('Usuario Salvo!');
        }
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });

    render(){
        return(
            <Container maxWidth="sm">
                <div>
                    <LockOpenIcon className="cadeado" />
                    <h2 className="text-right">Sign Up</h2>
                    <form>
      
                     <Grid container spacing={2}>
                         <Grid item xs={5}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="nome"
                                name="nome"
                                label="First Name"
                                value={this.state.nome}
                                onChange={this.onChange}
                                helperText={this.state.nomeVazio ? "Preencha o campo" : null}
                                error={this.state.nomeVazio}>
                            </TextField>
                         </Grid>

        

                         <Grid item xs={5}>
                            <TextField
                                   required
                                   autoFocus
                                   fullWidth
                                   id="sobrenome"
                                   name="sobrenome"
                                   label="Last Name"
                                   value={this.state.sobrenome}
                                   onChange={this.onChange}
                                   helperText={this.state.sobrenomeVazio ? "Preencha o campo" : null}
                                   error={this.state.sobrenomeVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={10}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                helperText={this.state.emailVazio ? "Preencha o campo" : null}
                                error={this.state.emailVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={10}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                helperText={this.state.passwordVazio ? "Preencha o campo" : null}
                                error={this.state.passwordVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={11}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email" />
                            </FormGroup>
                         </Grid>

                         <Grid item xs={10}>
                            <Link marginLeft='210px' href="#" underline="none">
                                 {'Already have an account ? Sign In'}
                            </Link>
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

export default AddExercicio02