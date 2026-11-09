# FFIClosure.ToPointer

获取闭包的原生函数指针，返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 语法

```typescript
ToPointer(): FFIPointer
```

express   一个代表 **FFIClosure** 对象的变量。

## 返回值

闭包的原生函数指针。

## 说明

返回 libffi 动态生成的跳板函数地址。将此指针传递给需要回调的原生函数后，原生代码调用此地址时会触发 FFIClosure 上的 `OnCall` 事件。闭包指针的有效期与 FFIClosure 对象的生命期绑定——FFIClosure 被回收后指针失效。
