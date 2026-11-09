# Speech.Direction

返回或设置朗读单元格的次序。 **Direction** 属性的值为一个 **[XlSpeakDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSpeakDirection)** 常量。可读写。



## 语法

express.**Direction**

express   一个代表 **Speech** 对象的变量。

## 类型

XlSpeakDirection

## 说明


| **XlSpeakDirection** 可为以下 **XlSpeakDirection** 常量之一。 |
| ---------------------------------------------------- |
| **xlSpeakByColumns**                                 |
| **xlSpeakByRows**                                    |



## 示例


```JavaScript
/*本示例为ET确定朗读的方向，并通知用户。*/
function test() {
    // Notify user of speech direction.
    if (Application.Speech.Direction == xlSpeakByColumns) {
        alert("The speech direction is set to speak by columns.")
    } else {
        alert("The speech direction is set to speak by rows.")
    }
}
```


```JavaScript
/*本示例设置朗读单元格的次序。*/
function test() {
    Application.Speech.Direction = xlSpeakByRows
}
```
