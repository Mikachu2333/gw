# Options.PasteMergeLists

如果为 **True** ，则合并粘贴列表和周围列表的格式。 **Boolean** 类型，可读写。



## 语法

express.**PasteMergeLists**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动合并粘贴列表和周围列表的格式（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteMergeLists) {
        Options.PasteMergeLists = true
    }
}
```


```JavaScript
/*本示例显示 WPS 是否自动合并粘贴列表和周围列表的格式。*/
function test() {
    alert(Options.PasteMergeLists)
}
```
