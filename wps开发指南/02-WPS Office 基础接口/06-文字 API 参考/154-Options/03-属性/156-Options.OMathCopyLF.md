# Options.OMathCopyLF

返回或设置一个 **Boolean** 类型的值，该值代表如何以纯文本的形式表示公式。如果为 **True** ，则表示以线性格式表示公式。如果为 **False** ，则表示以 MathML 格式表示公式。可读写。



## 语法

express.**OMathCopyLF**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在纯文本中以 MathML 格式表示公式。*/
function test() {
    Options.OMathCopyLF = false
}
```


```JavaScript
/*本示例判断如果 WPS 在纯文本中以线性格式表示公式，则通知用户。*/
function test() {
    if (Options.OMathCopyLF) {
        alert("WPS 在纯文本中以线性格式表示公式。")
    }
}
```
