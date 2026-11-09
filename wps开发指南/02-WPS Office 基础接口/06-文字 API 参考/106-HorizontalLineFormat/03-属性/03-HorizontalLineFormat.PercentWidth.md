# HorizontalLineFormat.PercentWidth

返回或设置指定横线的长度，以窗口宽度的百分比表示。 **Single** 类型，可读写。



## 语法

express.**PercentWidth**

express   一个代表 **HorizontalLineFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


设置该属性还会使 **[WidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HorizontalLineFormat/member/WidthType)** 属性设置为 **wdHorizontalLinePercentWidth** 。



## 示例


```JavaScript
/*本示例添加一条横线并将其长度设置为窗口宽度的 50%。*/
function test() {
    let inlineShape = Selection.InlineShapes.AddHorizontalLineStandard()
    inlineShape.HorizontalLineFormat.PercentWidth = 50
}
```


```JavaScript
/*本示例判断如果第一个文档上第三条水平线的宽度类型为wdHorizontalLinePercentWidth，则显示该水平线的长度。*/
function test() {
    let hzLineFormat = Documents.Item(1).InlineShapes.Item(3).HorizontalLineFormat
    if (hzLineFormat.WidthType == wdHorizontalLinePercentWidth) {
        alert(`长度为窗口宽度的 ${hzLineFormat.PercentWidth}%`)
    }
}
```
