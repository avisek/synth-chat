import axios from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}api`,
  withCredentials: true,
})

export async function loginUser(email: string, password: string) {
  const res = await api.post('/user/login', { email, password })
  if (res.status !== 200) {
    throw new Error('Unable to login')
  }
  const data = await res.data
  return data
}

export async function signupUser(
  name: string,
  email: string,
  password: string,
) {
  const res = await api.post('/user/signup', { name, email, password })
  if (res.status !== 201) {
    throw new Error('Unable to Signup')
  }
  const data = await res.data
  return data
}

export async function checkAuthStatus() {
  const res = await api.get('/user/auth-status')
  if (res.status !== 200) {
    throw new Error('Unable to authenticate')
  }
  const data = await res.data
  return data
}

export async function sendChatRequest(message: string) {
  const res = await api.post('/chat/new', { message })
  if (res.status !== 200) {
    throw new Error('Unable to send chat')
  }
  const data = await res.data
  return data
}

export async function getUserChats() {
  const res = await api.get('/chat/all-chats')
  if (res.status !== 200) {
    throw new Error('Unable to send chat')
  }
  const data = await res.data
  return data
}

export async function deleteUserChats() {
  const res = await api.delete('/chat/delete')
  if (res.status !== 200) {
    throw new Error('Unable to delete chats')
  }
  const data = await res.data
  return data
}

export async function logoutUser() {
  const res = await api.get('/user/logout')
  if (res.status !== 200) {
    throw new Error('Unable to delete chats')
  }
  const data = await res.data
  return data
}
