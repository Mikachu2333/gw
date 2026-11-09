# Options.AutoFormatAsYouTypeReplaceOrdinals

如果为 **True** ，则键入时，WPS 会用相同字母的上标格式替换序数后缀“st”、“nd”、“rd”和“th”。例如，“1st”被替换为“1”后接上标“st”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceOrdinals**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用将序数字母自动替换为上标字母的功能。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceOrdinals = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“编辑”选项卡上“序号（1st）替换为上标”选项的状态。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplaceOrdinals)
}
```
