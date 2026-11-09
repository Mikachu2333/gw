# ShadowFormat.Style

返回或设置指定底纹的样式。可读/写 **MsoShadowStyle** 类型。



## 语法

express.**Style**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowStyle

## 说明


| MsoShadowStyle 可以是下列 **MsoShadowStyle** 常量之一。 |
| --------------------------------------------- |
| **msoShadowStyleInnerShadow**                 |
| **msoShadowStyleMixed**                       |
| **msoShadowStyleOuterShadow**                 |



## 示例


```JavaScript
/*本示例显示第一张工作表中第二个形状阴影的样式是否为msoShadowStyleMixed。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    alert(shadow.Style == msoShadowStyleMixed)
}
```


```JavaScript
/*本示例设置活动工作表中第一个形状阴影的样式。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(1).Shadow
    shadow.Style = msoShadowStyleInnerShadow
}
```
