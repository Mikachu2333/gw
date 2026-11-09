# FFIFunction.ToPointer

获取原生函数的地址，返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 语法

```typescript
ToPointer(): FFIPointer
```

express   一个代表 **FFIFunction** 对象的变量。

## 返回值

包含函数地址的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 说明

返回创建此 FFIFunction 时使用的原生函数指针地址。可用于将函数地址作为参数传递给另一个原生函数（如注册回调指针）。
