# Selection.RtlPara

将指定段落的阅读顺序和对齐方式设置为从右向左。



## 语法

express.**RtlPara()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


本方法将所有选定段落的阅读顺序设置为从右向左。如果某一段落的阅读顺序是从左向右且是左对齐的，本方法可使其阅读顺序相反，且将其对齐方式设置为右对齐。  

可用 **ReadingOrder** 属性来改变阅读顺序而不影响段落的对齐方式。



## 示例


```JavaScript
/*本示例判断如果选定内容的样式不是“Normal”，则将当前选定内容的阅读顺序和对齐方式设置为从右向左。*/
function test() {
    if (Selection.Style != "Normal") {
        Selection.RtlPara()
    }
}
```


```JavaScript
/*本示例将活动文档第二个段落的阅读顺序和对齐方式设置为从右向左。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.RtlPara()
}
```
