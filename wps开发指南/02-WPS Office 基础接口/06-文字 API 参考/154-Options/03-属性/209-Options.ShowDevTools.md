# Options.ShowDevTools

返回或设置 **Boolean** 类型的值，该值代表是否在功能区中显示 **“开发工具”** 选项卡。可读/写。



## 语法

express.**ShowDevTools**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在功能区中显示“开发工具”选项卡。*/
function test() {
    Options.ShowDevTools = true
}
```


```JavaScript
/*本示例判断如果 WPS 在功能区中显示“开发工具”选项卡，则通知用户。*/
function test() {
    if (Options.ShowDevTools) {
        alert("WPS 在功能区中显示“开发工具”选项卡。")
    }
}
```
