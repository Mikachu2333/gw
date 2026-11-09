# ShadowFormat.RotateWithShape

返回或设置一个 **MsoTriState** 类型的值，该值表示是否在旋转形状时旋转阴影。可读/写。



## 语法

express.**RotateWithShape**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例显示第一张工作表中第二个形状是否在旋转形状时旋转阴影。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    alert(shadow.RotateWithShape == msoTrue)
}
```


```JavaScript
/*本示例设置活动工作表中第三个形状在旋转形状时旋转阴影。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(3).Shadow
    shadow.RotateWithShape = msoTrue
}
```
