# OAAssist.UploadFile

向指定链接上传文件。

## 语法

express.UploadFile(FileName, FilePath, Url, Field, Success, Fail)

express   一个代表 OAAssist 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | String | 上传文件名 |
| FilePath | 必选 | String | 文件路径 |
| Url | 必选 | String | 上传链接 |
| Field | 可选 | String | https Header中上传时的name属性 |
| Success | 可选 | Variant | 上传成功时的回调函数 |
| Fail | 必选 | Variant | 上传失败时的回调函数 |

## 返回值

Boolean
