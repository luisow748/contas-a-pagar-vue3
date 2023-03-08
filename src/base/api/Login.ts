import apiBaseLogin from "@/base/api/ApiLogin";


class LoginApiService {
    authenticate(userDetails: any): Promise<any> {
        return apiBaseLogin.post("/auth/authenticate", userDetails)
    }
}
export default new LoginApiService();