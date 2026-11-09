# Field.InlineShape

返回一个 **InlineShape** 对象，该对象可以代表图片、OLE 对象以及作为 INCLUDEPICTURE 或 EMBED 域结果的 ActiveX 控件。



## 语法

express.**InlineShape**

express   一个代表 **Field** 对象的变量。

## 类型

InlineShape

## 说明


可将 **InlineShape** 对象作为字符处理，并作为字符放置在一行文本中。



## 示例


```JavaScript
/*本示例显示活动文档中与第一个域有关的嵌入式图形的宽度。若要使此示例运行，此域必须是 INCLUDEPICTURE 域。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    if (field.Type == wdFieldIncludePicture) {
        alert(field.InlineShape.Width)
    }
}
```


```JavaScript
/*本示例将所选内容中与第一个域有关的嵌入式图形设置为灰度显示。*/
function test() {
    let field = Selection.Fields.Item(1)
    field.InlineShape.PictureFormat.ColorType = msoPictureGrayscale
}
```
