# Options.WarnBeforeSavingPrintingSendingMarkup

如果为 **True** ，则 WPS 在保存、打印或以电子邮件形式发送包含批注或修订的文档时，显示警告。 **Boolean** 类型，可读写。



## 语法

express.**WarnBeforeSavingPrintingSendingMarkup**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例打印活动文档，但如果文档包含修订或批注，则允许用户停止打印。*/
function test() {
    //Save old state in variable
    let blnOldState = Application.Options.WarnBeforeSavingPrintingSendingMarkup

    //Turn on warning
    Application.Options.WarnBeforeSavingPrintingSendingMarkup = true

    //Print document
    ActiveDocument.PrintOut()

    //Restore original warning state
    Application.Options.WarnBeforeSavingPrintingSendingMarkup = blnOldState
}
```


```JavaScript
/*本示例显示 WPS 在保存、打印或以电子邮件形式发送包含批注或修订的文档时，是否显示警告。*/
function test() {
    alert(Application.Options.WarnBeforeSavingPrintingSendingMarkup)
}
```
