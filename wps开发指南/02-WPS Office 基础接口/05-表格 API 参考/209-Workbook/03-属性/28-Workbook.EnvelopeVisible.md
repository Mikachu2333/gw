# Workbook.EnvelopeVisible

如果显示电子邮件标题和信封工具栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnvelopeVisible**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查第一个工作簿中电子邮件标题和信封工具栏是否可见。如果可见，则将变量 strSubject 设置为电子邮件主题行的文本。*/
function test() {
    if (Workbooks.Item(1).EnvelopeVisible) {
        let strSubject = "Please read: Review immediately"
    }
}
```


```JavaScript
/*本示例演示如果电子邮件撰写标题和信封工具栏不可见，将其设置为可见并告知用户。*/
function test() {
    if (!Workbooks.Item(1).EnvelopeVisible) {
        Workbooks.Item(1).EnvelopeVisible = true
        alert("已将电子邮件撰写标题和信封工具栏设置为可见！")
    }
}
```
