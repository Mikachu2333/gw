# Shape.VerticalFlip

 如果指定的形状绕垂直坐标轴翻转，则此属性为 **True** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。



## 语法

express.**VerticalFlip**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将第一张工作表中所有进行过水平翻转或垂直翻转的形状还原至初始状态。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HorizontalFlip) {
            shapes.Item(i).Flip(msoFlipHorizontal)
        }
        if (shapes.Item(i).VerticalFlip) {
            shapes.Item(i).Flip(msoFlipVertical)
        }
    }
}
```


```JavaScript
/*本示例判断活动工作表中第一个形状是否围绕垂直轴进行翻转，并显示结果。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(1).VerticalFlip) {
        alert("已围绕垂直轴进行翻转")
    } else {
        alert("未围绕垂直轴进行翻转")
    }
}
```
