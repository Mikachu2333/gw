# Range.PrefixCharacter

返回单元格的前缀字符。 **Variant** 类型，只读。



## 语法

express.**PrefixCharacter**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果 **[TransitionNavigKeys](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/TransitionNavigKeys)** 属性为 **False** ，则对于文本标签，该前缀字符将是“'” 或空白。如果 **TransitionNavigKeys** 属性为 **True** ，则对于左对齐标签，该字符将是“'”，对于右对齐标签，是“"”，对于居中对齐标签，是“^”，对于重复标签，是“\\”或空白。



## 示例


```JavaScript
/*本示例显示 sheet1 中单元格 A1 的前缀字符。*/
function test() {
    MsgBox("The prefix character is " + Worksheets.Item("Sheet1").Range("A1").PrefixCharacter)
}
```


```JavaScript
/*本示例将 C3 单元格的值设置为 'test，并显示 C3 单元格的前缀字符*/
function test() {
    Range("C3").Value2 = "'test1"
    MsgBox(Range("C3").PrefixCharacter)
}
```
