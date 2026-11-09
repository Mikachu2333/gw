# Options.SaveNormalPrompt

如果 WPS 在关闭之前提示用户确认是否保存对 Normal 模板所做的更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveNormalPrompt**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果 WPS 在关闭之前自动保存对 Normal 模板所做的更改，则为 **False** 。



## 示例


```JavaScript
/*本示例将 WPS 设置为在关闭之前自动保存对 Normal 模板所做的更改，然后退出。*/
function test() {
    Options.SaveNormalPrompt = false
    Application.Quit()
}
```


```JavaScript
/*本示例显示 WPS 在关闭之前是否提示用户确认保存对 Normal 模板所做的更改。*/
function test() {
    alert(Options.SaveNormalPrompt)
}
```
