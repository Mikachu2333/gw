# PublishObjects.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PublishObjects** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在活动工作簿上添加一个 PublishObject 对象，并显示当前活动工作簿 PublishObject 对象的数量。*/
function test() {
    ActiveWorkbook.PublishObjects.Add(xlSourceRange, "E:\\Work.html", "Sheet1", "A1:D10", xlHtmlStatic, "Book1.xls_130489")
    alert(ActiveWorkbook.PublishObjects.Count)
}
```
