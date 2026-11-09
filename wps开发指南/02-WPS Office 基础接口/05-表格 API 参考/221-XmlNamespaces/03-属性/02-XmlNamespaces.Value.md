# XmlNamespaces.Value

返回一个 **String** 值，该值代表已添加到工作簿的 XML 命名空间。



## 语法

express.**Value**

express   一个代表 **XmlNamespaces** 对象的变量。

## 类型

string

## 说明


如果工作簿包含多个命名空间，则由 **Value** 属性返回的字符串中的空格分隔命名空间。



## 示例


```JavaScript
/*本示例显示第一张工作簿上XML命名空间的值。*/
function test() {
    let xmlNamespaces = Workbooks.Item(1).XmlNamespaces
    alert(xmlNamespaces.Value)
}
```


```JavaScript
/*本示例将活动工作簿上XML命名空间的值赋值给A5单元格。*/
function test() {
    let xmlNamespaces = Application.ActiveWorkbook.XmlNamespaces
    Range("A5").Value2 = xmlNamespaces.Value
}
```
