# InlineShape.Hyperlink

返回一个 **Hyperlink** 对象，该对象代表与指定内嵌形状相关联的超链接。只读。



## 语法

express.**Hyperlink**

express   一个代表 **InlineShape** 对象的变量。

## 类型

Hyperlink

## 说明


如果不存在与指定形状相关联的超链接，则会发生错误。在此情况下，请将 **Add** 方法用于 **Hyperlinks** 集合来为指定形状添加超链接。



## 示例


```JavaScript
/*本示例为所选的第一个内嵌图形添加超链接，并显示该图形关联的超链接的名称。*/
function test() {
    ActiveDocument.Hyperlinks.Add(Selection.InlineShapes.Item(1), "http://www.wps.cn")
    alert(Selection.InlineShapes.Item(1).Hyperlink.Name)
}
```


```JavaScript
/*本示例显示活动文档中第二个内嵌形状关联的超链接地址。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(2).Hyperlink.Address)
}
```
