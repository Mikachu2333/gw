# Paragraphs.HangingPunctuation

如果为 **msoTrue** ，则指定段落中的标点将可以溢出边界。如果仅将某些指定段落的该属性设置为 **msoTrue** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**HangingPunctuation**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置活动文档所有段落的标点可以溢出边界。*/
function test() {
    ActiveDocument.Paragraphs.HangingPunctuation = msoTrue
}
```


```JavaScript
/*本示例判断所选段落的标点是否都可以溢出边界，并通知用户。*/
function test() {
    if (Selection.Paragraphs.HangingPunctuation == msoFalse) {
        alert("标点不可以溢出边界")
    } else {
        alert("标点可以溢出边界")
    }
}
```
