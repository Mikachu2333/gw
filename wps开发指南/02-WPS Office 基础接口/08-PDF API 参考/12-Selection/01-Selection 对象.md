# Selection 对象

`Selection` 对象代表文档中的选区。

## 说明


通过 `doc.Selection` 访问。

* `Text`：读取选中文本（支持方法形式传参控制长度与换行）
* `Range`：只读 **PdfRanges**，供注释创建等场景使用
* `Clear()`：清除当前选区

## 示例


```JavaScript
var sel = app.ActiveDocument.Selection;
var text = sel.Text;         // 默认参数
var text2 = sel.Text(true, 100); // 最多 100 字符
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Selection/member/Clear) | 清除选区。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Selection/member/Text) | 获取选中的文本内容。支持属性访问和方法调用。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Selection/member/Range) | 获取选区范围集合（**PdfRanges**），集合中每个 **PdfRange** 描述一段选区的页码、矩形与字符索引。创建高亮等文本类注释时，常将此属性传给 `Annots.CreateHighlightAnnot` 等方法。 |
