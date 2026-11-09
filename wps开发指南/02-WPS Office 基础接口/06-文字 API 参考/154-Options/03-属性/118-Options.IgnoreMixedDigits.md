# Options.IgnoreMixedDigits

如果进行拼写检查时忽略包含数字的单词，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IgnoreMixedDigits**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 忽略包含数字的单词，然后对活动文档进行拼写检查。*/
function test() {
    Options.IgnoreMixedDigits = true
    ActiveDocument.CheckSpelling()
}
```


```JavaScript
/*本示例显示“选项”对话框中“拼写检查”选项卡上“忽略带数字的单词”选项当前的状态。*/
function test() {
    alert(Options.IgnoreMixedDigits)
}
```
