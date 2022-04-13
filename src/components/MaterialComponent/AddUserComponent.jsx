import React, {Component} from "react";

class AddUserComponent extends Component{
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
        this.setState({login: this.getQueryParams('login')});
        this.setState({idade: this.getQueryParams('idade')});
        this.setState({perfil: this.getQueryParams('perfil')});
    }

    getQueryParams(variable)
    {
        var query = window.location.search.substring(1);
        console.log(query);
        var vars = query.split("&");
        console.log(vars);

        for(var i = 0; i < vars.length; i++)
        {
            var pair = vars[i].split("=");
            console.log(pair);

            if(pair[0] === variable){
                return pair[1];
            }
        }

        return(false);
    }

    saveUser = (e) => {
        alert('Usuario Salvo!');
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render(){
        return (
            <div>
                <div>
                    <h2 className="text-center">Adicionar Usuario</h2>
                    <form>
                        <div>
                            <label>Nome: </label>
                            <input type='text' name='nome' value={this.state.nome} onChange={this.onChange}></input>
                        </div>

                        <div>
                            <label>Login: </label>
                            <input name="login" value={this.state.login} onChange={this.onChange}></input>
                        </div>

                        <div>
                            <label>Idade: </label>
                            <input type="number" name="idade" value={this.state.idade} onChange={this.onChange}></input>
                        </div>

                        <div>
                            <label>Perfil: </label>
                            <input name="perfil" value={this.state.perfil} onChange={this.onChange}></input>
                        </div>

                        <br></br>

                        <button onClick={this.saveUser}>Salvar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddUserComponent