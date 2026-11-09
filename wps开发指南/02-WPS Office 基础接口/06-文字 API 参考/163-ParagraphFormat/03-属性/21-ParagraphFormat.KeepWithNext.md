# ParagraphFormat.KeepWithNext

在 WPS 对文档重新分页时，如果指定段落与它的下一段位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**KeepWithNext**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例设置 WPS 对活动文档重新分页时，第一个段落到第四个段落位于同一页上。*/
function test() {
    for (let i = 1; i <= 3; i++) {
        ActiveDocument.Paragraphs.Item(i).Format.KeepWithNext = msoTrue
    }
}
```


```JavaScript
/*本示例显示 WPS 对文档重新分页时，所选段落与它的下一段是否位于同一页上。*/
function test() {
    alert(Selection.ParagraphFormat.KeepWithNext === msoTrue)
}
```
