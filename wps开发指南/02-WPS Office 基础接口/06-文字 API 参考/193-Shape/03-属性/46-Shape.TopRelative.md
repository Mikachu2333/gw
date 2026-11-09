# Shape.TopRelative

返回或设置一个 **Single** 类型的值，该值代表形状顶部的相对位置。可读写。



## 语法

express.**TopRelative**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **RelativeHorizontalPosition** 属性一起使用。当设置为 **wdShapePositionRelativeNone** (-999999)（参见 **WdShapePositionRelative** 枚举）时，应忽略此属性，因为形状不能使用百分比放置。垂直位置是由 **Top** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档的第一个形状顶部距页面顶部的相对位置（百分比）。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(1)
    shape.TopRelative = 50
}
```


```JavaScript
/*本示例显示活动文档的第二个形状顶部距页面顶部的相对位置（百分比）。*/
function test() {
    alert(Application.ActiveDocument.Shapes.Item(2).TopRelative)
}
```
