# Options.ContextualSpeller

返回或设置 **Boolean** 值，该值表示是否使用上下文拼写检查器，基于单词上下文和它前后的单词来检查拼写。可读/写。



## 语法

express.**ContextualSpeller**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


上下文拼写检查器可以识别出单词的结构和它们在句子中的位置，以确定拼写是否正确。它可以找到标准拼写检查器找不到的错误。例如，用户可能键入“superb owl”，而不是“super bowl”。由于“superb”和“owl”都是拼写正确的单词，因此标准拼写检查器找不到错误。基于句子上下文中的单词以及它们前后的单词，上下文拼写检查器就能确定正确单词是“super”和“bowl”，并自动进行更改。



## 示例


```JavaScript
/*本示例设置 WPS 使用上下文拼写检查器，基于单词上下文和它前后的单词来检查拼写。*/
function test() {
    Options.ContextualSpeller = true
}
```


```JavaScript
/*本示例判断如果使用上下文拼写检查器，基于单词上下文和它前后的单词来检查拼写，则通知用户。*/
function test() {
    if (Options.ContextualSpeller) {
        alert("使用上下文拼写检查器，基于单词上下文和它前后的单词来检查拼写。")
    }
}
```
