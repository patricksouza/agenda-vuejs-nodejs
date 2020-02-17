import http from "../http-common"

class contatoDataService{
    getAll(){
        return http.get('/api')
    }

    get(id){
        return http.get(`/procurar/${id}`);
    }

    create(data){
        return http.post('/criar',data);
    }

    update(id,data){
        return http.put(`/editar/${id}`,data);
    }

    delete(id){
        return http.delete(`/excluir/${id}`);
    }

    deleteAll(contato){
        return http.get(`/procurar?c=${contato}`);
    }

}
export default new contatoDataService();