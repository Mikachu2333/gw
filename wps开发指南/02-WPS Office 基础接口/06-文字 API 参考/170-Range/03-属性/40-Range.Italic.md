# Range.Italic

如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**Italic**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （ **msoTrue** 和 **msoFalse** 混合组成），并且可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。



## 示例


```JavaScript
/*本示例将活动文档中第一个单词的格式设置为倾斜。*/
function test() {
    ActiveDocument.Words.Item(1).Italic = msoTrue
}
```


```JavaScript
/*本示例显示所选区域的格式是否为倾斜和非倾斜组成。*/
function test() {
    alert(Selection.Range.Italic == wdUndefined)
}
```
