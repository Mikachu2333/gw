# Variables.Count

返回一个 **Long** 类型的值,该值代表集合中变量的数量。



## 语法

express.**Count**

express   一个代表 **Variables** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例为活动文档添加三个文档变量，然后显示该文档上文档变量的数量。*/
function test() {
    ActiveDocument.Variables.Add("a", 1)
    ActiveDocument.Variables.Add("b", 2)
    ActiveDocument.Variables.Add("c", 3)
    alert(ActiveDocument.Variables.Count)
}
```
