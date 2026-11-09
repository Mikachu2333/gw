# Options.Overtype

如果激活改写模式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Overtype**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


在改写模式中，键入的字符逐一替代已有的字符。如果改写模式没有被激活，则键入的字符将已有文本右移。



## 示例


```JavaScript
/*本示例判断如果“改写”模式已激活，则显示一个信息框，询问是否将“改写”模式改为非激活状态。如果用户单击“是”按钮，则“改写”模式变为非激活状态。*/
function test() {
    if (Options.Overtype) {
        let response = MsgBox("Overtype is on. Turn off?", jsYesNo)
        if (response == jsResultYes) {
            Options.Overtype = false
        }
    }
}
```


```JavaScript
/*本示例判断如果 WPS 激活改写模式，则通知用户。*/
function test() {
    if (Options.Overtype) {
        alert("WPS 激活改写模式。")
    }
}
```
