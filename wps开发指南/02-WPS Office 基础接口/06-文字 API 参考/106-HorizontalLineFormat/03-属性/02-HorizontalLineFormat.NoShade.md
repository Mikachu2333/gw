# HorizontalLineFormat.NoShade

如果 WPS 绘制无三维阴影的指定横线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**NoShade**

express   一个代表 **HorizontalLineFormat** 对象的变量。

## 类型

boolean

## 说明


只有在不基于原有图像文件的情况下，才可配合横线使用该属性。



## 示例


```JavaScript
/*本示例添加一条没有任何 3D 着色的水平线。*/
function test() {
    let inlineShape = Selection.InlineShapes.AddHorizontalLineStandard()
    inlineShape.HorizontalLineFormat.NoShade = true
}
```


```JavaScript
/*本示例显示第一个文档上第二条水平线是否没有三维阴影。*/
function test() {
    let hzLineFormat = Documents.Item(1).InlineShapes.Item(2).HorizontalLineFormat
    alert(hzLineFormat.NoShade)
}
```
