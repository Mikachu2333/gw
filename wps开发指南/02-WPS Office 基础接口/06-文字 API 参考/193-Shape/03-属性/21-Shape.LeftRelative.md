# Shape.LeftRelative

返回或设置一个 **Single** 类型的值，该值代表形状左侧的相对位置。可读写。



## 语法

express.**LeftRelative**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **RelativeHorizontalPosition** 属性一起使用。当设置为 **wdShapePositionRelativeNone** (-999999)（参见 **WdShapePositionRelative** 枚举）时，应忽略此属性，因为形状不能使用百分比放置。水平位置是由 **Left** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档第一个形状左侧的相对位置。*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).LeftRelative = 20
}
```


```JavaScript
/*本示例显示活动文档中第二个形状左侧的相对位置。*/
function test() {
    alert(Application.ActiveDocument.Shapes.Item(2).LeftRelative)
}
```
