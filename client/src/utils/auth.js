import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken, history) {
    // let history = useHistory();
    localStorage.setItem("id_token", idToken);
    // window.location.assign("/dashboard");
    history("/dashboard");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
