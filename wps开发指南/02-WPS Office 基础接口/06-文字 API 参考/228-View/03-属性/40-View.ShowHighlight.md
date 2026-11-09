# View.ShowHighlight

如果显示和打印文档中突出显示格式的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowHighlight**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例切换对活动文档中突出显示文本的显示。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowHighlight = !ActiveDocument.ActiveWindow.View.ShowHighlight
}
```


```JavaScript
/*本示例打印活动文档，忽略突出显示格式。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowHighlight = false
    ActiveDocument.PrintOut()
}
```
