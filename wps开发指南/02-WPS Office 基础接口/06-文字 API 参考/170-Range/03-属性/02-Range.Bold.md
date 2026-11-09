# Range.Bold

如果选定区域中字体的格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Bold**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （ **msoTrue** 和 **msoFalse** 的混合）。可以设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。



## 示例


```JavaScript
/*本示例将选定文本的字体格式设为加粗。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Range.Bold = wdToggle
    }
}
```


```JavaScript
/*本示例将活动文档的第一段的格式设为加粗。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Bold = msoTrue
}
```
