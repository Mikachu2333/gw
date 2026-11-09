# Envelope.PrintOut

打印信封但不将信封添至活动文档。



## 语法

express.**PrintOut(ExtractAddress, Address, AutoText, OmitReturnAddress, ReturnAddress, ReturnAutoText, PrintBarCode, PrintFIMA, Size, Height, Width, FeedSource, AddressFromLeft, AddressFromTop, ReturnAddressFromLeft, ReturnAddressFromTop, DefaultFaceUp, DefaultOrientation, PrintEPostage, Vertical, RecipientNamefromLeft, RecipientNamefromTop, RecipientPostalfromLeft, RecipientPostalfromTop, SenderNamefromLeft, SenderNamefromTop, SenderPostalfromLeft, SenderPostalfromTop)**

express   一个代表 **Envelope** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ExtractAddress | 可选 | any | 如果该属性值为 **True** ，则将“EnvelopeAddress”书签（一个用户定义的书签）标记的文本用作收信人地址。 |
| Address | 可选 | any | 用来指定收信人地址的字符串（如果 _ExtractAddress_ 为 **True** ，则忽略该参数）。 |
| AutoText | 可选 | any | 包含收信人地址的“自动图文集”词条的名称。 |
| OmitReturnAddress | 可选 | any | 如果该属性值为 **True** ，则省略寄信人地址。 |
| ReturnAddress | 可选 | any | 指定寄信人地址的字符串。 |
| ReturnAutoText | 可选 | any | 包含寄信人地址的“自动图文集”词条的名称。 |
| PrintBarCode | 可选 | any | 如果该参数值为 **True** ，则添加一个 POSTNET 条码。仅用于美国邮件。 |
| PrintFIMA | 可选 | any | 如果该属性值为 **True** ，则添加一个“即复标记”（Facing Identification Mark，缩写为 FIM-A）用于分拣礼节性答复邮件。仅用于美国邮件。 |
| Size | 可选 | any | 指定信封尺寸的字符串。该字符串应与 **“信封选项”** 对话框中“信封尺寸”框左侧列出的信封尺寸相匹配（例如，“10 型”）。 |
| Height | 可选 | any | 如果将 _Size_ 参数设置为“自定义大小”，则该参数代表信封的高度（以磅为单位）。 |
| Width | 可选 | any | 如果将 _Size_ 参数设置为“自定义大小”，则该参数代表信封的宽度（以磅为单位）。 |
| FeedSource | 可选 | any | 如果该参数值为 **True** ，则使用 **Envelope** 对象的 **FeedSource** 属性指定打印信封时所使用的纸盒。 |
| AddressFromLeft | 可选 | any | 信封左边缘与收信人地址间的距离（以磅为单位）。 |
| AddressFromTop | 可选 | any | 信封上边缘与收信人地址间的距离（以磅为单位）。 |
| ReturnAddressFromLeft | 可选 | any | 信封左边缘与寄信人地址间的距离（以磅为单位）。 |
| ReturnAddressFromTop | 可选 | any | 信封上边缘与寄信人地址间的距离（以磅为单位）。 |
| DefaultFaceUp | 可选 | any | 如果该属性值为 **True** ，则正面向上打印信封；如果该属性值为 **False** ，则正面向下打印信封。 |
| DefaultOrientation | 可选 | any | 信封的方向。可以是任意 **WdEnvelopeOrientation** 常量。 |
| PrintEPostage | 可选 | any | 如果该属性值为 **True** ，则使用 Internet 电子邮政供应商打印邮政。 |
| Vertical | 可选 | any | 如果该属性值为 **True** ，则在信封上垂直打印文本。用于亚洲语言信封。 |
| RecipientNamefromLeft | 可选 | any | 收信人姓名距信封左边缘的位置（以磅为单位），用于亚洲语言信封。 |
| RecipientNamefromTop | 可选 | any | 收信人姓名距信封上边缘的位置（以磅为单位），用于亚洲语言信封。 |
| RecipientPostalfromLeft | 可选 | any | 收信人邮政编码距信封左边缘的位置（以磅为单位），用于亚洲语言信封。 |
| RecipientPostalfromTop | 可选 | any | 收信人邮政编码距信封上边缘的位置（以磅为单位），用于亚洲语言信封。 |
| SenderNamefromLeft | 可选 | any | 寄信人姓名距信封左边缘的位置（以磅为单位），用于亚洲语言信封。 |
| SenderNamefromTop | 可选 | any | 寄信人姓名距信封上边缘的位置（以磅为单位），用于亚洲语言信封。 |
| SenderPostalfromLeft | 可选 | any | 寄信人邮政编码距信封左边缘的位置（以磅为单位），用于亚洲语言信封。 |
| SenderPostalfromTop | 可选 | any | 寄信人邮政编码距信封上边缘的位置（以磅为单位），用于亚洲语言信封。 |

## 返回值

void

## 示例


```JavaScript
/*此示例使用用户地址作为寄信人地址和预定义的收件人地址来打印信封。*/
function test() {
    let address = "Don Funk\n23 Skye St.\nOurTown, WA 98107"
    ActiveDocument.Envelope.PrintOut(null, address, null, null, Application.UserAddress, null, true, null, "C4")
}
```


```JavaScript
/*本示例打印附加到第一个文档的信封。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    envelope.PrintOut(null, "example1", null, true, "example2", null, false, false, "C4", InchesToPoints(4.5), InchesToPoints(7.5), true, 80, 85, 60, 88, false, wdCenterLandscape)
}
```
