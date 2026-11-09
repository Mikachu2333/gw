# Paragraphs.AutoAdjustRightIndent

如果 WPS 会根据您指定的每行字符数自动调整指定段落的右缩进，则该属性值为 **msoTrue** 。如果只将某些指定段落的 **AutoAdjustRightIndent** 属性设置为 **msoTrue** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**AutoAdjustRightIndent**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 根据指定的每行字符数，自动调整所选段落的右缩进。*/
function test() {
    Selection.Paragraphs.AutoAdjustRightIndent = msoTrue
}
```


```JavaScript
/*本示例将活动文档中所有段落取消根据指定的每行字符数，自动调整所选段落的右缩进。*/
function test() {
    ActiveDocument.Paragraphs.AutoAdjustRightIndent = msoFalse
}
```
