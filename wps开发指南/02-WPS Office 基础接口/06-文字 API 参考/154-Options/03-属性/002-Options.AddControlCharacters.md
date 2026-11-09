# Options.AddControlCharacters

如果 WPS 在剪切和复制文本时添加双向控制字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AddControlCharacters**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在剪切和复制文本时添加双向控制字符。*/
function test() {
    Options.AddControlCharacters = true
}
```


```JavaScript
/*本示例判断 WPS 在剪切和复制文本时是否添加双向控制字符，并通知用户。*/
function test() {
    if (Application.Options.AddControlCharacters) {
        alert("WPS 在剪切和复制文本时添加双向控制字符")
    } else {
        alert("WPS 在剪切和复制文本时未添加双向控制字符")
    }
}
```
