# Selection.LtrPara

将指定段落的对齐方式和阅读顺序设置为从左向右。



## 语法

express.**LtrPara()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


对于所有已选定的段落，此方法将其阅读顺序设置为从左向右。如果一个段落的阅读顺序是从右向左并且为右对齐方式，则此方法会将其设置为相反的阅读顺序，并将其对齐方式设置为左对齐。  

可用 **ReadingOrder** 属性来改变阅读顺序而不影响段落的对齐方式。



## 示例


```JavaScript
/*本示例判断如果当前选定内容的样式为“Normal”，则将其阅读顺序和对齐方式设置为从左向右。*/
function test() {
    if (Selection.Style == "Normal") {
        Selection.LtrPara()
    }
}
```


```JavaScript
/*本示例将活动文档第二个段落的阅读顺序和对齐方式设置为从左向右。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.LtrPara()
}
```
