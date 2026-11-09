# View.ShowHiddenText

如果显示具有隐藏格式的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowHiddenText**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏每个窗口中具有隐藏格式的文本。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        Windows.Item(i).View.ShowHiddenText = false
    }
}
```


```JavaScript
/*本示例切换对隐藏文本的显示。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowHiddenText = !ActiveDocument.ActiveWindow.View.ShowHiddenText
}
```
