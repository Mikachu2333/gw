# Options.CheckHangulEndings

如果 WPS 自动检测朝鲜文字结尾，并在将朝鲜文字转换为朝鲜文汉字过程中忽略朝鲜文字结尾，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckHangulEndings**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果将朝鲜文汉字转换为朝鲜文字，则忽略该属性。



## 示例


```JavaScript
/*本示例询问用户是否设置 WPS 自动检测朝鲜文字结尾，并在将朝鲜文字转换为朝鲜文汉字过程中忽略朝鲜文字结尾。*/
function test() {
    let response = MsgBox("Check Hangul endings during conversion from Hangul to Hanja?", jsYesNo)
    if (response == jsResultYes) {
        Options.CheckHangulEndings = true
    } else {
        Options.CheckHangulEndings = false
    }
}
```


```JavaScript
/*本示例判断如果 WPS 自动检测朝鲜文字结尾，并在将朝鲜文字转换为朝鲜文汉字过程中忽略朝鲜文字结尾，则通知用户。*/
function test() {
    if (Options.CheckHangulEndings) {
        alert("自动检测朝鲜文字结尾，并在将朝鲜文字转换为朝鲜文汉字过程中忽略朝鲜文字结尾。")
    }
}
```
