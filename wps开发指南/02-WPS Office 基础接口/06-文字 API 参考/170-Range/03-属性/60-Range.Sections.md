# Range.Sections

返回一个 **Sections** 集合，该集合代表指定范围中的各节。只读。



## 语法

express.**Sections**

express   一个代表 **Range** 对象的变量。

## 类型

Sections

## 示例


```JavaScript
/*本示例在活动文档的第一个段落添加一个新节。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Sections.Add()
}
```


```JavaScript
/*本示例显示所选内容关联的第一节的文档部分的文本。*/
function test() {
    let range = Selection.Range.Sections.Item(1).Range
    alert(range.Text)
}
```
