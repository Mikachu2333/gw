# FileSystem 对象

 **FileSystem** 对象包括对文件和文件夹的一些基本和常见的操作接口，后续会根据实际需求持续增加。

## 说明

以下代码示例用于判断在临时目录下是否有a.txt这个文件

```javascript
let tempPath = Application.Env.GetTempPath()
if (Application.FileSystem.Exists(tempPath + 'a.txt'))
	alert("a.txt文件存在")
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AppendFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/AppendFile) | 往文件末尾添加数据 |
| [copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/copyFileSync) | 生成文件副本 |
| [Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/Exists) | 判断一个文件和文件夹是否存在。 |
| [existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/existsSync) | 判断目录是否存在 |
| [Mkdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/Mkdir) | 根据给定的path创建一个文件夹。 |
| [mkdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/mkdirSync) | 创建目录 |
| [mkdtempSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/mkdtempSync) | 创建临时目录 |
| [readAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/readAsBinaryString) | 读取指定路径的文件，返回二进制字符串数据。 |
| [readdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/readdirSync) | 获取目录下的子目录对象数组（包含目录相关属性） |
| [ReadFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/ReadFile) | 获取文件的内容 |
| [readFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/readFileString) | 读取指定路径的文件，返回字符串。 |
| [Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/Remove) | 删除指定的path所代表的文件或文件夹。 |
| [rmdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/rmdirSync) | 删除目录 |
| [tmpdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/tmpdir) | 获取系统的临时文件目录 |
| [unlinkSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/unlinkSync) | 删除文件 |
| [writeAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/writeAsBinaryString) | 写二进制字符串对象到指定文件。 |
| [WriteFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/WriteFile) | 创建文件 |
| [writeFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/writeFileString) | 写字符串到指定路径的文件。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Reserve](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/FileSystem/member/Reserve) |  |