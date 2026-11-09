# Options.PasteOptionKeepBulletsAndNumbers

返回或设置 **Boolean** 值，该值表示在从 **“粘贴选项”** 上下文菜单中选择 **“仅保留文本”** 时是否保留项目符号和编号。可读/写。



## 语法

express.**PasteOptionKeepBulletsAndNumbers**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在粘贴（仅保留文本时）保留项目符号和编号。*/
function test() {
    Options.PasteOptionKeepBulletsAndNumbers = true
}
```


```JavaScript
/*本示例判断如果 WPS 在粘贴（仅保留文本时）保留项目符号和编号，则通知用户。*/
function test() {
    if (Options.PasteOptionKeepBulletsAndNumbers) {
        alert("WPS 在粘贴（仅保留文本时）保留项目符号和编号。")
    }
}
```
