# Shape.SoftEdge

返回一个 **SoftEdgeFormat** 对象，该对象代表形状的软边缘格式。只读。



## 语法

express.**SoftEdge**

express   一个代表 **Shape** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例显示活动文档中第一个形状的软边缘效果的辐射长度。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).SoftEdge.Radius)
}
```


```JavaScript
/*本示例设置第一个文档中第一个形状软边缘的类型。*/
function test() {
    Documents.Item(1).Shapes.Item(1).SoftEdge.Type = msoSoftEdgeType3
}
```
