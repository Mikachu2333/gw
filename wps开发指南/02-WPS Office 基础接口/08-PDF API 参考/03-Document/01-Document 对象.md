# Document 对象

`Document` 对象代表一个已打开的 PDF 文档。

## 说明

`Document` 对象代表 WPS PDF 中一个已打开的 PDF 文档实例，提供文档级别的读取、保存、打印、页面管理、注释、附件、水印、页眉页脚、大纲、导出等操作能力。通过 `app.ActiveDocument` 或 `app.Documents` 集合访问。

接口成员见下列「方法」「属性」列表及各成员页。

## 示例


```JavaScript
var doc = app.ActiveDocument;
var name = doc.Name;
console.log("文档名称: " + name); // 输出: "test.pdf"
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [PageText](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PageText) | 获取指定页面的文本内容。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Save) | 保存当前文档到其已有路径。若文档从未保存过，行为与「另存为」类似。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/SaveAs) | 将文档另存为指定路径。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Close) | 关闭文档。 |
| [SetDirtyed](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/SetDirtyed) | 手动设置文档的修改状态。 |
| [Print](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Print) | 打印文档。 |
| [PrintPages](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PrintPages) | 标准打印接口，支持完整的打印参数设置。 |
| [PrintPagesEx](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PrintPagesEx) | 高级打印接口，支持指定打印机名称。参数与 PrintPages 相同，额外增加 printerName 参数。 |
| [PrintMultipage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PrintMultipage) | 多页打印。 |
| [PrintBooklet](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PrintBooklet) | 小册子打印。 |
| [EnterEdit](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/EnterEdit) | 进入或退出编辑模式。 |
| [PdfToImage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PdfToImage) | 将 PDF 文档导出为图片。 |
| [SetCustomProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/SetCustomProperty) | 设置文档的自定义属性。 |
| [GetCustomProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/GetCustomProperty) | 获取文档的自定义属性值。 |
| [PageRecognize](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PageRecognize) | 对指定页面执行识别操作。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Name) | 获取文档名称（文件名）。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/FullName) | 获取文档完整路径。 |
| [PageCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/PageCount) | 获取文档的页面总数。 |
| [Dirtyed](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Dirtyed) | 获取文档是否已被修改。 |
| [ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/ActiveWindow) | 获取文档关联的活动窗口对象。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Windows) | 获取文档关联的窗口集合。 |
| [Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Pages) | 返回当前文档的页面集合，用于访问、统计与编辑 PDF 中的全部页面。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Selection) | 获取文档的选区对象。 |
| [DocProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/DocProperty) | 获取文档属性对象。 |
| [Attachments](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Attachments) | 获取文档的附件集合。 |
| [Watermark](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Watermark) | 获取水印管理对象。 |
| [UndoRedo](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/UndoRedo) | 获取撤销重做管理对象。 |
| [OutlineManager](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/OutlineManager) | 获取大纲管理器对象。 |
| [HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/HeaderFooter) | 获取页眉页脚管理对象。 |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Background) | 获取背景管理对象。 |
| [Exports](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Exports) | 获取导出功能对象。 |
| [DocumentText](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/DocumentText) | 获取文档的全部文本内容。 |
| [DocumentTextCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/DocumentTextCount) | 获取文档的总字符数。 |
