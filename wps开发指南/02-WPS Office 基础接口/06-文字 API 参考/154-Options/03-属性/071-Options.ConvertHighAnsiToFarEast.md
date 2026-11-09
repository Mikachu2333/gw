# Options.ConvertHighAnsiToFarEast

如果在打开文档时，WPS 将与东亚字体相关的文字转换为相应的字体，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ConvertHighAnsiToFarEast**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在打开文档时，将与东亚字体相关的文字转换为相应的字体。*/
function test() {
    Options.ConvertHighAnsiToFarEast = true
}
```


```JavaScript
/*本示例判断如果在打开文档时，WPS 将与东亚字体相关的文字转换为相应的字体，则通知用户。*/
function test() {
    if (Options.ConvertHighAnsiToFarEast) {
        alert("WPS 将与东亚字体相关的文字转换为相应的字体。")
    }
}
```
