# Options.EnableLiveDrag

返回或设置一个 **Boolean** 值，如果启用实时拖动，则为 **True** 。可读写。



## 语法

express.**EnableLiveDrag**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 启用实时拖动。*/
function test() {
    Options.EnableLiveDrag = true
}
```


```JavaScript
/*本示例判断如果 WPS 启用实时拖动，则通知用户。*/
function test() {
    if (Options.EnableLiveDrag) {
        alert("WPS 启用实时拖动。")
    }
}
```
