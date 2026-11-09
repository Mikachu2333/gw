# ShadowFormat.Visible

如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果 **Visible** 属性为 **msoFalse** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例判断如果活动文档的第一个形状的阴影格式可见，则将该阴影格式的类型设置为msoShadow4。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    if (shadowFormat.Visible == msoTrue) {
        shadowFormat.Type = msoShadow4
    }
}
```


```JavaScript
/*本示例将所选内容中第一个内嵌形状的阴影格式设置为不可见。*/
function test() {
    Selection.InlineShapes.Item(1).Shadow.Visible = msoFalse
}
```
