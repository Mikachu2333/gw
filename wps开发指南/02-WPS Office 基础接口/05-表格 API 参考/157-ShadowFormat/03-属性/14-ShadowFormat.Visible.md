# ShadowFormat.Visible

返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例为第一张工作表中的第三个形状设置阴影可见并设置阴影的格式类型和水平偏移量。阴影相对形状向右偏移 6 磅。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(3).Shadow
    shadow.Visible = true
    shadow.Type = msoShadow18
    shadow.OffsetX = 6
}
```


```JavaScript
/*本示例显示活动工作表中第一个形状阴影是否可见。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    alert(shadow.Visible == msoTrue)
}
```
