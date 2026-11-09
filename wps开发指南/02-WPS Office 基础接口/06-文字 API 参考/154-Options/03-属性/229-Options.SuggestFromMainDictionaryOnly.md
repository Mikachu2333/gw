# Options.SuggestFromMainDictionaryOnly

如果 WPS 仅根据主词典提供拼写建议，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SuggestFromMainDictionaryOnly**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果根据主词典和添加的任何自定义词典提供拼写建议，则该属性值返回 **False** 。



## 示例


```JavaScript
/*本示例将 WPS 设置为仅根据主词典选择建议单词，然后在活动文档中进行拼写检查。*/
function test() {
    Options.SuggestFromMainDictionaryOnly = true
    ActiveDocument.CheckSpelling()
}
```


```JavaScript
/*本示例显示 WPS 是否仅根据主词典提供拼写建议。*/
function test() {
    alert(Options.SuggestFromMainDictionaryOnly)
}
```
