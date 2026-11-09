# Style.Description

返回指定样式的说明。只读 **String** 类型。



## 语法

express.**Description**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 说明


样式说明的典型示例可以是：“正文+字体：Arial、12 磅、加粗、倾斜、段前 12 磅、段后 3 磅、KeepWithNext、2 级”。



## 示例


```JavaScript
/*本示例新建一个文档，并插入一个制表符分隔的活动文档样式及其说明的列表。*/
function test() {
    let document = Documents.Add()
    let styles = ActiveDocument.Styles
    for (let i = 1; i <= styles.Count; i++) {
        let range = document.Range()
        range.InsertAfter(`${styles.Item(i).NameLocal}\t${styles.Item(i).Description}`)
        range.InsertParagraphAfter()
    }
}
```


```JavaScript
/*本示例显示所选内容的样式的说明。*/
function test() {
    alert(Selection.Style.Description)
}
```
