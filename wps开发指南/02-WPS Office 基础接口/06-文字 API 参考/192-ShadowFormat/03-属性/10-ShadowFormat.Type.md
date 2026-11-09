# ShadowFormat.Type

返回或设置形状阴影的类型。可读/写 **MsoShadowType** 类型。



## 语法

express.**Type**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoShadowType

## 示例


```JavaScript
/*本示例判断如果活动文档的第一个形状的阴影格式可见，则设置该阴影格式的类型。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    if (shadowFormat.Visible == msoTrue) {
        shadowFormat.Type = msoShadow8
    }
}
```


```JavaScript
/*本示例将所选内容中第一个内嵌形状的阴影格式的效果设置为msoShadowStyleInnerShadow，并将该阴影格式的类型设置为msoShadow17。*/
function test() {
    let shadowFormat = Selection.InlineShapes.Item(1).Shadow
    shadowFormat.Style = msoShadowStyleInnerShadow
    shadowFormat.Type = msoShadow17
}
```
