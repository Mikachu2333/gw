# PublishObject.HtmlType

返回或设置在将指定项保存到网页中时，由 ET 所生成的 HTML 的类型。可以为下表中列出的 **[XlHtmlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlHtmlType)** 常量之一，用于指定该项在网页中是静态还是可交互的。默认值为 **xlHtmlStatic** 。



## 语法

express.**HtmlType**

express   一个代表 **PublishObject** 对象的变量。

## 类型

XlHtmlType

## 说明


| **XlHtmlType** 可为以下 **XlHtmlType** 常量之一。 |
| --------------------------------------- |
| **xlHtmlCalc** 使用电子表格组件。                |
| **xlHtmlChart** 使用图表组件。                 |
| **xlHtmlList** 使用数据透视表组件。               |
| **xlHtmlStatic** 静态（非交互式）HTML 仅用于查看。    |



## 示例


```JavaScript
/*本示例将活动工作簿中工作表“First Quarter”上的区域 D5:D9 保存到名为 Stockreport.html 的网页，并判断如果项目保存到网页时 ET 生成的 HTML 类型为xlHtmlStatic，则通知用户。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Server\\Stockreport.html", "First Quarter", "$D$5:$D$9", xlHtmlStatic, "Book1_4170")
    if (publishObject.HtmlType == xlHtmlStatic) {
        alert("项目保存到网页时 ET 生成的 HTML 类型为xlHtmlStatic")
    }
    publishObject.Publish(true)
    publishObject.AutoRepublish = false
}
```


```JavaScript
/*本示例向第一张工作簿添加一个 PublishObject 对象，并显示对象的 HtmlType 属性值是否为 xlHtmlStatic。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Server\\Stockreport.html", "First Quarter", "$D$5:$D$9", xlHtmlStatic)
    alert(publishObject.HtmlType == xlHtmlStatic)
}
```
