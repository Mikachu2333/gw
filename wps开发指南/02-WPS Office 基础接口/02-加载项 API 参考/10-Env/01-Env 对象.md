# Env 对象

 **Env** 对象主要用于取系统环境基本信息，这个对象目前提供了取用户目录、临时目录等相关信息，后续可能会根据实际需求不断扩充。

## 说明

以下代码示例，取到系统临时目录并打印到控制台。

```javascript
let tempPath = Application.Env.GetTempPath()
console.log(tempPath)  //如果是jde环境，则是Debug.Print(tempPath)
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [GetAppDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetAppDataPath) | 取系统%AppData%/Roming目录的路径，仅Windows平台适用。 |
| [GetDesktopDpi](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetDesktopDpi) | 取系统DPI。 |
| [GetHomePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetHomePath) | 取系统HOME目录的路径，代表当前用户主目录。 |
| [GetProgramDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetProgramDataPath) | 取系统ProgramData目录的路径，仅windows平台适用。 |
| [GetProgramFilesPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetProgramFilesPath) | 取系统ProgramFiles目录的路径，仅Windows平台适用。 |
| [GetRootPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetRootPath) | 取系统根目录的路径。 |
| [GetTempPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Env/member/GetTempPath) | 取系统临时目录的路径。 |