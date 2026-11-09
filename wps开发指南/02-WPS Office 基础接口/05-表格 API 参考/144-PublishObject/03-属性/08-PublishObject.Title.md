# PublishObject.Title

返回或设置在将文档另存为网页时的网页标题。 **String** 型，可读写。



## 语法

express.**Title**

express   一个代表 **PublishObject** 对象的变量。

## 类型

string

## 说明


在 Web 浏览器中查看文档时，标题通常显示在窗口的标题栏中。



## 示例


```JavaScript
/*本示例将第一张工作簿中工作表“Sheet1”上的区域 B1:C10 保存到名为 Work1.html 的网页，并将网页标题设置为“Sales Forecast”。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Work1.html", "Sheet1", "B1:C10", xlHtmlStatic)
    publishObject.Title = "Sales Forecast"
    publishObject.Publish(true)
}
```


```JavaScript
/*本示例将活动工作簿中工作表“Sheet1”上的区域 A1:D10 保存到名为 Work.html 的网页，并显示网页的标题。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "A1:D10", xlHtmlStatic, "Book1.xls_130489", "Test")
    publishObject.Publish(true)
    alert(publishObject.Title)
}
```
