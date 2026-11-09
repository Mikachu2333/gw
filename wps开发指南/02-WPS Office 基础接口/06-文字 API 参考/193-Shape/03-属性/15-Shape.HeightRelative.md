# Shape.HeightRelative

返回或设置一个 **Single** 类型的值，该值代表形状高度的相对百分比。可读写。



## 语法

express.**HeightRelative**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


将此属性与 **RelativeVerticalSize** 属性一起使用。当设置为 **wdShapeSizeRelativeNone** (-999999)（参见 **WdShapeSizeRelative** 枚举）时，应忽略此属性，因为形状不能使用百分比大小。高度是由 **[Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Height)** 属性单独确定的。



## 示例


```JavaScript
/*本示例设置活动文档第一个形状的HeightRelative属性为50*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).HeightRelative = 50
}
```


```JavaScript
/*本示例显示活动文档中第二个形状 HeightRelative 属性值。*/
function test() {
    alert(Application.ActiveDocument.Shapes.Item(2).HeightRelative)
}
```
