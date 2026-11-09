# Watches 对象

指定的应用程序中所有 **[Watch](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watch/obj)** 对象的集合。

## 说明


使用 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象的 **[Watches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Watches)** 属性可返回一个 **Watches** 集合。


## 示例


```JavaScript
/*本示例在单元格 A3 中创建求和公式，并将该单元格添加至监视工具中。本示例 ET 使用 Add 方法创建新的 Watch 对象。*/
function test() {
    Application.Range("A1").Formula = 1
    Application.Range("A2").Formula = 2
    Application.Range("A3").Formula = "=Sum(A1:A2)"
    Application.Range("A3").Select()
    Application.Watches.Add(ActiveCell)
}
```
通过采用 **Watches** 集合的 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Delete)** 方法，可以从监视功能中指定删除单个单元格。



```JavaScript
/*本示例从“监视窗口”中删除工作簿 example.xlsx 的工作表 Sheet1 上的单元格 A3。本示例假定已在工作簿 example.xlsx 的工作表 Sheet1 上添加了单元格 A3（采用前一个示例可添加 Watch 对象）。*/
function test() {
    Application.Watches.Item(Workbooks.Item("example.xlsx").Sheets.Item("Sheet1").Range("A3")).Delete()
}
```
通过采用 **Watches** 集合的 **Delete** 方法，还可指定从“监视窗口”中删除所有的单元格。



```JavaScript
/*本示例从“监视窗口”中删除所有的单元格。*/
function test() {
    Application.Watches.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Add) | 添加在重新计算工作表时要跟踪的区域。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |