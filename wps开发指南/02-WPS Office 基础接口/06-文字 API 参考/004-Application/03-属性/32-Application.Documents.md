# Application.Documents

返回一个 **Documents** 集合，该集合代表所有打开的文档。只读。



## 语法

express.**Documents**

express   一个代表 **Application** 对象的变量。

## 类型

Documents

## 说明


有关返回集合中单个成员的信息，请参阅 返回集合中的对象。

“受保护的视图”窗口中显示的文档不是 **Documents** 集合的成员。请改用 **ProtectedViewWindow** 对象的 **Document** 属性来访问“受保护的视图”窗口中显示的文档。



## 示例


```JavaScript
/*本示例新增一篇文档，并显示“另存为”对话框。*/
function test() {
    Application.Documents.Add().Save()
}
```


```JavaScript
/*如果文档在上次保存后进行了修改，本示例将保存该文档。*/
function test() {
    let docs = Application.Documents
    for (let i = 1; i <= docs.Count; i++) {
        if (Application.Documents.Item(i).Saved == false) {
            Application.Documents.Item(i).Save()
        }
    }
}
```


```JavaScript
/*本示例先将文档的左右边距设置为 0.5 英寸，然后打印所有打开的文档。*/
function test() {
    let docs = Application.Documents
    for (let i = 1; i <= docs.Count; i++) {
        let doc = Application.Documents.Item(i)
        doc.PageSetup.LeftMargin = InchesToPoints(0.5)
        doc.PageSetup.LeftMargin = InchesToPoints(0.5)
        doc.PrintOut()
    }
}
```


```JavaScript
/*本示例以只读方式打开文档 example.docx。*/
function test() {
    Application.Documents.Open('D:\\example.docx', null, true)
}
```
