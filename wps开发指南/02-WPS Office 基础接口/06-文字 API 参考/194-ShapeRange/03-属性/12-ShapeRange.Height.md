# ShapeRange.Height

返回或设置指定的形状范围的高度。 **Single** 类型，可读写。



## 语法

express.**Height**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有形状的高度设置为 55.5 磅。*/
function test() {
    ActiveDocument.Shapes.SelectAll()
    Selection.ShapeRange.Height = 55.5
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状的高度。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Range(1)
    alert(shapeRange.Height)
}
```
