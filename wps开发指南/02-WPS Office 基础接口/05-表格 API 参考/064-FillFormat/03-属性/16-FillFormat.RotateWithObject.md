# FillFormat.RotateWithObject

返回或设置是否随对象旋转。可读/写 **MsoTriState** 类型。



## 语法

express.**RotateWithObject**

express   一个代表 **FillFormat** 对象的变量。

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
/*本示例设置第一张工作表中第二个形状填充不与形状一起旋转。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(2).Fill
    fillFormat.RotateWithObject = msoFalse
}
```


```JavaScript
/*本示例显示活动工作表中第一个形状填充是否与形状一起旋转。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    alert(fillFormat.RotateWithObject == msoTrue)
}
```
