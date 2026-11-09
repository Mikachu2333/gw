# Words.Count

返回一个 **Long** 类型的值，该值代表集合中的字数。只读。



## 语法

express.**Count**

express   一个代表 **Words** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示选定内容的字数。*/
function test() {
    if (Application.Selection.Words.Count >= 1 && Application.Selection.Type !== wdSelectionIP) {
        alert("The selection contains " + Application.Selection.Words.Count + " words.")
    }
}
```
