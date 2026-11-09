# Range.InsertParagraphBefore

在指定的范围前插入一个新段落。



## 语法

express.**InsertParagraphBefore()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 说明


在应用此方法之后，该范围会扩展，以包含新段落。



## 示例


```JavaScript
/*本示例在活动文档的开头插入一个新段落。*/
function test() {
    ActiveDocument.Range().InsertParagraphBefore()
}
```


```JavaScript
/*本示例在所选内容之前插入一个新段落，并显示活动文档中段落的数量。*/
function test() {
    Selection.Range.InsertParagraphBefore()
    alert(ActiveDocument.Paragraphs.Count)
}
```
