# Platform 对象

平台信息对象，提供操作系统、CPU 架构和指针大小等编译期确定的平台信息。

## 说明

所有属性的值在 WPS 编译时确定，运行时不会改变。可用于编写跨平台的宏脚本，在不同平台上采用不同的逻辑分支。

## 示例

```javascript
/* 平台判断 */
if (Platform.OS() === "Windows") {
  Console.log("Windows 平台, 架构: " + Platform.Arch())
} else {
  Console.log("非 Windows 平台: " + Platform.OS())
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [OS](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Platform/member/OS) | 返回当前操作系统的名称。 |
| [Arch](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Platform/member/Arch) | 返回当前 CPU 架构。 |
| [PointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Platform/member/PointerSize) | 返回当前平台的指针大小（字节数）。 |
