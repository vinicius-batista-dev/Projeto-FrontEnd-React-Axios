// eslint-disable-next-line
import axios from 'axios';
import React, {Component} from 'react';
import ApiService from '../Service/ApiService';


class ListUserComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                users:[]
            }
            this.reloadUserList = this.reloadUserList.bind(this);
        }

        componentDidMount(){
            this.reloadUserList();
        }
    
        reloadUserList(){
            ApiService.listarUsuarios()
                .then((res) => {
                    this.setState({users: res.data})
                }) .catch(err => {
                    console.log('Nao foi possivel obter a lista de usuario!')
                });
        }
    
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value});
        }
   
    render(){
        return(
            <div>
                <h2>Lista de Usuarios</h2>
                <table border='1'>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Idade</th>
                            <th>Perfil</th>
                            <th>Ações</th>
                        </tr>
                                {
                                    this.state.users.map(
                                        user => 
                                            <tr key={user.id}>
                                                <td>{user.idade}</td>
                                                <td>{user.nome}</td>
                                                <td>{user.login}</td>
                                                <td>{user.idade}</td>
                                                <td>{user.perfil}</td>
                                                <td>
                                                    <button>+</button>
                                                </td>
                                            </tr>
                                    )
                                }
                    </tbody>
                </table>
                <br></br>
                <button onClick={() => this.reloadUserList()}>Recarregar</button>
            </div>
        )
    }
}


export default ListUserComponent
