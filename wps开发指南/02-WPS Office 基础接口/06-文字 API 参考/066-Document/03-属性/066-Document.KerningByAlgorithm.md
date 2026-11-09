# Document.KerningByAlgorithm

如果 WPS 在指定文档中调整半角拉丁字符和标点符号的间距，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**KerningByAlgorithm**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设定 WPS 调整活动文档中的半角拉丁字符与标点符号的间距。*/
function test() {
    ActiveDocument.KerningByAlgorithm = true
}
```


```JavaScript
/*本示例显示 WPS 是否在第一个文档中调整半角拉丁字符和标点符号的间距。*/
function test() {
    alert(Documents.Item(1).KerningByAlgorithm)
}
```
