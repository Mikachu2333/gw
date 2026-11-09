# FillFormat.Pattern

返回一个代表填充图案的 **MsoPatternType** 值。只读。



## 语法

express.**Pattern**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPatternType

## 说明


使用 **Patterned** 方法可设置填充的图案类型。



## 示例


```JavaScript
/*本示例向活动工作表中添加一个矩形，并显示填充图案是否是混和图案。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    alert(fillFormat.Pattern == msoPatternMixed)
}
```


```JavaScript
/*本示例判断第一张工作表中第一个形状的填充图案。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    if (fillFormat.Pattern == msoPatternNarrowVertical) {
        alert("窄竖线图案")
    } else {
        alert("其它图案")
    }
}
```
