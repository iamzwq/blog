# axios 的 ts 封装

```typescript
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  RawAxiosRequestConfig,
} from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import useSessionStore from '@/stores/session'

interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

const sessionStore = useSessionStore()

class Request {
  private instance: AxiosInstance

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.url !== '/login') {
          const token = sessionStore.token
          if (token) config.headers!['x-token'] = token
        }

        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      <T>(response: AxiosResponse) => {
        const SUCCESS_CODE = 1001

        if (response.status !== 200) return Promise.reject(response)

        const { code, data, message } = response.data as ApiResponse<T>

        if (code !== SUCCESS_CODE) {
          if (code === 401) {
            sessionStore.$reset()
            router.push({
              name: 'Login',
              query: {
                redirect: router.currentRoute.value.path,
              },
            })
          }

          ElMessage.error(message)

          return Promise.reject(data)
        }

        return data
      },
      (err) => {
        ElMessage.error(err.message)
        return Promise.reject(err)
      }
    )
  }

  request<T = any>(config: RawAxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  get<T = any>(url: string, config?: RawAxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  post<T = any>(url: string, data?: any, config?: RawAxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

const http = new Request({
  timeout: 20000,
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export default http
```