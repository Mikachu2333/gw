# Options.PasteMergeFromXL

如果为 **True** ，则从 ET 粘贴表格时合并表格的格式。 **Boolean** 类型，可读写。



## 语法

express.**PasteMergeFromXL**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在粘贴 ET 表格时自动合并表格的格式（如果已禁用该选项）。*/
function test() {
    if (!Options.PasteMergeFromXL) {
        Options.PasteMergeFromXL = true
    }
}
```


```JavaScript
/*本示例显示 WPS 从 ET 粘贴表格时是否自动合并表格的格式。*/
function test() {
    alert(Options.PasteMergeFromXL)
}
```
