# ThreeDFormat.ProjectText

返回或设置指定 **ThreeDFormat** 对象投影文本状态。可读/写 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型。



## 语法

express.**ProjectText**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| MsoTriState 可以是下列 **MsoTriState** 常量之一。 |
| --------------------------------------- |
| **msoCTrue**                            |
| **msoFalse**                            |
| **msoTriStateMixed**                    |
| **msoTriStateToggle**                   |
| **msoTrue**                             |



## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状ThreeDFormat对象投影文本状态设置成msoFalse。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.ProjectText = msoFalse
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状ThreeDFormat对象投影文本状态是否为msoTrue。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.ProjectText == msoTrue)
}
```
