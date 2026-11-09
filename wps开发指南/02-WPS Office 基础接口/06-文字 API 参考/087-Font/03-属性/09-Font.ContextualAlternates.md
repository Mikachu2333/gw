# Font.ContextualAlternates

指定是否为指定字体启用上下文替换。可读/写 **Long** 类型。



## 语法

express.**ContextualAlternates**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


上下文替换是根据单个字符周围的字母（其上下文）应用于这些字符的连字。上下文替换还可以应用于特定上下文中的所有词，例如常常用于标题中的词（如“of”和“the”）。为字体启用上下文替换后，将在字体设计器定义的那些上下文中使用上下文替换，而不使用标准连字。



## 示例


```JavaScript
/*本示例为活动文档中的字体启用上下文替换。*/
function test() {
    ActiveDocument.Range().Font.ContextualAlternates = msoTrue
}
```


```JavaScript
/*本示例显示所选内容的字体是否启用上下文替换。*/
function test() {
    alert(Selection.Font.ContextualAlternates === msoTrue)
}
```
