# Options.OMathAutoBuildUp

返回或设置一个 **Boolean** 类型的值，该值代表 WPS 是否自动将公式转换为专业格式。如果为 **True** ，则表示 WPS 自动将公式转换为专业格式。可读写。



## 语法

express.**OMathAutoBuildUp**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动将公式转换为专业格式。*/
function test() {
    Options.OMathAutoBuildUp = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动将公式转换为专业格式，则通知用户。*/
function test() {
    if (Options.OMathAutoBuildUp) {
        alert("WPS 自动将公式转换为专业格式")
    }
}
```
