# ShapeRange.Hyperlink

返回一个 **Hyperlink** 对象，该对象代表与指定 **ShapeRange** 对象相关联的超链接。只读。



## 语法

express.**Hyperlink**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

Hyperlink

## 说明


如果不存在与指定形状区域相关联的超链接，则会发生错误。 在此情况下，请将 **Add** 方法用于 **Hyperlinks** 集合来为指定形状区域添加超链接。



## 示例


```JavaScript
/*本示例为活动文档上选中形状添加超链接，并显示该形状的超链接名称。*/
function test() {
    ActiveDocument.Hyperlinks.Add(Selection.ShapeRange, "https://www.wps.cn")
    alert(Selection.ShapeRange.Hyperlink.Name)
}
```


```JavaScript
/*本示例删除第一个文档中第二个形状的超链接。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Range(2)
    shapeRange.Hyperlink.Delete()
}
```
