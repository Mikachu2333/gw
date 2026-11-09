# Document.UndoClear

清除可对指定文档撤消的操作列表。



## 语法

express.**UndoClear()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


该方法对应于单击 **“常用”** 工具栏上的 **“撤消”** 按钮旁边的箭头时出现的项目列表。在宏的末尾包括该方法可防止如 `Selection.InsertAfter()` 等 JavaScript 操作显示在 **“撤消”** 框中。



## 示例


```JavaScript
/*此示例清除可对活动文档撤消的操作列表。*/
function test() {
    ActiveDocument.UndoClear()
}
```


```JavaScript
/*本示例将所选内容的字体设置为加粗格式，然后清除可对第一个文档撤销的操作列表，使用户无法通过撤销操作取消加粗。*/
function test() {
    Selection.Font.Bold = msoTrue
    Documents.Item(1).UndoClear()
}
```
