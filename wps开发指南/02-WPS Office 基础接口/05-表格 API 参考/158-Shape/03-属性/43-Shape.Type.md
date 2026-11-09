# Shape.Type

返回一个代表形状类型的 **[MsoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoShapeType)** 值。只读。



## 语法

express.**Type**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoShapeType

## 示例


```JavaScript
/*本示例判断第一张工作表中第一个形状的类型是否为图片。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    alert(shapes.Item(1).Type == msoPicture)
}
```


```JavaScript
/*本示例判断活动工作表中第二个形状是否为图表并显示结果。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(2).Type == msoChart) {
        alert("This is a Chart")
    } else {
        alert("This is not a Chart")
    }
}
```
