# Application.PromptForSummaryInfo

如果在保存文件时 ET 要求用户输入汇总信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PromptForSummaryInfo**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在首次保存文件时显示要求输入汇总信息的提示。*/
function test() {
    Application.PromptForSummaryInfo = true
}
```


```JavaScript
/*本示例演示 PromptForSummaryInfo 属性的数据类型，并将 PromptForSummaryInfo 属性的值设置为false。*/
function test() {
    alert("PromptForSummaryInfo属性的数据类型为：" + typeof Application.PromptForSummaryInfo)
    Application.PromptForSummaryInfo = false
}
```
