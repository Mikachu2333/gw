# Options.PasteMergeFromPPT

如果为 **True** ，则从 WPP 粘贴文本时合并文本格式。 **Boolean** 类型，可读写。



## 语法

express.**PasteMergeFromPPT**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 从 WPP 粘贴内容时自动合并文本格式（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteMergeFromPPT) {
        Options.PasteMergeFromPPT = true
    }
}
```


```JavaScript
/*本示例显示 WPS 从 WPP 粘贴内容时是否自动合并文本格式。*/
function test() {
    alert(Options.PasteMergeFromPPT)
}
```
