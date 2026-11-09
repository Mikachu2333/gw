# Window.Split

如果将窗口拆分为多个窗格，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Split**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动窗口拆分为大小相等的两个窗格。*/
function test() {
    ActiveDocument.ActiveWindow.Split = true
}
```


```JavaScript
/*如果拆分 Document1 窗口，则本示例关闭活动窗格。*/
function test() {
    if (Windows.Item("Document1").Split === true) {
        Windows.Item("Document1").ActivePane.Close()
    }
}
```
