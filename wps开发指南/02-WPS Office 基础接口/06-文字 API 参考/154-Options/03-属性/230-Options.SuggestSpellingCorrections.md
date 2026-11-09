# Options.SuggestSpellingCorrections

如果 WPS 在检查拼写时，总是为每一个拼写错误的单词提供可选的拼写建议，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SuggestSpellingCorrections**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 总是为拼写错误的单词提出可选的拼写建议，然后在活动文档中进行拼写检查。*/
function test() {
    Options.SuggestSpellingCorrections = true
    ActiveDocument.CheckSpelling()
}
```


```JavaScript
/*本示例显示“选项”对话框中“拼写检查”选项卡上“总提出更正建议”选项的当前状态。*/
function test() {
    alert(Options.SuggestSpellingCorrections)
}
```
