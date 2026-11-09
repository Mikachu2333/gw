# ColorFormat.Type

返回一个代表颜色格式类型的 **MsoColorType** 值。



## 语法

express.**Type**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

MsoColorType

## 示例


```JavaScript
/*本示例判断活动工作表中第一个形状前景填充色的颜色类型，并显示结果。*/
function test() {
    if (ActiveSheet.Shapes.Item(1).Fill.ForeColor.Type == msoColorTypeScheme) {
        alert("颜色由应用程序特定的方案定义。")
    } else {
        alert("其他类型")
    }
}
```


```JavaScript
/*本示例显示第一张工作表上第二个形状背景填充色的颜色类型是否为 msoColorTypeRGB。*/
function test() {
    let colorFormat = Worksheets.Item(1).Shapes.Item(2).Fill.BackColor
    alert(colorFormat.Type == msoColorTypeRGB)
}
```
