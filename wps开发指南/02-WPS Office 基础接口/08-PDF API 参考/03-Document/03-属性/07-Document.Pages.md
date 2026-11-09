# Document.Pages

返回当前文档的 [Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/obj) 集合，用于访问、统计与编辑 PDF 中的全部页面。 **Pages** 类型，只读。

## 语法

express.**Pages**

express   一个代表 **Document** 对象的变量。

## 类型

Pages

## 说明

**Pages** 集合为只读属性：不能将 `Pages` 赋给另一个变量来替换整个集合，但可以通过集合上的方法与属性修改文档中的页面（例如插入空白页、从其他 PDF 合并页面、按范围删除页面）。

常用操作包括：使用 **Count** 获取总页数；使用 **Item**(*index*) 按从 **1** 开始的页码取得单个 [Page](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/obj) 对象（进而访问该页的 **Annots**、尺寸与文本等）；使用 **InsertBlankPage**、**InsertPagesFromFile**、**DeletePagesByRange** 等改变页面结构与顺序。页码、范围字符串（如 `"1-3"`、`"1,3,5-7"`）的规则与 **Pages** 对象各方法说明一致。

## 示例

```JavaScript
var pages = app.ActiveDocument.Pages;
var count = pages.Count;
var firstPage = pages.Item(1);
```
