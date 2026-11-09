# Envelope.Vertical

如果该属性值为 **True** ，则在中文信封上垂直排列文本。 **Boolean** 类型，可读写。



## 语法

express.**Vertical**

express   一个代表 **Envelope** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果活动文档为邮件合并信封文档并且其语言为简体中文，则设置信封的方向为纵向。*/
function test() {
    if (ActiveDocument.MailMerge.MainDocumentType == wdEnvelopes && Application.Language == msoLanguageIDSimplifiedChinese) {
        ActiveDocument.Envelope.Vertical = true
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的中文信封是否垂直排列文本。*/
function test() {
    alert(Documents.Item(1).Envelope.Vertical)
}
```
