# ShapeRange.Type

返回一个代表形状类型的 **MsoShapeType** 值。



## 语法

express.**Type**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeType

## 示例


```JavaScript
/*本示例先在第一张工作表中创建shpRange对象，然后判断对象类型是否为图表并显示。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([4, 3])
    if (shpRange.Type == msoChart) {
        alert("这是图表")
    } else {
        alert("这不是图表")
    }
}
```


```JavaScript
/*本示例先在活动工作表中创建shpRange对象，然后显示对象类型是否为图片。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([1])
    alert(shpRange.Type == msoPicture)
}
```
