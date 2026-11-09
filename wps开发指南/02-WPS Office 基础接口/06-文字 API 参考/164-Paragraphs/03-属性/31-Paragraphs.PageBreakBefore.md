# Paragraphs.PageBreakBefore

如果在指定段落前插入了分页符，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。



## 语法

express.**PageBreakBefore**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在选定区域所有段落前插入分页符。*/
function test() {
    Selection.Paragraphs.PageBreakBefore = msoTrue
}
```


```JavaScript
/*本示例显示在选定区域所有段落前是否插入了分页符。*/
function test() {
    alert(Selection.Paragraphs.PageBreakBefore == msoTrue)
}
```
