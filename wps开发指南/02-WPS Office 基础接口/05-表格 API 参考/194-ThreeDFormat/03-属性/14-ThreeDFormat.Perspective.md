# ThreeDFormat.Perspective

返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 值，该值确定是否在透视中显示延伸。



## 语法

express.**Perspective**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果延伸是平行投影或正交投影，则返回 **msoFalse** ，也就是说，墙壁不会向消失点变窄。

如果延伸显示在透视中，则返回 **msoTrue** ，即延伸的墙壁向消失点变窄。



## 示例


```JavaScript
/*此示例设置第一张工作表的第一个形状在透视中显示延伸。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.Perspective = msoTrue
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状是否在透视中显示延伸。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.Perspective == msoTrue)
}
```
