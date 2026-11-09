# TextFrame2.WarpFormat

返回或设置指定文本框的弯曲类型。可读/写 **MsoWarpFormat** 。



## 语法

express.**WarpFormat**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoWarpFormat

## 示例


```JavaScript
/*本示例显示活动工作表中第二个形状的文本框的弯曲类型是否为msoWarpFormat11。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.WarpFormat == msoWarpFormat11)
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的文本框的弯曲类型设置为msoWarpFormat10。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.WarpFormat = msoWarpFormat10
}
```
