# Language.ID

返回一个标识指定语言的数值。只读 **WdLanguageID** 类型。



## 语法

express.**ID**

express   一个代表 **Language** 对象的变量。

## 类型

WdLanguageID

## 示例


```JavaScript
/*本示例用冰岛语校对工具来设置所选内容的格式。*/
function test() {
    Selection.LanguageID = Languages.Item("Icelandic").ID
}
```


```JavaScript
/*本示例显示标识简体中文的数字。*/
function test() {
    alert(Application.Languages.Item(wdSimplifiedChinese).ID)
}
```
