# ShadowFormat.OffsetY

以磅为单位返回或设置指定形状阴影的垂直偏移。正偏移值将阴影向下偏移，负偏移值将阴影向上偏移。可读写。 **Single** 类型。



## 语法

express.**OffsetY**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


使用 **IncrementOffsetX** 方法或 **IncrementOffsetY** 方法可将阴影从当前位置水平或垂直轻微移动而无需指定其绝对位置。



## 示例


```JavaScript
/*本示例为第一张工作表中的形状 3 设置阴影的格式类型、水平偏移量和垂直偏移量。阴影相对形状向右偏移 5 磅，向上偏移 3 磅。如果形状没有阴影，本示例为其添加一个阴影。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(3).Shadow
    shadow.Visible = true
    shadow.Type = msoShadow17
    shadow.OffsetX = 5
    shadow.OffsetY = -3
}
```


```JavaScript
/*本示例显示活动工作表中第一个形状阴影的垂直偏移量。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    alert(shadow.OffsetY)
}
```
