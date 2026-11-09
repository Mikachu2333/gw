# Shape.WidthRelative

返回或设置一个代表形状的相对宽度的 **Single** 。可读写。



## 语法

express.**WidthRelative**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **RelativeHorizontalSize** 属性一起使用。当设置为 **wdShapeSizeRelativeNone** (-999999)（参见 **WdShapeSizeRelative** 枚举）时，应忽略此属性，因为形状不能使用百分比大小。宽度是由 **Width** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档第一个形状的 WidthRelative 属性值为20*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).WidthRelative = 20
}
```


```JavaScript
/*本示例显示活动文档中第二个形状 WidthRelative 属性值。*/
function test() {
    alert(Application.ActiveDocument.Shapes.Item(2).WidthRelative)
}
```
