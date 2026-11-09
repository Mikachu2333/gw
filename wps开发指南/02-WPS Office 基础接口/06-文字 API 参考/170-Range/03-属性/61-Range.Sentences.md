# Range.Sentences

返回一个 **Sentences** 集合，该集合代表范围中的所有句子。只读。



## 语法

express.**Sentences**

express   一个代表 **Range** 对象的变量。

## 类型

Sentences

## 示例


```JavaScript
/*本示例显示活动文档中第一段的句子数。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Range.Sentences.Count + " sentences")
}
```


```JavaScript
/*本示例设置所选区域中第一个句子的字体的加粗格式和字号。*/
function test() {
    let range = Selection.Range.Sentences.Item(1)
    range.Font.Bold = msoTrue
    range.Font.Size = 20
}
```
