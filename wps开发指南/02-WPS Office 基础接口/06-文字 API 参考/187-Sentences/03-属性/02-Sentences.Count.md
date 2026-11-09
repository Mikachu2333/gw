# Sentences.Count

返回一个 **Long** 类型的值，该值代表集合中句子的数量。只读。



## 语法

express.**Count**

express   一个代表 **Sentences** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示选中文本所包含的句子的个数*/
function test() {
    let sentencesNum = Application.Selection.Sentences.Count
    alert(sentencesNum)
}
```
