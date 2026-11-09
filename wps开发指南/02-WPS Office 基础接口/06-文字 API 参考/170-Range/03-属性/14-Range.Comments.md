# Range.Comments

返回一个 **Comments** 集合，该集合代表指定文档、选定内容或区域中的所有批注。只读。



## 语法

express.**Comments**

express   一个代表 **Range** 对象的变量。

## 类型

Comments

## 说明


有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*本示例显示活动文档中批注的数量。*/
function test() {
    alert(ActiveDocument.Range().Comments.Count)
}
```


```JavaScript
/*本示例在活动文档的第三段添加一条批注。*/
function test() {
    let range = Application.ActiveDocument.Paragraphs.Item(3).Range
    range.Comments.Add(range, "abcabc")
}
```
