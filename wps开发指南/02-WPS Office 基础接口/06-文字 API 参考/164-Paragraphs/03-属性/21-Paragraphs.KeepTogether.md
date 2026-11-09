# Paragraphs.KeepTogether

在 WPS 对文档重新分页时，如果指定段落中的所有行都位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**KeepTogether**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例为活动文档中的各段落设置格式，以使在 WPS 对文档重新分页时同一段中的各行都位于同一页上。*/
function test() {
    ActiveDocument.Paragraphs.KeepTogether = msoTrue
}
```


```JavaScript
/*本示例在 WPS 对文档重新分页时，判断如果所选段落中的所有行不位于同一页上，则通知用户。*/
function test() {
    if (Selection.Paragraphs.KeepTogether == msoFalse) {
        alert("不位于同一页上")
    }
}
```
