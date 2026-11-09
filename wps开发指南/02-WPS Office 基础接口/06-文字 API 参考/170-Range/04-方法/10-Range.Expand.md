# Range.Expand

扩展指定区域。返回添至该区域的字符数。 **Long** 类型。



## 语法

express.**Expand(Unit)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 扩展区域时所基于的单位。可以是下列 **WdUnits** 常量之一： **wdCharacter** 、 **wdWord** 、 **wdSentence** 、 **wdParagraph** 、 **wdSection** 、 **wdStory** 、 **wdCell** 、 **wdColumn** 、 **wdRow** 或 **wdTable** 。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例创建指向活动文档第一个单词的区域，然后将该区域扩展至文档首段。*/
function test() {
    let range = ActiveDocument.Words.Item(1)
    range.Expand(wdParagraph)
}
```


```JavaScript
/*本示例先将选定内容的首个字符设为大写，再将选定内容扩展至整句。*/
function test() {
    let range = Selection.Range
    range.Characters.Item(1).Case = wdTitleSentence
    range.Expand(wdSentence)
}
```
