# Presentation.NoLineBreakAfter

返回或设置前置字符。可读/写。 **String** 类型。



## 语法

express.**NoLineBreakAfter**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将“$”、“(”、“[”、“\”和“{”设置为前置字符。*/
function test() {
    let presentation = Application.ActivePresentation
    presentation.FarEastLineBreakLevel = ppFarEastLineBreakLevelCustom
    presentation.NoLineBreakAfter = "$([\{"
}
```


```JavaScript
/*本示例显示第一篇演示文稿的前置字符。*/
function test() {
    alert(Presentations.Item(1).NoLineBreakAfter)
}
```
