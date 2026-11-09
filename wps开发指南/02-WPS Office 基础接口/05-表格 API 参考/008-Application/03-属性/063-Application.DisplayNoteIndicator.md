# Application.DisplayNoteIndicator

如果包含注释的单元格显示单元格提示并包含注释标识符（单元格右上角的小圆点），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayNoteIndicator**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏注释标识符。*/
function test() {
    Application.DisplayNoteIndicator = false
}
```


```JavaScript
/*本示例判断是否显示注释标识符，如果是隐藏则重新设置为显示注释标识符，并通知用户。*/
function test() {
    if (Application.DisplayNoteIndicator) {
        alert("显示注释标识符")
    } else {
        Application.DisplayNoteIndicator = true
        alert("已设置为显示注释标识符")
    }
}
```
