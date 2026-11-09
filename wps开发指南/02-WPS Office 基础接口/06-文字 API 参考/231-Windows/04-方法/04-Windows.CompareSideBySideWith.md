# Windows.CompareSideBySideWith

打开两个窗口并以并排方式排列。返回一个 **Boolean** 类型的值。



## 语法

express.**CompareSideBySideWith(Document)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Document | 必选 | any | 要在并排窗口中查看的文档。 |

## 返回值

Boolean

## 说明


不能将 **Application** 对象或 **ActiveDocument** 属性与 **CompareSideBySideWith** 方法配合使用。



## 示例


```JavaScript
/*本示例将两个新文档排列在相邻的窗口中。*/
function test() {
    let doc1 = Documents.Add()
    let doc2 = Documents.Add()

    doc2.Activate()
    doc2.Windows.CompareSideBySideWith(doc1)
    Windows.ResetPositionsSideBySide()
}
```


```JavaScript
/*本示例启用同时滚动相邻窗口的功能。*/
function test() {
    let doc1 = Documents.Add()
    let doc2 = Documents.Add()

    doc2.Activate()
    doc2.Windows.CompareSideBySideWith(doc1)
    Windows.ResetPositionsSideBySide()
    Windows.SyncScrollingSideBySide = true
}
```
