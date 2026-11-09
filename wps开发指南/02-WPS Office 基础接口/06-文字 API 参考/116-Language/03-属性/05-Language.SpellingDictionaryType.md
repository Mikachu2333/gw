# Language.SpellingDictionaryType

返回或设置校对工具类型。 **WdDictionaryType** 类型，可读写。



## 语法

express.**SpellingDictionaryType**

express   一个代表 **Language** 对象的变量。

## 类型

WdDictionaryType

## 说明


用本属性可以将活动拼写词典更改为其他有效的 WPS 附加词典。例如，可以用法律、医学和大型拼写词典来代替标准词典。

由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例显示用于英语（美国）的拼写词典的类型是否为wdSpelling。*/
function test() {
    alert(Languages.Item(wdEnglishUS).SpellingDictionaryType == wdSpelling)
}
```


```JavaScript
/*本示例将法律词典设为活动拼写词典。*/
function test() {
    Languages.Item(wdEnglishUS).SpellingDictionaryType = wdSpellingLegal
}
```
