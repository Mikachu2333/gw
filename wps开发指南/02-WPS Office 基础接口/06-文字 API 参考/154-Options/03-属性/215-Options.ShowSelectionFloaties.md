# Options.ShowSelectionFloaties

返回或设置 **Boolean** 值，该值表示当用户选择文本时是否显示浮动工具栏。可读/写。



## 语法

express.**ShowSelectionFloaties**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


对应于 **“选项”** 对话框中 **“视图”** 选项卡上 **“页面显示选项”** 下 **“选择时显示浮动工具栏”** 选项。



## 示例


```JavaScript
/*本示例设置当用户选择文本时显示浮动工具栏。*/
function test() {
    Options.ShowSelectionFloaties = true
}
```


```JavaScript
/*本示例判断如果用户选择文本时显示浮动工具栏，则通知用户。*/
function test() {
    if (Options.ShowSelectionFloaties) {
        alert("当用户选择文本时显示浮动工具栏")
    }
}
```
