# Document.ProtectionType

该属性返回指定文档的保护类型。可以是下列 **WdProtectionType** 常量之一： **wdAllowOnlyComments** 、 **wdAllowOnlyFormFields** 、 **wdAllowOnlyReading** 、 **wdAllowOnlyRevisions** 或 **wdNoProtection** 。



## 语法

express.**ProtectionType**

express   一个代表 **Document** 对象的变量。

## 类型

WdProtectionType

## 示例


```JavaScript
/*本示例判断如果没有保护活动文档，则保护文档，使审阅者只能插入批注而不改变文档内容。*/
function test() {
    if (ActiveDocument.ProtectionType == wdNoProtection) {
        ActiveDocument.Protect(wdAllowOnlyComments)
    }
}
```


```JavaScript
/*本示例判断如果活动文档受到保护，则解除文档的保护。*/
function test() {
    if (ActiveDocument.ProtectionType !== wdNoProtection) {
        ActiveDocument.Unprotect()
    }
}
```
