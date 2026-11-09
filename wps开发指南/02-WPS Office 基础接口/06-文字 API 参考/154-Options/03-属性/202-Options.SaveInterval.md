# Options.SaveInterval

返回或设置保存“自动恢复”信息的时间间隔（以分钟为单位）。 **Long** 类型，可读写。



## 语法

express.**SaveInterval**

express   一个代表 **Options** 对象的变量。

## 类型

number（int4 精度）

## 说明


将 **SaveInterval** 属性设置为 0（零）时，将关闭保存“自动恢复”信息的功能。



## 示例


```JavaScript
/*本示例将 WPS 设置为每隔五分钟保存所有打开文档的“自动恢复”信息。*/
function test() {
    Options.SaveInterval = 5
}
```


```JavaScript
/*本示例将 WPS 设置为不保存“自动恢复”信息。*/
function test() {
    Options.SaveInterval = 0
}
```


```JavaScript
/*本示例显示保存“自动恢复”信息的时间间隔。*/
function test() {
    alert(Options.SaveInterval)
}
```
