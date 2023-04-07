# 常用工具函数

## debounce

```javascript
const debounce = (fn, delay = 1000) => {
  let timer = null;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);

  };
};
```

## throttle

```javascript
const throttle = (fn, delay = 1000) => {
  let pre = 0;

  return () => {
    const now = Date.now();
    if (now - pre > delay) {
      pre = now;
      fn();
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

## deepClone

```javascript
const deepClone = (target) => {
  if (!isObj) return target;

  const result = Array.isArray(target) ? [] : {};

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (isObj(target[key])) {
        result[key] = deepClone(target[key]);
      } else {
        result[key] = target[key];
      }
    }
  }

  return result;
};
```

## get

```javascript
const get = (
  obj: any,
  path: string[] | string,
  defaultValue: any = undefined
) => {
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }

  return (
    newPath.reduce((reslut, current) => {
      return (reslut || {})[current];
    }, obj) || defaultValue
  );
};
```
