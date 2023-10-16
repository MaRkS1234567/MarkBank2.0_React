import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

const USERS = 'users/'

class UserService {
	async getProfile() {
		return $axios.get(`${USERS}/profile`)
	}
}

export default new UserService()
