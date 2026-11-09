# PublishObject.AutoRepublish

在保存工作簿时，ET 判断 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合中的任意一个项目是否具有设置为 **True** 的 **AutoRepublish** 属性。如果有，则重新发布该项目。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoRepublish**

express   一个代表 **PublishObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将工作表上的一个区域发布到E：\上的一个 HTML 文件中。当用户保存包含该工作表的工作簿时，ET 将自动地将区域重新发布到相同的 HTML 文件中。本示例假定用户能够对网页进行读写访问，并且该工作表中的单元格 A1 到 D10 中都有值。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "A1:D10", xlHtmlStatic, "Book1.xls_130489")
    publishObject.Publish(true)
    publishObject.AutoRepublish = true
}
```


```JavaScript
/*本示例向第一张工作簿添加一个 PublishObject 对象，并显示对象的 AutoRepublish 属性值。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "B1:C10", xlHtmlStatic)
    alert(publishObject.AutoRepublish)
}
```
