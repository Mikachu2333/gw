# Workbook.PublishObjects

返回 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合。只读。



## 语法

express.**PublishObjects**

express   一个代表 **Workbook** 对象的变量。

## 类型

PublishObjects

## 示例


```JavaScript
/*本示例将活动工作簿中工作表Sheet1上的区域 A1:A10 保存到名为 example.html 的网页，并将活动工作簿中的所有静态PublishObject对象发布到网页上。*/
function test() {
    let publishObjects = ActiveWorkbook.PublishObjects
    publishObjects.Add(xlSourceRange, "D:\\示例1\\example.html", "Sheet1", "$A$1:$A$10", xlHtmlStatic, "example_test")
    for (let i = 1; i <= publishObjects.Count; i++) {
        if (publishObjects.Item(i).HtmlType == xlHtmlStatic) {
            publishObjects.Item(i).Publish(true)
        }
    }
}
```


```JavaScript
/*本示例显示活动工作簿中已保存到网页的第一项的位置。*/
function test() {
    alert(ActiveWorkbook.PublishObjects.Item(1).Filename)
}
```
