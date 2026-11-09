# ShapeRange.Type

返回形状类型。只读 **MsoShapeType** 类型。



## 语法

express.**Type**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeType

## 示例


```JavaScript
/*本示例先在活动文档中创建ShapeRange对象，然后判断对象类型是否为图表并显示。*/
function test() {
    let shpRange = Application.ActiveDocument.Shapes.Range([3, 4])
    if (shpRange.Type == msoChart) {
        alert("这是图表")
    } else {
        alert("这不是图表")
    }
}
```


```JavaScript
/*本示例先在第一个文档中创建ShapeRange对象，然后显示对象类型是否为图片。*/
function test() {
    let shpRange = Documents.Item(1).Shapes.Range([2])
    alert(shpRange.Type == msoPicture)
}
```
