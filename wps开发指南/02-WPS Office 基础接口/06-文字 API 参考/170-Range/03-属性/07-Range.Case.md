# Range.Case

返回或设置一个 **WdCharacterCase** 常量，该常量代表指定区域中文字的大小写。可读写。



## 语法

express.**Case**

express   一个代表 **Range** 对象的变量。

## 类型

WdCharacterCase

## 说明


由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例显示所选内容中的文字是否句首字母大写。*/
function test() {
    alert(Selection.Range.Case == wdTitleSentence)
}
```


```JavaScript
/*本示例将活动文档的主文章文档中的文字设置为大写。*/
function test() {
    ActiveDocument.Content.Case = wdUpperCase
}
```
