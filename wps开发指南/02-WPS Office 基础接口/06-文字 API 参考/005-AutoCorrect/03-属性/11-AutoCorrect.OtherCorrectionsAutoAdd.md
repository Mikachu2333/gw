# AutoCorrect.OtherCorrectionsAutoAdd

如果 WPS 自动将单词添至 **“‘自动更正’例外项”** 对话框（在 **“工具”** 菜单上，单击 **“自动更正选项”** 命令）中 **“其他更正”** 选项卡上的“自动更正”例外项列表中，则该属性值为 **True** 。如果删除并重新键入一个不希望 WPS 更正的单词，WPS 会将该单词添至该列表。 **Boolean** 类型，可读写。



## 语法

express.**OtherCorrectionsAutoAdd**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动将单词添加至“自动更正”例外项列表中。*/
function test() {
    Application.AutoCorrect.OtherCorrectionsAutoAdd = true
}
```


```JavaScript
/*本示例显示是否自动将单词添加至“自动更正”例外项列表中*/
function test() {
    alert(Application.AutoCorrect.OtherCorrectionsAutoAdd)
}
```
