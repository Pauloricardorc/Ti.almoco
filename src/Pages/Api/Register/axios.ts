import axios from 'axios'

export const Register = axios.create({
  baseURL: 'https://ti-lanche.onrender.com/almoco'
})