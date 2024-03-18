import useSWRInfinite from 'swr/infinite'
import { fetcher } from '../fetcher'
import { API_URL } from '../url'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

type UsePostsResult = {
  posts: Post[]
  isLoading: boolean
  isError: Error | null
  isReachingEnd: boolean
  size: number
  fetchMore: () => void
}

export const usePosts = (): UsePostsResult => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null
    return `${API_URL.POSTS}?_page=${pageIndex + 1}&_limit=10`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)

  const posts: Post[] = data ? data.flat() : []

  const isLoadingInitialData = !data && !error
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isReachingEnd = size === posts.length

  return {
    posts,
    isLoading: isLoadingInitialData || isLoadingMore || false,
    isError: error,
    isReachingEnd,
    size,
    fetchMore: () => setSize(size + 1),
  }
}
