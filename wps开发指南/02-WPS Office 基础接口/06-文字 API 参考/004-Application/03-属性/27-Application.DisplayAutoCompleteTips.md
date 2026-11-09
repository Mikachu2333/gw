# Application.DisplayAutoCompleteTips

如果 WPS 显示有关所键入整个单词、日期或词组的建议的提示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayAutoCompleteTips**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在您键入文字时，显示有关所键入的整个单词、日期或词组的建议的提示。*/
function test() {
    Application.DisplayAutoCompleteTips = true
}
```


```JavaScript
/*本示例显示 WPS 是否在用户键入文字时，展示有关所键入的整个单词、日期或词组的建议的提示。*/
function test() {
    let daCompleteTips = Application.DisplayAutoCompleteTips
    alert(daCompleteTips)
}
```
