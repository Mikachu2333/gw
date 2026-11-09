# ThreeDFormat.Visible

返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*此示例将第一张工作表的第一个形状的 3D 效果设置为可见。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(1)
    shape.ThreeD.Visible =  msoTrue
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状的 3D 效果是否可见。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.Visible == msoTrue)
}
```
