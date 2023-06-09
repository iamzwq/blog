# axios 的 ts 封装

基于`axios@1.3.4`的 ts 封装


```ts
import axios from "axios"
import type {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  RawAxiosRequestConfig,
} from "axios"
import useSessionStore from "@/stores/session"

type ApiResponse<T> = {
  code: number
  message: string
  result: T
}

interface ExpandCreateAxiosDefaults<D = any> extends CreateAxiosDefaults<D> {
  interceptorHooks?: InterceptorHooks
}

export interface InterceptorHooks {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: <T>(
    response: AxiosResponse
  ) => AxiosResponse<ApiResponse<T>> | Promise<AxiosResponse<ApiResponse<T>>>
  responseInterceptorCatch?: (error: any) => any
}

class Request {
  private instance: AxiosInstance

  private interceptorHooks?: InterceptorHooks

  constructor(config?: ExpandCreateAxiosDefaults) {
    this.instance = axios.create(config)

    // 把拦截器放在外面，为了比较容易拓展不同接口的自定义拦截器
    this.interceptorHooks = config?.interceptorHooks

    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )
  }

  request<T>(config: RawAxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.request(config)
  }

  get<T>(
    url: string,
    config?: RawAxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.get(url, config)
  }

  post<T>(
    url: string,
    data?: any,
    config?: RawAxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.instance.post(url, data, config)
  }
}

const interceptorHooks: InterceptorHooks = {
  requestInterceptor: config => {
    if (config.url !== "/login") {
      const token = useSessionStore.getState().userInfo?.token
      if (token) config.headers!["x-token"] = token
    }

    return config
  },
  requestInterceptorCatch: err => Promise.reject(err),
  responseInterceptor: response => {
    const SUCCESS_CODE = 1000

    if (response.data.code !== SUCCESS_CODE) {
      return Promise.reject(response)
    }

    // 不直接返回业务接口的数据(response.data)，是因为有些时候可能需要获取 响应头信息
    return response
  },
  responseInterceptorCatch: err => {
    // alert(err.message)
    if (err.response?.status === 401) {
      useSessionStore.getState().reset()
      window.location.href = `/login?redirect=${window.location.pathname}`
    }

    return Promise.reject(err)
  },
}

export const http = new Request({
  timeout: 20000,
  baseURL: import.meta.env.VITE_API_BASE_URL,
  interceptorHooks,
})
```
