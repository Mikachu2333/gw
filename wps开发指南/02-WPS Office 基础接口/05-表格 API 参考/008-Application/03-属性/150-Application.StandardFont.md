# Application.StandardFont

返回或设置标准字体的名称。 **String** 类型，可读写。



## 语法

express.**StandardFont**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


如果使用该属性更改标准字体，则直到重新启动 ET 后，所做的更改才能生效。



## 示例


```JavaScript
/*本示例检查操作系统的类型，如果为 Windows (64-bit) NT 10.0，则将标准字体设置为 Geneva，如果不为 Windows (64-bit) NT 10.0，则将标准字体设置为 Arial。*/
function test() {
    if (Application.OperatingSystem == "Windows (64-bit) NT 10.0") {
        Application.StandardFont = "Geneva"
    } else {
        Application.StandardFont = "Arial"
    }
}
```


```JavaScript
/*本示例显示标准字体的名称。*/
function test() {
    alert(Application.StandardFont)
}
```
