# XmlNamespace.Prefix

返回一个 **String** 类型的数值，该数值表示指定的 XML 命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）的前缀。只读。



## 语法

express.**Prefix**

express   一个代表 **XmlNamespace** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XML命名空间的前缀。*/
function test() {
    const xmlns = ActiveWorkbook.XmlNamespaces.Item(1)
    alert(`第一项XML命名空间的前缀为：${xmlns.Prefix}`)
}
```


```JavaScript
/*本示例将活动工作簿上第一项XmlMap的根元素命名空间的前缀赋值到A5单元格。*/
function test() {
    let xmlns = ActiveWorkbook.XmlMaps.Item(1).RootElementNamespace
    Range("A5").Value2 = xmlns.Prefix
}
```
