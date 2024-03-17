const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const API_URL = {
  USERS: `${BASE_URL}/users`,
  USER: (id: number) => `${BASE_URL}/users/${id}`,
  POSTS: `${BASE_URL}/posts`,
}
