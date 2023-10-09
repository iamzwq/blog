# 常用工具函数

## debounce

```ts
const debounce = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let timer: NodeJS.Timeout | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
```

## throttle

```ts
const throttle = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let prev = 0;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const now = Date.now();

    if (now - prev > delay) {
      fn.apply(this, args);
      prev = now;
    }
  };
};

const throttleV2 = (fn, delay = 1000) => {
  let timer = null;

  return () => {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};
```

## deepClone

```ts
const deepClone = <T = any>(value: T) => {
  if (typeof value !== "object" || value === null) return value;

  const clone = <T>(Array.isArray(value) ? [] : {});
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key]);
    }
  }
  return clone;
};
```

## get

```ts
const get = (target: object, path: string | any[], defaultValue?: any) => {
  let newPath: any[] = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  return (
    newPath.reduce((pre, cur) => {
      return pre && pre[cur];
    }, target) ?? defaultValue
  );
};
```

## isObj

```javascript
const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`;
}

export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, "Function");
}

export const isObject = (val: any): val is Record<any, any> => {
	return val !== null && is(val, "Object");
};

export function isNumber(val: unknown): val is number {
	return is(val, "Number");
}

export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, "AsyncFunction");
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return is(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isString(val: unknown): val is string {
	return is(val, "String");
}

export function isBoolean(val: unknown): val is boolean {
	return is(val, "Boolean");
}

export function isArray(val: any): val is Array<any> {
	return val && Array.isArray(val);
}

export const isClient = () => {
	return typeof window !== "undefined";
};

export const isWindow = (val: any): val is Window => {
	return typeof window !== "undefined" && is(val, "Window");
};

export const isElement = (val: unknown): val is Element => {
	return isObject(val) && !!val.tagName;
};

// 是否为图片节点
export function isImageDom(o: Element) {
	return o && ["IMAGE", "IMG"].includes(o.tagName);
}

export function isNull(val: unknown): val is null {
	return val === null;
}
```
