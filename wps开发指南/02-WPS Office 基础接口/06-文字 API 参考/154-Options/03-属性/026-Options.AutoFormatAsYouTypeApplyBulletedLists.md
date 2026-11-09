# Options.AutoFormatAsYouTypeApplyBulletedLists

如果在键入时用 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的项目符号替换当前的项目符号（例如星号、连字符和大于号），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyBulletedLists**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使用“项目符号和编号”对话框中的项目符号替换当前的项目符号。*/
function test() {
    Options.AutoFormatAsYouTypeApplyBulletedLists = true
}
```


```JavaScript
/*本示例显示是否使用“项目符号和编号”对话框中的项目符号替换当前的项目符号。*/
function test() {
    alert(Options.AutoFormatAsYouTypeApplyBulletedLists)
}
```
