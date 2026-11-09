# PublishObjects.Add

创建一个对象，该对象代表保存在网页上的文档中的项目。当对 ET 中的文档进行了一些自动修订时，这些对象可帮助随后对网页进行的更新。返回 **PublishObject** 对象。



## 语法

express.**Add(SourceType, Filename, Sheet, Source, HtmlType, DivID, Title)**

express   一个代表 **PublishObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SourceType | 必选 | XlSourceType | 源的类型。 |
| Title | 可选 | any | 用于保存源对象的 URL（在 Intranet 或网站上）或路径（本地或网络）。 |
| Sheet | 可选 | any | 保存为网页的工作表名称。 |
| Source | 可选 | any | 用来标识数据项的唯一名称，这些数据项的 _SourceType_ 参数为下列常量之一： **xlSourceAutoFilter** 、 **xlSourceChart** 、 **xlSourcePivotTable** 、 **xlSourcePrintArea** 、 **xlSourceQuery** 或 **xlSourceRange** 。如果 _SourceType_ 为 **xlSourceRange** ，则 **Source** 指定的是一个区域，该区域可以是一个已定义的名称。如果 _SourceType_ 为 **xlSourceChart** 、 **xlSourcePivotTable** 或 **xlSourceQuery** ，则 _Source_ 指定的是图表、数据透视表或查询表的名称。 |
| HtmlType | 可选 | any | 指定项目是保存为交互式的 WPS Office Web 组件还是保存为静态文本和图像。可以为以下 **[XlHTMLType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlHtmlType)** 常量之一： **xlHtmlCalc** 、 **xlHtmlChart** 、 **xlHtmlList** 或 **xlHtmlStatic** 。 |
| DivID | 可选 | any | 在 HTML DIV 标记中使用的唯一标识符，它用于标识网页上的项。 |
| Title | 可选 | any | 网页的标题。 |

## 返回值

一个代表新项目的 **[PublishObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/obj)** 对象。

## 示例


```JavaScript
/*本示例将活动工作簿中第一季度工作表上的区域 D5：D9 保存到名为 Stockreport.html 的网页。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Server\\Stockreport.html", "First Quarter", "$D$5:$D$9", xlHtmlStatic, "Book1_4170")
    publishObject.Publish(true)
    publishObject.AutoRepublish = false
}
```


```JavaScript
/*本示例在活动工作簿上添加一个 PublishObject 对象，并显示当前活动工作簿 PublishObject 对象的数量。*/
function test() {
    ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "A1:D10", xlHtmlStatic, "Book1.xls_130489")
    alert(ActiveWorkbook.PublishObjects.Count)
}
```
