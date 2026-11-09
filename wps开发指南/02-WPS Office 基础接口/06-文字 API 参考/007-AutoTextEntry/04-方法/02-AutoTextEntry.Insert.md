# AutoTextEntry.Insert

在指定区域内的位置插入“自动图文集”词条，返回代表“自动图文集”词条的 **Range** 对象。



## 语法

express.**Insert(Where, RichText)**

express   一个代表 **AutoTextEntry** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Where | 必选 | Range | “自动图文集”词条的位置。 |
| RichText | 可选 | any | 如果该属性值为 **True** ，则插入“自动图文集”词条时应用其原来的格式。 |

## 返回值

Range

## 说明


如果不想替换该区域，则在使用该方法前使用 **Collapse** 方法。



## 示例


```JavaScript
/*本示例在选定内容的后面插入带格式的“自动图文集”词条“Test2”。*/
function test() {
    ActiveDocument.Content.Select()
    Selection.Collapse(wdCollapseEnd)
    ActiveDocument.AttachedTemplate.AutoTextEntries("Test2").Insert(Selection.Range, true)
}
```


```JavaScript
/*本示例在选定内容的后面插入 Normal 模板中第二个“自动图文集”条目。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Item(2).Insert(Selection.Range, false)
}
```
