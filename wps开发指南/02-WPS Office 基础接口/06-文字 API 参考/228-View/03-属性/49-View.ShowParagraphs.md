# View.ShowParagraphs

如果显示段落标记，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowParagraphs**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏活动窗口中的段落标记。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowParagraphs = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示段落标记。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowParagraphs)
}
```
