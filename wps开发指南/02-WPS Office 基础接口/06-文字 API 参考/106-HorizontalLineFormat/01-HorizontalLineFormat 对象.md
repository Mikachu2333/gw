# HorizontalLineFormat 对象

代表横线的格式设置。

## 说明


使用 **HorizontalLineFormat** 属性可返回 **HorizontalLineFormat** 对象。


## 示例


```JavaScript
/*本示例设置新建水平线的对齐方式。*/
function test() {
    Selection.InlineShapes.AddHorizontalLineStandard()
    ActiveDocument.InlineShapes.Item(1).HorizontalLineFormat.Alignment = wdHorizontalLineAlignLeft
}
```


```JavaScript
/*本示例添加一条无任何三维阴影的横线。*/
function test() {
    Selection.InlineShapes.AddHorizontalLineStandard()
    ActiveDocument.InlineShapes.Item(1).HorizontalLineFormat.NoShade = true
}
```


```JavaScript
/*本示例添加一条横线并将其长度设置为窗口宽度的 50%。*/
function test() {
    Selection.InlineShapes.AddHorizontalLineStandard()
    ActiveDocument.InlineShapes.Item(1).HorizontalLineFormat.PercentWidth = 50
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HorizontalLineFormat/member/Alignment) | 返回或设置一个 **WdHorizontalLineAlignment** 常量，该常量代表指定水平线的对齐方式。可读写。 |
| [NoShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HorizontalLineFormat/member/NoShade) | 如果 WPS 绘制无三维阴影的指定横线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PercentWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HorizontalLineFormat/member/PercentWidth) | 返回或设置指定横线的长度，以窗口宽度的百分比表示。 **Single** 类型，可读写。 |
| [WidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HorizontalLineFormat/member/WidthType) | 返回或设置指定的 **HorizontalLineFormat** 对象的宽度类型。 **WdHorizontalLineWidthType** 类型，可读写。 |