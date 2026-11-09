# ShadowFormat.Style

返回或设置一个 **MsoShadowStyle** 类型的值，该值代表应用于形状的阴影格式的效果类型。可读写。



## 语法

express.**Style**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowStyle

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状的阴影格式的效果是否为msoShadowStyleOuterShadow。*/
function test() {
    alert(ActiveDocument.Shapes.Item(1).Shadow.Style == msoShadowStyleOuterShadow)
}
```


```JavaScript
/*本示例将所选内容中第一个内嵌形状的阴影格式的效果设置为msoShadowStyleInnerShadow，并将该阴影格式的类型设置为msoShadow14。*/
function test() {
    let shadowFormat = Selection.InlineShapes.Item(1).Shadow
    shadowFormat.Style = msoShadowStyleInnerShadow
    shadowFormat.Type = msoShadow14
}
```
