# FileSystem 对象

文件系统操作对象，提供文件和目录的读写、创建、删除等功能。

## 说明

提供两套风格的文件系统 API：一套是 WPS 原生的大写命名方法（如 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists)、[FileSystem.Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Remove)、[FileSystem.Mkdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Mkdir)），
另一套是与 Node.js `fs` 模块同名的小写方法（如 [FileSystem.existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/existsSync)、[FileSystem.unlinkSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/unlinkSync)、[FileSystem.mkdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/mkdirSync)）。
所有方法都要求脚本来源为本地文件，网络加载的脚本无法调用。

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) | 检查指定路径的文件或目录是否存在。 |
| [Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Remove) | 删除指定路径的文件。 |
| [Mkdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Mkdir) | 创建单层目录。 |
| [WriteFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/WriteFile) | 将数据写入文件，覆盖已有内容。 |
| [AppendFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/AppendFile) | 将数据追加到文件末尾。 |
| [ReadFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFile) | 读取文件的全部内容并以字符串返回。 |
| [ReadFileAsArrayBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFileAsArrayBuffer) | 以二进制方式读取文件的全部内容，返回 ArrayBuffer。 |
| [readFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readFileString) | 以 UTF-16LE 原始编码读取文件内容并返回字符串。 |
| [writeFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/writeFileString) | 以 UTF-16LE 原始编码将字符串写入文件，覆盖已有内容。 |
| [readAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readAsBinaryString) | 以二进制字符串形式读取文件内容。 |
| [writeAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/writeAsBinaryString) | 将二进制字符串还原为原始字节并写入文件。 |
| [copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) | 同步复制文件。 |
| [unlinkSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/unlinkSync) | 删除指定路径的文件。 |
| [existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/existsSync) | 检查指定路径是否存在。 |
| [mkdtempSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/mkdtempSync) | 创建一个具有唯一名称的临时目录。 |
| [mkdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/mkdirSync) | 创建单层目录。 |
| [rmdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/rmdirSync) | 删除指定路径的空目录。 |
| [readdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readdirSync) | 读取目录内容，返回文件名数组。 |
| [tmpdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/tmpdir) | 获取操作系统的临时目录路径。 |
| [stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) | 获取指定路径的文件或目录的状态信息。 |
| [absoluteFilePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/absoluteFilePath) | 将路径解析为包含文件名的绝对路径。 |
| [absolutePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/absolutePath) | 将路径解析为不含文件名的绝对目录路径。 |
| [isWritable](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/isWritable) | 检查指定路径的文件或目录是否可写。 |
| [toNativeSeparators](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/toNativeSeparators) | 将路径中的分隔符转换为操作系统原生格式。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [constants](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/constants) | 文件系统常量对象，提供 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 等方法使用的标志常量。 **FSConstants** 类型，只读。 |
