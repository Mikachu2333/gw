# FFIClosure 对象

原生回调闭包对象，通过 [FFI.CreateCallback](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/CreateCallback) 获取。当原生代码调用闭包的函数指针时触发 `OnCall` 事件。

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ToPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIClosure/member/ToPointer) | 获取闭包的原生函数指针，返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。 |
