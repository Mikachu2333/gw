# Documents.Open

打开指定文件。

## 语法

express.**Open**

express   一个代表 **Documents** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FileName | string | 文件路径 |
| ReadOnly | boolean (可选) | 是否只读打开 |
| AddToRecentFiles | boolean (可选) | 是否添加到最近文件列表 |
| OwnerPassword | string (可选) | 所有者密码 |
| UserPassword | string (可选) | 用户密码 |
| Visible | boolean (可选) | 是否可见 |

## 返回值

`Document` — 打开的文档对象

## 示例

```JavaScript
var doc = app.Documents.Open("C:\\test.pdf");

// 只读打开
var doc2 = app.Documents.Open("C:\\test.pdf", true);

// 带密码打开
var doc3 = app.Documents.Open("C:\\encrypted.pdf", false, true, "ownerPwd", "userPwd");
```
