# ShadowFormat.Obscured

如果不论是否填充了指定形状，都将填充该形状的阴影部分且为形状所遮掩，则该属性值为 **msoTrue** 。如果不填充阴影，并且在没有填充形状的情况下，可透过形状看到阴影轮廓，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Obscured**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的阴影的水平和垂直偏移量，然后显示该形状的阴影是否被填充并被该形状遮挡。阴影相对形状向右偏移 5 磅，向上偏移 3 磅。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.Item(1).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
    alert(shadowFormat.Obscured == msoTrue)
}
```


```JavaScript
/*本示例判断如果所选内容中第一个内嵌形状的阴影没有填充，并且在没有填充形状的情况下，可透过形状看到阴影轮廓，则将该阴影的前景色设置为红色。*/
function test() {
    let shadowFormat = Selection.InlineShapes.Item(1).Shadow
    if (shadowFormat.Obscured == msoFalse) {
        shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```
