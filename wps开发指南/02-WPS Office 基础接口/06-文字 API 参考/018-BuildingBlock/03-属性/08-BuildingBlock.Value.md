# BuildingBlock.Value

返回或设置一个 **String** 类型的值，该值代表构建基块的内容。可读写。



## 语法

express.**Value**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文档模板的第二个构建基块的内容。*/
function test() {
    alert(Application.Templates.Item(1).BuildingBlockEntries.Item(2).Value)
}
```


```JavaScript
/*本示例设置第一个文档模板的第一个构建基块的内容，然后在活动文档的第一段中插入第一个模板的第一个构建基块。*/
function test() {
    let entries = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    entries.Value = "example"
    entries.Insert(ActiveDocument.Paragraphs(1).Range)
}
```
