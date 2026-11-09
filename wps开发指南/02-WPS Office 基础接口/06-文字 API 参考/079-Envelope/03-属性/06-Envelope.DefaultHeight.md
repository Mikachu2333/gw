# Envelope.DefaultHeight

返回或设置默认的信封高度（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DefaultHeight**

express   一个代表 **Envelope** 对象的变量。

## 类型

number（float 精度）

## 说明


如果设置 **DefaultHeight** 或 **[DefaultWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultWidth)** 属性，则会将信封尺寸自动更改为 **“工具”** 菜单中 **“信封选项”** 对话框中 **“自定义尺寸”** 中的值。使用 **[DefaultSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultSize)** 属性可将默认尺寸设置为预定义尺寸。



## 示例


```JavaScript
/*本示例将默认信封尺寸设置为长 4.5 英寸 x 7.5 英寸。*/
function test() {
    let envelope = ActiveDocument.Envelope
    envelope.DefaultHeight = Application.InchesToPoints(4.5)
    envelope.DefaultWidth = Application.InchesToPoints(7.5)
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封的高度。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(`信封的高度：${envelope.DefaultHeight} 磅`)
}
```
