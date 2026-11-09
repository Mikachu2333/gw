# AutoTextEntries.AppendToSpike

删除指定的区域并将该区域的内容添至图文场（一个内置的“自动图文集”词条）。此方法将图文场作为一个 **AutoTextEntry** 对象返回。



## 语法

express.**AppendToSpike(Range)**

express   一个代表 **AutoTextEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 被删除和添至图文场的区域。 |

## 返回值

AutoTextEntry

## 说明


 **AppendToSpike** 方法仅对 Normal 模板中的 **AutoTextEntries** 集合有效。



## 示例


```JavaScript
/*本示例删除选定内容并将其内容添至 Normal 模板的图文场中。*/
function test() {
    if (Selection.Range.Text.length > 1) {
        NormalTemplate.AutoTextEntries.AppendToSpike(Selection.Range)
    }
}
```


```JavaScript
/*本示例清除图文场，然后将活动文档中的第一个和第三个单词添至 Normal 模板的图文场中。同时在插入点插入图文场的内容。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let autoTextEntries = NormalTemplate.AutoTextEntries
    for (let i = autoTextEntries.Count; i > 0; i--) {
        if (autoTextEntries.Item(i).Name == "图文场") {
            autoTextEntries.Item(i).Delete()
        }
    }
    autoTextEntries.AppendToSpike(ActiveDocument.Words(3))
    autoTextEntries.AppendToSpike(ActiveDocument.Words(1))
    autoTextEntries.Item("图文场").Insert(Selection.Range)
}
```
