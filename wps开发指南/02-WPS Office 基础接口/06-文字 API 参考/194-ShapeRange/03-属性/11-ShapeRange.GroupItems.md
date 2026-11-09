# ShapeRange.GroupItems

返回一个 **GroupShapes** 对象，该对象代表指定组合形状中的单个形状。只读。



## 语法

express.**GroupItems**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

GroupShapes

## 说明


此属性适用于表示已组合的形状的 **ShapeRange** 对象。 使用 **GroupShapes** 对象的 **Item** 方法可返回组中的单个形状。



## 示例


```JavaScript
/*本示例显示活动文档上指定组合形状中形状的数量。*/
function test() {
    alert(ActiveDocument.Shapes.Range(1).GroupItems.Count)
}
```


```JavaScript
/*本示例将选中的组合形状中第一个形状的宽度设置为 150 磅。*/
function test() {
    Selection.ShapeRange.GroupItems.Item(1).Width = 150
}
```
