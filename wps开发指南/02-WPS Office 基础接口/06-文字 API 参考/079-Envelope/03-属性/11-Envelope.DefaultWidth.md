# Envelope.DefaultWidth

返回或设置默认信封宽度（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DefaultWidth**

express   一个代表 **Envelope** 对象的变量。

## 类型

number（float 精度）

## 说明


如果设置 **[DefaultHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultHeight)** 或 **DefaultWidth** 属性，则信封尺寸会自动更改为 **“工具”** 菜单 **的“信封选项”** 对话框中 **“自定义尺寸”** 的值。使用 **[DefaultSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultSize)** 属性可将默认尺寸设置为预定义尺寸。



## 示例


```JavaScript
/*本示例设置自定义信封默认宽度和高度，并将一个信封添至活动文档。*/
function test() {
    let address = "Tim O' Brien\n123 Skye St.\nBellevue, WA 98004"
    let rtAddress = "Dave Edson\n123 West Main\nSeattle, WA 98004"
    let envelope = ActiveDocument.Envelope
    envelope.DefaultWidth = Application.InchesToPoints(9)
    envelope.DefaultHeight = Application.InchesToPoints(3.85)
    envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封的宽度。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(`信封的宽度：${envelope.DefaultWidth} 磅`)
}
```
