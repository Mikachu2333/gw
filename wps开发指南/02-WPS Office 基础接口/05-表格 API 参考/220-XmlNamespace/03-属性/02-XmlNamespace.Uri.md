# XmlNamespace.Uri

返回一个 **String** 类型的数值，该数值表示指定 XML 命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）的统一资源标识符 (URI) （统一资源标识符 (URI)：通过类型和位置标识 Internet 上资源的字符串。）。只读。



## 语法

express.**Uri**

express   一个代表 **XmlNamespace** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示第一张工作簿中第二项XML命名空间的Uri。*/
function test() {
    const xmlns = Workbooks.Item(1).XmlNamespaces.Item(2)
    alert(`第二项XML命名空间的Uri为：${xmlns.Uri}`)
}
```


```JavaScript
/*本示例将活动工作簿上第一项XmlMap的根元素命名空间的前缀和Uri分别赋值到A5和A6单元格。*/
function test() {
    let xmlns = ActiveWorkbook.XmlMaps.Item(1).RootElementNamespace
    Range("A5").Value2 = xmlns.Prefix
    Range("A6").Value2 = xmlns.Uri
}
```
