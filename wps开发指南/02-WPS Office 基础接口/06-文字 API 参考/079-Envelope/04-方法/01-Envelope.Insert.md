# Envelope.Insert

在指定文档的开头以单独一节的形式插入一个信封。



## 语法

express.**Insert(ExtractAddress, Address, AutoText, OmitReturnAddress, ReturnAddress, ReturnAutoText, PrintBarCode, PrintFIMA, Size, Height, Width, FeedSource, AddressFromLeft, AddressFromTop, ReturnAddressFromLeft, ReturnAddressFromTop, DefaultFaceUp, DefaultOrientation, PrintEPostage, Vertical, RecipientNamefromLeft, RecipientNamefromTop, RecipientPostalfromLeft, RecipientPostalfromTop, SenderNamefromLeft, SenderNamefromTop, SenderPostalfromLeft, SenderPostalfromTop)**

express   一个代表 **Envelope** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ExtractAddress | 可选 | any | 如果该参数值为 **True** ，则将 EnvelopeAddress 书签（用户定义的书签）标记的文字用作收信人的地址。 |
| Address | 可选 | any | 用来指定收信人地址的字符串（如果 _ExtractAddress_ 为 **True** ，则忽略该参数）。 |
| AutoText | 可选 | any | 用来指定用于地址的“自动图文集”词条的字符串。如果指定了词条，则忽略 _Address_。 |
| OmitReturnAddress | 可选 | any | 如果该参数值为 **True** ，则不插入寄信人地址。 |
| ReturnAddress | 可选 | any | 指定寄信人地址的字符串。 |
| ReturnAutoText | 可选 | any | 用来指定用于寄信人地址的“自动图文集”词条的字符串。如果指定了词条，则忽略 _ReturnAddress_。 |
| PrintBarCode | 可选 | any | 如果该参数值为 **True** ，则添加一个 POSTNET 条码。仅用于美国邮件。 |
| PrintFIMA | 可选 | any | 如果该参数值为 **True** ，则添加一个饰面标识标记 (FIMA) 用于预先识别礼节性回邮。仅用于美国邮件。 |
| Size | 可选 | any | 指定信封尺寸的字符串。该字符串必须与 **“信封选项”** 对话框的 **“信封尺寸”** 框中列出的大小（例如，“10 型”或“C4”）相匹配。 |
| Height | 可选 | any | 当 _Size_ 参数设置为“自定义大小”时信封的高度（以磅为单位）。 |
| Width | 可选 | any | 当 _Size_ 参数设置为“自定义大小”时信封的宽度（以磅为单位）。 |
| FeedSource | 可选 | any | 如果该参数值为 **True** ，则使用 **Envelope** 对象的 **FeedSource** 属性指定打印信封时所使用的纸盒。 |
| AddressFromLeft | 可选 | any | 信封左边缘与收信人地址之间的距离（以磅为单位）。 |
| AddressFromTop | 可选 | any | 信封上边缘与收信人地址之间的距离（以磅为单位）。 |
| ReturnAddressFromLeft | 可选 | any | 信封左边缘与寄信人地址之间的距离（以磅为单位）。 |
| ReturnAddressFromTop | 可选 | any | 信封上边缘与寄信人地址之间的距离（以磅为单位）。 |
| DefaultFaceUp | 可选 | any | 如果该参数值为 **True** ，则将信封正面向上打印；如果该参数值为 **False** ，则正面向下打印。 |
| DefaultOrientation | 可选 | any | 信封方向。可以是任意 **WdEnvelopeOrientation** 常量。 |
| PrintEPostage | 可选 | any | 如果该参数值为 **True** ，则插入从 Internet 邮政供应商处获得的邮政。 |
| Vertical | 可选 | any | 如果该参数值为 **True** ，则在信封上垂直打印文本。用于中文信封。默认值为 **False** 。 |
| RecipientNamefromLeft | 可选 | any | 收信人姓名距离信封左边缘的位置（以磅为单位）。用于中文信封。 |
| RecipientNamefromTop | 可选 | any | 收信人姓名距离信封上边缘的位置（以磅为单位）。用于中文信封。 |
| RecipientPostalfromLeft | 可选 | any | 收信人邮政编码距离信封左边缘的位置（以磅为单位）。用于中文信封。 |
| RecipientPostalfromTop | 可选 | any | 收信人邮政编码距离信封上边缘的位置（以磅为单位）。用于中文信封。 |
| SenderNamefromLeft | 可选 | any | 寄信人姓名距离信封左边缘的位置（以磅为单位）。用于中文信封。 |
| SenderNamefromTop | 可选 | any | 寄信人姓名距离信封上边缘的位置（以磅为单位）。用于中文信封。 |
| SenderPostalfromLeft | 可选 | any | 寄信人邮政编码距离信封左边缘的位置（以磅为单位）。用于中文信封。 |
| SenderPostalfromTop | 可选 | any | 寄信人邮政编码距离信封上边缘的位置（以磅为单位）。用于中文信封。 |

## 返回值

void

## 示例


```JavaScript
/*本示例使用存储在 address 和 rtAddress 变量中的地址向活动文档添加一个 C4 信封。*/
function test() {
    let address = "Max Benson\n123 Skye St.\nOurTown, WA 98107"
    let rtAddress = "Paul Borm\n456 Erde Lane\nOurTown, WA 98107"
    ActiveDocument.Envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
}
```


```JavaScript
/*本示例向第一个文档添加一个信封，并切换活动窗口的视图类型。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    envelope.Insert(null, "example1", null, false, "example2", null, false, false, "C4", InchesToPoints(4.5), InchesToPoints(7.5), null, 80, 85, 60, 88, true, wdCenterLandscape)
    Documents.Item(1).ActiveWindow.View.Type = wdPrintView
}
```
