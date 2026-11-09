# Options.AutoFormatAsYouTypeApplyNumberedLists

如果根据键入的内容，以 **“开始”** 菜单的 **“项目符号和编号”** 对话框中的编号方案将段落自动设置为编号列表，则该属性值为 **True** 。例如，如果一个段落以“1.1”和一个制表符开始，则当按下 Enter 后 WPS 将自动插入“1.2”和一个制表符。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyNumberedLists**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在键入时自动对列表进行编号。*/
function test() {
    Options.AutoFormatAsYouTypeApplyNumberedLists = true
}
```


```JavaScript
/*本示例显示 WPS 在键入时是否自动对列表进行编号。*/
function test() {
    alert(Options.AutoFormatAsYouTypeApplyNumberedLists)
}
```
