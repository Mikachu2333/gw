# Options.MultipleWordConversionsMode

返回或设置朝鲜文字和朝鲜文汉字之间的转换方向。 **WdMultipleWordConversionsMode** 类型，可读写。



## 语法

express.**MultipleWordConversionsMode**

express   一个代表 **Options** 对象的变量。

## 类型

WdMultipleWordConversionsMode

## 示例


```JavaScript
/*本示例设置 WPS 在默认情况下将朝鲜文字转换成朝鲜文汉字。*/
function test() {
    Options.MultipleWordConversionsMode = wdHangulToHanja
}
```


```JavaScript
/*本示例显示 WPS 在默认情况下朝鲜文/朝鲜文汉字之间的转换方向。*/
function test() {
    switch (Options.MultipleWordConversionsMode) {
        case wdHangulToHanja:
            alert("WPS 在默认情况下将朝鲜文转换成朝鲜文汉字。")
            break
        case wdHanjaToHangul:
            alert("WPS 在默认情况下将朝鲜文汉字转换成朝鲜文。")
            break
    }
}
```
