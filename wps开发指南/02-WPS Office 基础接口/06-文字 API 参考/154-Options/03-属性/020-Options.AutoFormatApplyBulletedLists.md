# Options.AutoFormatApplyBulletedLists

如果当 WPS 自动设置文档或区域格式时，会用 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的项目符号替换列表段落的开始字符（例如星号、连字符和大于号符号），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatApplyBulletedLists**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将文档中列表段落的段首字符替换为项目符号。*/
function test() {
    Options.AutoFormatApplyBulletedLists = true
}
```


```JavaScript
/*本示例显示“自动项目符号列表”选项的状态。*/
function test() {
    alert(Options.AutoFormatApplyBulletedLists)
}
```
