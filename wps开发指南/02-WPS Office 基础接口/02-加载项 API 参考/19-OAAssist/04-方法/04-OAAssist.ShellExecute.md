# OAAssist.ShellExecute

使用壳服务打开网页或调起进程。

## 语法

express.ShellExecute(Url, Params)

express   一个代表 OAAssist 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 可选 | String | 网页或进程的地址 |
| Params | 可选 | String | 启动参数 |

## 说明

当不传入参数时，该函数立即返回。对于带有“http”或“https”字样的地址，会打开对应的网页。以下是启动wps进程的参数:

| 传入参数             | 启动进程   |
| ---------------- | ------ |
| ksowebstartupwps | WPS文字  |
| ksowebstartupwpp | WPS演示  |
| ksowebstartupet  | WPS表格  |
| ksowpscloudsvr   | WPS云服务 |

同样也可直接传入地址调起其余进程。

注意：当前进程的终止并不会导致被调起进程的终止。
