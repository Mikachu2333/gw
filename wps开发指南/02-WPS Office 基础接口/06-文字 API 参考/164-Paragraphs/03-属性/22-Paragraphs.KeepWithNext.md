# Paragraphs.KeepWithNext

在 WPS 对文档重新分页时，如果指定段落与其下一段位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**KeepWithNext**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例将当前所选内容中的所有段落设置为位于同一页上。*/
function test() {
    Selection.Paragraphs.KeepWithNext = msoTrue
}
```


```JavaScript
/*本示例显示所选段落是否设置为位于同一页上。*/
function test() {
    alert(Selection.Paragraphs.KeepWithNext == msoTrue)
}
```
