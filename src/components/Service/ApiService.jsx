import axios from "axios"; 

const USER_API_BASE_URL = 'http://localhost:8080';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class ApiService{
  /*** Busca os usuarios* @returns{Promise<AxiosResponse<any>>}*/
  listarUsuarios(){
    return axios.get(USER_API_BASE_URL + '/listar-usuarios')
  }

  /*** Consulta um usuariopor Id* @param usuarioId* @returns{Promise<AxiosResponse<any>>}*/

  consultarUsuarioById(usuarioId){
    return axios.get(USER_API_BASE_URL + '/consultar-usuario/' + usuarioId);
  }

  /*** Salva um usuario* @param usuario* @returns{Promise<AxiosResponse<any>>}*/

  salvarUsuario(usuario){
    return axios.post(USER_API_BASE_URL + '/salvar-usuario/', usuario);
  }

  /*** Exclui um usuariopor Id* @param usuarioId* @returns{Promise<AxiosResponse<any>>}*/

  excluirUsuarioById(usuarioId){
    return axios.delete(USER_API_BASE_URL + '/excluir-usuario/' + usuarioId);
  }

}


export default new ApiService();
