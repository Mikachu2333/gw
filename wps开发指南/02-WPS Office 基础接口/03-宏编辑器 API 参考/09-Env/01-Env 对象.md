# Env 对象

环境信息对象，提供系统路径、DPI、进程 ID 等运行时环境信息。

## 说明

所有路径类方法返回的路径统一使用正斜杠 `/` 作为分隔符（即使在 Windows 上也是如此）。部分方法（如 [Env.GetAppDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetAppDataPath)、[Env.GetProgramFilesPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetProgramFilesPath)、[Env.GetProgramDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetProgramDataPath)）依赖 Windows 特定的环境变量，在 Linux/macOS 上可能返回空字符串。

## 示例

```javascript
/* 构建跨平台的临时文件路径 */
var tmpDir = Env.GetTempPath()
var pid = Env.GetPID()
var tmpFile = tmpDir + "/wps_macro_" + pid + ".tmp"
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [GetTempPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetTempPath) | 获取系统临时目录路径。 |
| [GetRootPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetRootPath) | 获取文件系统根目录路径。 |
| [GetHomePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetHomePath) | 获取当前用户的主目录路径。 |
| [GetAppDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetAppDataPath) | 获取用户应用程序数据目录路径（Windows 专用）。 |
| [GetProgramFilesPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetProgramFilesPath) | 获取 Program Files 目录路径（Windows 专用）。 |
| [GetProgramDataPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetProgramDataPath) | 获取 ProgramData 目录路径（Windows 专用）。 |
| [GetDesktopDpi](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetDesktopDpi) | 获取桌面的逻辑 DPI（每英寸点数）。 |
| [GetPID](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetPID) | 获取当前 WPS 进程的进程 ID。 |
| [GetDesktopPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetDesktopPath) | 获取当前用户的桌面目录路径。 |
| [GetDownloadPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Env/member/GetDownloadPath) | 获取当前用户的下载目录路径。 |
