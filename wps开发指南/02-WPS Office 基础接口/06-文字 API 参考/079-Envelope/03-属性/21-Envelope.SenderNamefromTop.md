# Envelope.SenderNamefromTop

返回或设置一个 **Single** 类型的值，该值代表发件人姓名距信封上边缘的位置（以磅为单位）。可读写。



## 语法

express.**SenderNamefromTop**

express   一个代表 **Envelope** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性用于采用亚洲语言的信封。



## 示例


```JavaScript
/*本示例判断如果活动文档为邮件合并信封以及其格式为垂直类型，则设置收件人和发件人地址信息的位置。*/
function test() {
    let envelope = ActiveDocument.Envelope
    if (ActiveDocument.MailMerge.MainDocumentType == wdEnvelopes && envelope.Vertical) {
        envelope.RecipientNamefromLeft = InchesToPoints(2.5)
        envelope.RecipientNamefromTop = InchesToPoints(2)
        envelope.RecipientPostalfromLeft = InchesToPoints(1.5)
        envelope.RecipientPostalfromTop = InchesToPoints(0.5)
        envelope.SenderNamefromLeft = InchesToPoints(0.5)
        envelope.SenderNamefromTop = InchesToPoints(2)
        envelope.SenderPostalfromLeft = InchesToPoints(0.5)
        envelope.SenderPostalfromTop = InchesToPoints(3)
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封中发件人姓名到信封上边缘的距离。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(`信封中发件人姓名到信封上边缘的距离：${envelope.SenderNamefromTop} 磅`)
}
```
