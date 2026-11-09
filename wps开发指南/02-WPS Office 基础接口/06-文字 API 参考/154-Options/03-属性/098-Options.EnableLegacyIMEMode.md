# Options.EnableLegacyIMEMode

返回或设置一个 **Boolean** 类型的值，该值代表是否启用旧式 IME 模式。可读写。



## 语法

express.**EnableLegacyIMEMode**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用旧式 IME 模式。*/
function test() {
    Options.EnableLegacyIMEMode = true
}
```


```JavaScript
/*本示例显示是否启用旧式 IME 模式。*/
function test() {
    alert(Options.EnableLegacyIMEMode)
}
```
