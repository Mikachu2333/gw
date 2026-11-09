# Document.GrammarChecked

如果已经检查了指定范围或文档的语法，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**GrammarChecked**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果指定文档的部分或全部没有经过语法检查，则返回 **False** 。要重复检查文档的语法，可将 **GrammarChecked** 属性设为 **False** 。



## 示例


```JavaScript
/*本示例判断是否对活动文档进行了语法检查，如果已检查，则显示文档的字数；如果尚未检查语法，则开始进行拼写和语法检查。*/
function test() {
    let statistics = ActiveDocument.ReadabilityStatistics
    if (ActiveDocument.GrammarChecked) {
        alert(statistics.Item(1).Name + " - " + statistics.Item(1).Value)
    } else {
        ActiveDocument.CheckGrammar()
    }
}
```


```JavaScript
/*本示例设置活动文档的 GrammarChecked 属性为 false，然后再次进行语法检查。*/
function test() {
    ActiveDocument.GrammarChecked = false
    ActiveDocument.CheckGrammar()
}
```
