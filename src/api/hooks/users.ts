import useSWR from 'swr'
import { fetcher } from '../fetcher'
import { API_URL } from '../url'

type User = {
  id: number
  name: string
  email: string
  phone: string
}

type UseUsersResult = {
  users: User[]
  isLoading: boolean
  isError: any
}

type UseUserResult = {
  user: User
  isLoading: boolean
  isError: any
}

export const useUsers = (): UseUsersResult => {
  const { data, error } = useSWR(API_URL.USERS, fetcher)

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useUser = (userId: number): UseUserResult => {
  const { data, error } = useSWR(API_URL.USER(userId), fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
