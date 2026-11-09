# Options.SmartParaSelection

如果为 **True** ，则在选择段落中大多数或全部内容时，WPS 会在选定内容中包含段落标记。 **Boolean** 类型，可读写。



## 语法

express.**SmartParaSelection**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例禁用智能段落选择功能。*/
function test() {
    Options.SmartParaSelection = false
}
```


```JavaScript
/*本示例判断如果在选择段落中大多数或全部内容时，WPS 会在选定内容中包含段落标记，则通知用户。*/
function test() {
    if (Options.SmartParaSelection) {
        alert("在选择段落中大多数或全部内容时，WPS 会在选定内容中包含段落标记。")
    }
}
```
