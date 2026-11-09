# PublishObject.Publish

将文档中的项或项的集合保存到网页中。



## 语法

express.**Publish(Create)**

express   一个代表 **PublishObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Create | 可选 | any | 在 HTML 文件存在的情况下，如果该值为 **True** ，则会替换该文件；如果该值为 **False** ，则会在文件末尾插入这些项。如果文件不存在，则不论 _Create_ 参数的值如何，都会创建文件。 |

## 返回值

void

## 说明


 **[FileName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Filename)** 属性可返回或设置 HTML 文件的位置和文件名。



## 示例


```JavaScript
/*本示例将活动工作簿中工作表“First Quarter”上的区域 D5:D9 保存到名为 Stockreport.html 的网页。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Server\\Stockreport.html", "First Quarter", "$D$5:$D$9", xlHtmlStatic, "Book2_25082")
    publishObject.Publish(true)
    publishObject.AutoRepublish = true
}
```


```JavaScript
/*本示例向第一张工作簿添加一个 PublishObject 对象，并判断如果对象的 HtmlType 属性值为 xlHtmlStatic，则将第一张工作簿中工作表“Sheet1”上的区域 B1:C10 保存到名为 Work.html 的网页。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "B1:C10", xlHtmlStatic)
    if (publishObject.HtmlType == xlHtmlStatic) {
        publishObject.Publish(false)
    }
}
```
