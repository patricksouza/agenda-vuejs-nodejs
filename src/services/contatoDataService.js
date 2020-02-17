import http from "../http-common"

class contatoDataService{
    getAll(){
        return http.get('/api/contatos');
    }

    get(id){
        return http.get(`/contato/${id}`);
    }

    create(data){
        return http.post('/api/criar',data);
    }

    update(id,data){
        return http.put(`/contato/${id}`,data);
    }

    delete(id){
        return http.delete(`/contato/${id}`);
    }

    deleteAll(contato){
        return http.get(`/contato?c=${contato}`);
    }

}
export default new contatoDataService();