# Envelope 对象

代表附加到文档的信封。

## 说明


使用 **[Envelope](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Envelope)** 属性返回 **Envelope** 对象。


## 示例


```JavaScript
/*本示例向新文档添加信封，并将信封顶端到地址的距离设为 2.25 英寸。*/
function test() {
    let document = Documents.Add()
    let address = "Michael Matey\n123 Skye St.\nRedmond, WA 98107"
    let rtAddress = "Cora Edmonds\n456 Erde Lane\nRedmond, WA 98107"
    let envelope = document.Envelope
    envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
    envelope.AddressFromTop = Application.InchesToPoints(2.25)
}
```
不论信封是否已添加到指定文档， **Envelope** 对象都可用。但是，如果在使用下列属性之一时尚未将信封添加到文档，则会发生错误： **[Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/Address)** 、 **[AddressFromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/AddressFromLeft)** 、 **[AddressFromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/AddressFromTop)** 、 **[FeedSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/FeedSource)** 、 **[ReturnAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddress)** 、 **[ReturnAddressFromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddressFromLeft)** 、 **[ReturnAddressFromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddressFromTop)** 和 **[UpdateDocument](#TODO)** 。



```JavaScript
/*如果已向活动文档添加信封，则本示例显示收信人地址；否则捕获异常并显示一条消息。*/
function test() {
    try {
        alert(ActiveDocument.Envelope.Address.Text)
    } catch (error) {
        alert("Envelope is not in the specified document")
    }
}
```
使用 **Insert** 方法可将信封添加到指定文档。使用 **PrintOut** 方法可设置信封的属性并打印信封，而无需将信封添加到文档。

没有 Envelopes 集合；每个 **Document** 对象只能包含一个 **Envelope** 对象。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/Insert) | 在指定文档的开头以单独一节的形式插入一个信封。 |
| [Options](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/Options) | 显示 **“信封选项”** 对话框。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/PrintOut) | 打印信封但不将信封添至活动文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/Address) | 以 **Range** 对象形式返回信件收件人地址。只读。 |
| [AddressFromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/AddressFromLeft) | 返回或设置信封左边缘与收信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [AddressFromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/AddressFromTop) | 返回或设置信封上边缘与收信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [AddressStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/AddressStyle) | 返回一个 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/obj)** 对象，该对象代表信封的收信人地址样式。只读。 |
| [DefaultFaceUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultFaceUp) | 如果按默认值将送纸方式设置为正面向上，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DefaultHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultHeight) | 返回或设置默认的信封高度（以磅为单位）。 **Single** 类型，可读写。 |
| [DefaultOmitReturnAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultOmitReturnAddress) | 如果默认省略信封上的寄信人地址，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DefaultOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultOrientation) | 返回或设置信封的默认送纸方向。 **WdEnvelopeOrientation** 类型，可读写。 |
| [DefaultPrintFIMA](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultPrintFIMA) | 如果为 **True** ，则默认向信封添加“饰面标识标记”(FIM-A)。 **Boolean** 类型，可读写。 |
| [DefaultSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultSize) | 返回或设置默认信封尺寸。 **String** 类型，可读写。 |
| [DefaultWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultWidth) | 返回或设置默认信封宽度（以磅为单位）。 **Single** 类型，可读写。 |
| [FeedSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/FeedSource) | 返回或设置打印信封时的纸盒。 **WdPaperTray** 类型，可读写。 |
| [RecipientNamefromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/RecipientNamefromLeft) | 返回或设置一个 **Single** 类型的值，该值代表收件人姓名距信封左边缘的位置（以磅为单位）。可读写。 |
| [RecipientPostalfromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/RecipientPostalfromLeft) | 返回或设置一个 **Single** 类型的值，该值代表收件人邮政编码距信封左边缘的位置（以磅为单位）。可读写。 |
| [RecipientPostalfromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/RecipientPostalfromTop) | 返回或设置一个 **Single** 类型的值，该值代表收件人邮政编码距信封上边缘的位置（以磅为单位）。可读写。 |
| [ReturnAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddress) | 返回一个 **Range** 对象，该对象代表寄信人地址。 |
| [ReturnAddressFromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddressFromLeft) | 返回或设置信封左边缘和寄信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [ReturnAddressFromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddressFromTop) | 返回或设置信封上边缘和寄信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [ReturnAddressStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/ReturnAddressStyle) | 返回一个 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/obj)** 对象，该对象代表信封的寄信人地址样式。 |
| [SenderNamefromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/SenderNamefromLeft) | 返回或设置一个 **Single** 类型的值，该值代表发件人姓名距信封左边缘的位置（以磅为单位）。可读写。 |
| [SenderNamefromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/SenderNamefromTop) | 返回或设置一个 **Single** 类型的值，该值代表发件人姓名距信封上边缘的位置（以磅为单位）。可读写。 |
| [SenderPostalfromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/SenderPostalfromLeft) | 返回或设置一个 **Single** 类型的值，该值代表发件人邮政编码距信封左边缘的位置（以磅为单位）。可读写。 |
| [SenderPostalfromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/SenderPostalfromTop) | 返回或设置一个 **Single** 类型的值，该值代表发件人邮政编码距信封上边缘的位置（以磅为单位）。可读写。 |
| [Vertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/Vertical) | 如果该属性值为 **True** ，则在中文信封上垂直排列文本。 **Boolean** 类型，可读写。 |