# Options.BackgroundOpen

如果为 **True** ，WPS 在后台打开 Web 文档。 **Boolean** 类型，可读写。




## 语法

express.**BackgroundOpen**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


当 WPS 在后台打开较大的 Web 文档时，用户可以在另一个文档中继续键入和选择命令。然而，Web 文档完全打开后，则不能在打开的文档中使用 WPS 的 示例代码 函数。




## 示例


```JavaScript
/*本示例在不在后台打开较大的 Web 文档和在后台打开较大文档之间切换。*/
function BackOpen() {
    if ( Options.BackgroundOpen == false ) {
        Options.BackgroundOpen = true
    }
    else {
        Options.BackgroundOpen  = false
    }
}
```
