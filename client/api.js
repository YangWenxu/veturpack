import axios from 'axios'

const baseURL = 'http://localhost:7001/api/v1/admin'

export function getCount () {
  return axios.get(baseURL + '_count', {
    auth: {
      username: 'dd',
      password: '888888'
    }
  })
}
