# Options.EnableHangulHanjaRecentOrdering

如果 WPS 在进行朝鲜文字和朝鲜文汉字间的转换时，在建议列表的顶端显示最近用过的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableHangulHanjaRecentOrdering**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例询问用户是否设置 WPS 在进行朝鲜文字和朝鲜文汉字间的转换时，在建议列表的顶端显示最近用过的单词。*/
function test() {
    let response = MsgBox("Display most recently used words at the top of the suggestions list?", jsYesNo)
    if (response == jsResultYes) {
        Options.EnableHangulHanjaRecentOrdering = true
    } else {
        Options.EnableHangulHanjaRecentOrdering = false
    }
}
```


```JavaScript
/*本示例判断如果 WPS 在进行朝鲜文字和朝鲜文汉字间的转换时，在建议列表的顶端显示最近用过的单词，则通知用户。*/
function test() {
    if (Options.EnableHangulHanjaRecentOrdering) {
        alert("WPS 在进行朝鲜文字和朝鲜文汉字间的转换时，在建议列表的顶端显示最近用过的单词。")
    }
}
```
