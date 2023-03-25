const USERS_REST_API_URL = "http://localhost:5678/getclassinfo";

class ClassinfofetchService {
    getClassinfo() {
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new ClassinfofetchService();