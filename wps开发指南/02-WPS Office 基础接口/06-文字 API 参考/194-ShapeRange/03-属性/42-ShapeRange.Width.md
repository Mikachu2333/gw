# ShapeRange.Width

返回或设置范围内形状的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中新建的ShapeRange对象的宽度设置为100磅。*/
function test() {
    let shpRange = Application.ActiveDocument.Shapes.Range([1, 2])
    shpRange.Width = 100
}
```


```JavaScript
/*本示例显示第一个文档中新建的ShapeRange对象的宽度。*/
function test() {
    let shpRange = Documents.Item(1).Shapes.Range([1, 3])
    alert(shpRange.Width)
}
```
