# Pages.InsertBlankPage

插入空白页。

## 语法

express.**InsertBlankPage**

express   一个代表 **Pages** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| InsertCount | number | 插入页数 |
| InsertPositionType | number | 插入位置：`0`=文档开头，`1`=文档末尾（默认），`2`=指定页码位置（需配合 TargetPageNum） |
| TargetPageNum | number | 目标页码（从 1 开始，仅 InsertPositionType=2 时有效） |
| InsertBeforeTarget | boolean (可选) | 配合 InsertPositionType=2：`true`=插到目标页之前，`false`=插到目标页之后（默认 false） |
| PageWidth | number (可选) | 页面宽度，单位 **pt**，默认 595（A4 宽） |
| PageHeight | number (可选) | 页面高度，单位 **pt**，默认 842（A4 高） |
| PageOrientation | number (可选) | 页面方向：`0`=纵向（默认），`1`=横向（会交换宽高） |

## 返回值

无

## 示例

```JavaScript
var pages = app.ActiveDocument.Pages;
// 在文档末尾插入 1 页 A4 空白页
pages.InsertBlankPage(1, 1);
// 在第 2 页之后插入 1 页
pages.InsertBlankPage(1, 2, 2, false);
```
