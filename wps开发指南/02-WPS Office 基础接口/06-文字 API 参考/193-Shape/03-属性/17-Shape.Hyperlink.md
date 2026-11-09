# Shape.Hyperlink

返回一个 **Hyperlink** 对象，该对象代表与 **Shape** 对象相关联的超链接。只读。



## 语法

express.**Hyperlink**

express   一个代表 **Shape** 对象的变量。

## 类型

Hyperlink

## 说明


如果不存在与指定形状相关联的超链接，则会发生错误。在此情况下，请将 Add 方法用于 Hyperlinks 集合来为指定形状添加超链接。



## 示例


```JavaScript
/*本示例删除活动文档中第一个形状的超链接。*/
function test() {
    ActiveDocument.Shapes.Item(1).Hyperlink.Delete()
}
```


```JavaScript
/*本示例显示活动文档中第二个形状的超链接地址。*/
function test() {
    alert(ActiveDocument.Shapes.Item(2).Hyperlink.Address)
}
```
