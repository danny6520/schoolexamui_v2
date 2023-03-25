const USERS_REST_API_URL = "http://localhost:5678/fetchschoolinfo";

class SchoolinfofetchServiceAPI{
    getSchoolinfo() {
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new SchoolinfofetchServiceAPI();