# Options.ExpandHeadingsOnOpen

如果为 **True** ，则当文档打开时展开文档中的所有标题。 **Boolean** 类型，可读写。



## 语法

express.**ExpandHeadingsOnOpen**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 打开文档时展开文档中的所有标题。*/
function test() {
    Options.ExpandHeadingsOnOpen = true
}
```


```JavaScript
/*本示例判断如果 WPS 打开文档时展开文档中的所有标题，则通知用户。*/
function test() {
    if (Options.ExpandHeadingsOnOpen) {
        alert("WPS 打开文档时展开文档中的所有标题。")
    }
}
```
