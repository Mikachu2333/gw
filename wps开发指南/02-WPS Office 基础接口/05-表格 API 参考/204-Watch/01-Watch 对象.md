# Watch 对象

代表在重新计算工作表时跟踪的区域。 **Watch** 对象允许用户验证其模型的准确性并调试其遇到的问题。

## 说明


 **Watch** 对象是 **[Watches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/obj)** 集合的成员。

使用 **Watches** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Add)** 方法或 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Item)** 属性可返回一个 **Watch** 对象。


## 示例


```JavaScript
/*本示例向监视窗口中添加单元格，然后在单元格 A3 中创建求和公式，并将该单元格添加至监视工具中，然后删除监视窗口中第一个单元格。ET 使用 Add 方法创建一个新的 Watch 对象。*/
function test() {
    Application.Watches.Add(Range("B1"))
    Application.Range("A1").Formula = 1
    Application.Range("A2").Formula = 2
    Application.Range("A3").Formula = "=Sum(A1:A2)"
    Application.Range("A3").Select()
    Application.Watches.Add(ActiveCell)
    Application.Watches.Item(1).Delete()
}
```
通过采用 **Watches** 集合的 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watches/member/Delete)** 方法，可以从监视功能中指定删除单个单元格。



```JavaScript
/*本示例向监视窗口中添加单元格，然后从“监视”窗口中删除工作簿example.xlsx的工作表 Sheet1 上的单元格 A3。*/
function test() {
    Application.Watches.Add(Range("A1"))
    Application.Watches.Add(Range("A2"))
    Application.Watches.Add(Range("A3"))
    Application.Watches.Item(Workbooks.Item("example.xlsx").Sheets.Item("Sheet1").Range("A3")).Delete()
}
```
通过采用 **Delete** 集合的 **Watches** 方法，还可指定从“监视窗口”中删除所有的单元格。



```JavaScript
/*本示例从“监视”窗口中删除所有单元格。*/
function test() {
    for (let i = 1; i <= Application.Watches.Count; i++) {
        Application.Watches.Item(i).Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watch/member/Delete) | 删除对象。 |