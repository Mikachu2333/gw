# Font.Kerning

返回或设置 WPS 根据字号自动调整字距时的最小字号。 **Single** 类型，可读写。



## 语法

express.**Kerning**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档进行自动字距调整的最小字号设为 12 磅或更大。*/
function test() {
    ActiveDocument.Content.Font.Kerning = 12
}
```


```JavaScript
/*本示例显示 WPS 根据字号自动调整选定文本的字距时的最小字号。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        alert(Selection.Font.Kerning)
    } else {
        alert("You need to select some text.")
    }
}
```
