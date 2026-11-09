# Options.AutoFormatAsYouTypeAutoLetterWizard

如果为 **True** ，则在用户输入信函称呼或结束语时，WPS 会自动启动“英文信函向导”。可读写。



## 语法

express.**AutoFormatAsYouTypeAutoLetterWizard**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在用户输入信函称呼或结束语时，自动启动“英文信函向导”。*/
function test() {
    Options.AutoFormatAsYouTypeAutoLetterWizard = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户输入信函称呼或结束语时，自动启动“英文信函向导”，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeAutoLetterWizard) {
        alert("用户输入信函称呼或结束语时，自动启动“英文信函向导”。")
    }
}
```
