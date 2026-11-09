# Options.DefaultTray

返回或设置默认纸盒，以便打印机使用该纸盒打印文档。 **String** 类型，可读写。



## 语法

express.**DefaultTray**

express   一个代表 **Options** 对象的变量。

## 类型

string

## 说明


使用 **DefaultTrayID** 属性并指定一个 **WdPaperTray** 常量也可设置该选项。



## 示例


```JavaScript
/*本示例设置 WPS 使用下层纸盒。*/
function test() {
    Options.DefaultTray = "Lower tray"
}
```


```JavaScript
/*本示例显示默认纸盒。*/
function test() {
    alert(Options.DefaultTray)
}
```
