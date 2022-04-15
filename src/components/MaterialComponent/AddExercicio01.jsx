import React, {Component} from "react";
import TextField from '@mui/material/TextField';
import { Container,MenuItem, Select, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, NativeSelect } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

class AddExercicio01 extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: "",
            nome: "",
            login: "",
            idade: "",
            perfil: "",
            mensalidade: "",
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

        //this.state.nomeVazio === false && this.state.sobrenomeVazio
        if(this.state.nomeVazio === false && this.state.loginVazio){
            alert('Usuario Salvo!');
        }
        if(this.state.idadeVazio === false && this.state.idadeVazio){
            alert('Usuario Salvo!');
        }
        if(this.state.perfilVazio === false && this.state.mensalidadeVazio){
            alert('Usuario Salvo!');
        }
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value });

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
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
                                <RadioGroup  aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group">

                                    <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                                    <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                                    <FormControlLabel value="outros" control={<Radio />} label="Outros" />
                                </RadioGroup>
                            </FormControl>
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
                                id="valormensalidade"
                                name="valormensalidade"
                                label="Mensalidade"
                                value={this.state.mensalidade}
                                onChange={this.onChange}
                                helperText={this.state.mensalidadeVazio ? "Preencha o campo" : null}
                                error={this.state.mensalidadeVazio}>
                            </TextField>
                         </Grid>

                         <Grid item xs={12}>
                           <FormControl fullWidth>
                             <InputLabel id="demo-simple-select-label">Curso</InputLabel>
                             <Select
                                 labelId="demo-simple-select-label"
                                 id="demo-simple-select"
                                label="Age">
                                    <MenuItem>Ciência da Computação</MenuItem>
                                    <MenuItem>Engenharia da Computação</MenuItem>
                                    <MenuItem>ADS</MenuItem>
                              </Select>
                            </FormControl>
                         </Grid>

                         <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="observacoes"
                                name="observacoes"
                                label="Abservacoes"
                                value={this.state.mensalidade}
                                onChange={this.onChange}
                                helperText={this.state.mensalidadeVazio ? "Preencha o campo" : null}
                                error={this.state.mensalidadeVazio}>
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

export default AddExercicio01