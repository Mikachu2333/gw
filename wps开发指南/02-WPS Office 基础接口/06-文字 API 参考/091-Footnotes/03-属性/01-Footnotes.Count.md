# Footnotes.Count

返回一个 **Long** 类型的值，它表示集合中的脚注数。只读。



## 语法

express.**Count**

express   一个代表 **Footnotes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上脚注的数量。*/
function test() {
    alert(ActiveDocument.Footnotes.Count)
}
```
