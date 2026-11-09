# Pages.InsertPagesFromFile

从另一个 PDF 文件中抽取指定页面插入到当前文档。

## 语法

express.**InsertPagesFromFile**

express   一个代表 **Pages** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FilePath | string | 源 PDF 文件的本地绝对路径 |
| PageRange | string (可选) | 要插入的页面范围（见下方格式说明）；省略或传空字符串 `""` 表示全部页面 |
| InsertPositionType | number (可选) | 插入位置类型（见下表），默认 `1` |
| TargetPageNum | number (可选) | 目标页码（从 1 开始），仅 `InsertPositionType=2` 时有效，默认 `0` |
| InsertBeforeTarget | boolean (可选) | 配合 `InsertPositionType=2`：`true`=插到目标页之前，`false`=插到之后，默认 `false` |

**`InsertPositionType` 值说明**：

| 值 | 说明 |
|----|------|
| 0 | 插入到文档最前（第 1 页之前） |
| 1 | 插入到文档末尾（默认） |
| 2 | 插入到 `TargetPageNum` 指定的页码附近，由 `InsertBeforeTarget` 控制前后 |

**`pageRange` 格式说明**：
- 页码**从 1 开始**，使用英文逗号 `,` 分隔多组，使用连字符 `-` 表示区间。
- 示例：`"1"` = 第 1 页；`"1-3"` = 第 1–3 页；`"1,3,5-7"` = 第 1、3、5、6、7 页。
- 省略或空字符串 = 全部页面。

## 返回值

无

## 示例

```JavaScript
var pages = app.ActiveDocument.Pages;

// 将 source.pdf 的全部页面插入到当前文档末尾
pages.InsertPagesFromFile("C:\\source.pdf", "", 1);

// 将 source.pdf 第 1–3 页插入到当前文档最前面
pages.InsertPagesFromFile("C:\\source.pdf", "1-3", 0);

// 将 source.pdf 第 1、3 页插入到当前文档第 5 页之后
pages.InsertPagesFromFile("C:\\source.pdf", "1,3", 2, 5, false);
```
