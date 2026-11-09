# LibraryFunctionDecl 对象

库函数声明，描述一个动态库中导出函数的签名。

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [returnType](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/LibraryFunctionDecl/member/returnType) | 返回类型。省略时默认 `"void"`。 **TypeDecl** 类型，可读写。 |
| [parameters](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/LibraryFunctionDecl/member/parameters) | 参数类型列表。省略时默认无参数。 **TypeDecl[]** 类型，可读写。 |
| [symbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/LibraryFunctionDecl/member/symbol) | 动态库中的导出符号名。省略时默认与函数名相同。 **string** 类型，可读写。 |
| [abi](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/LibraryFunctionDecl/member/abi) | 调用约定。省略时使用平台默认。Windows 上常用 `"stdcall"`。 **string** 类型，可读写。 |
