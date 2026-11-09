# Application.ShowSelectionFloaties

返回或设置一个 **Boolean** 值，该值表示当用户选择文本时是否显示 **“浮动工具栏”** 。如果显示 **“浮动工具栏”** ，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowSelectionFloaties**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


对应于 **“ET 选项”** 对话框中的 **“选择时显示浮动工具栏”** 复选框。



## 示例


```JavaScript
/*本示例将ET设置为当用户选择文本时不显示“浮动工具栏”。*/
function test() {
    Application.ShowSelectionFloaties = false
}
```


```JavaScript
/*本示例判断如果当用户选择文本时显示“浮动工具栏”，则通知用户。*/
function test() {
    if (Application.ShowSelectionFloaties) {
        alert("当用户选择文本时显示“浮动工具栏”")
    }
}
```
