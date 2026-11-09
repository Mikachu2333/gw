# Options.PrintOddPagesInAscendingOrder

如果 WPS 在手动双面打印模式下按升序打印奇数页，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintOddPagesInAscendingOrder**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果将 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PrintOut)** 方法的 *ManualDuplexPrint* 参数设为 **False** ，该属性将被忽略。



## 示例


```JavaScript
/*本示例先设定 WPS 在手动双面打印模式下按升序打印奇数页，按降序打印偶数页，然后以此方式打印活动文档。*/
function test() {
    Options.PrintOddPagesInAscendingOrder = true
    Options.PrintEvenPagesInAscendingOrder = false
    ActiveDocument.PrintOut(null, null, null, null, null, null, null, null, null, null, null, null, null, null, true)
}
```


```JavaScript
/*本示例判断如果 WPS 在手动双面打印模式下按升序打印奇数页，则通知用户。*/
function test() {
    if (Options.PrintOddPagesInAscendingOrder) {
        alert("WPS 在手动双面打印模式下按升序打印奇数页。")
    }
}
```
