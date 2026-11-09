# Options.PromptUpdateStyle

如果为 **True** ，则在改变样式的格式时显示一条消息，请用户确认是否要重新设置样式的格式或重新应用原样式格式。 **Boolean** 类型，可读写。



## 语法

express.**PromptUpdateStyle**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果为 **False** ，则对选定内容重新应用样式的格式，而无需确认用户是否要改变样式。



## 示例


```JavaScript
/*本示例检查在更新样式时用户是否会收到消息，如果没有，则启用该功能。*/
function test() {
    if (!Options.PromptUpdateStyle) {
        Options.PromptUpdateStyle = true
    }
}
```


```JavaScript
/*本示例显示在更新样式时用户是否会收到消息。*/
function test() {
    alert(Options.PromptUpdateStyle)
}
```
