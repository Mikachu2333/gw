# Options.HangulHanjaFastConversion

如果 WPS 在朝鲜文字和朝鲜文汉字间进行转换时，自动转换具有单独建议的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HangulHanjaFastConversion**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例询问用户，在朝鲜文字和朝鲜文汉字间进行转换时，是否设置 WPS 使用快速转换功能。*/
function test() {
    let response = MsgBox("Use fast conversion?", jsYesNo)
    if (response == jsResultYes) {
        Options.HangulHanjaFastConversion = true
    } else {
        Options.HangulHanjaFastConversion = false
    }
}
```


```JavaScript
/*本示例判断如果 WPS 在朝鲜文字和朝鲜文汉字间进行转换时，自动转换具有单独建议的单词，则通知用户。*/
function test() {
    if (Options.HangulHanjaFastConversion) {
        alert("WPS 在朝鲜文字和朝鲜文汉字间进行转换时，自动转换具有单独建议的单词。")
    }
}
```
