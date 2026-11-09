# AutoCorrect.CorrectHangulAndAlphabet

如果 WPS 自动对朝鲜文字中键入的西文单词应用正确的字体，则该属性值为 **True** ，反之亦然。 **Boolean** 类型，可读写。



## 语法

express.**CorrectHangulAndAlphabet**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动对朝鲜文字中键入的西文单词应用正确的字体。*/
function test() {
    Application.AutoCorrect.CorrectHangulAndAlphabet = true
}
```


```JavaScript
/*本示例显示是否自动对朝鲜文字中键入的西文单词应用正确的字体*/
function test() {
    alert(Application.AutoCorrect.CorrectHangulAndAlphabet)
}
```
