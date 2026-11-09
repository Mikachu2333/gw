# OAAssist.DownloadFile

从指定的url处下载文件，返回的字符串为保存地址。

## 语法

express.DownloadFile(Url, Success, Fail)

express   一个代表 OAAssist 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 必选 | String | 下载链接 |
| Success | 可选 | Variant | 下载成功时的回调函数 |
| Fail | 可选 | Variant | 下载失败时的回调函数 |

## 返回值

String

## 说明

第二、三个参数传入时为异步下载，不传入时为同步下载。
