# PublishObject.Filename

返回或设置保存指定源对象位置的 URL（Intranet 或网站上）或路径（本地或网络）。 **String** 型，可读写。



## 语法

express.**Filename**

express   一个代表 **PublishObject** 对象的变量。

## 类型

string

## 说明


如果指定路径中的文件夹不存在，则 **FileName** 属性将产生一个错误。



## 示例


```JavaScript
/*本示例向活动工作簿添加一个 PublishObject 对象，并设置保存活动工作簿中第一项的位置。*/
function test() {
    let publishObject = ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "B1:C10", xlHtmlStatic)
    publishObject.Filename = "E:\\Server\\Stockreport.html"
}
```


```JavaScript
/*本示例向第一张工作簿添加一个 PublishObject 对象，并显示对象的 Filename 属性值。*/
function test() {
    let publishObject = Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "B1:C10", xlHtmlStatic)
    alert(publishObject.Filename)
}
```
