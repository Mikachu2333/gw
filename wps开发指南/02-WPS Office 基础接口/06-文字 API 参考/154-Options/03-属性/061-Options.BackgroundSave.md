# Options.BackgroundSave

如果为 **True** ，则 WPS 在后台保存文档。当 WPS 在后台保存文档时，用户可以继续键入内容或执行命令。 **Boolean** 类型，可读写。



## 语法

express.**BackgroundSave**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例让用户在 WPS 保存文档时可以继续处理文档。*/
function test() {
    Options.BackgroundSave = true
}
```


```JavaScript
/*本示例显示在 WPS 保存文档时，用户是否可以继续处理文档。*/
function test() {
    alert(Options.BackgroundSave)
}
```
