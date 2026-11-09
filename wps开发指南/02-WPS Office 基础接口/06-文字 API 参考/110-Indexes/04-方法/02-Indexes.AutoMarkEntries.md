# Indexes.AutoMarkEntries

用对应文件中的索引项将 XE（索引项）域自动添至指定文档。



## 语法

express.**AutoMarkEntries(ConcordanceFileName)**

express   一个代表 **Indexes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ConcordanceFileName | 必选 | string | 包含要索引项目列表的对应文件名称。 |

## 返回值

void

## 说明


索引文件是一个包含两列表格的 WPS 文档，其中第一列为待检索的项目，第二列为索引项。



## 示例


```JavaScript
/*本示例根据“D:\示例\example.docx”文档中的项目，为第一个文档添加索引项。*/
function test() {
    Documents.Item(1).Indexes.AutoMarkEntries("D:\\示例\\example.docx")
}
```


```JavaScript
/*本示例根据“D:\示例\example.docx”文档中的项目，为活动文档添加索引项，并显示该文档上索引项的数量。*/
function test() {
    ActiveDocument.Indexes.AutoMarkEntries("D:\\示例\\example.docx")
    alert(ActiveDocument.Indexes.Count)
}
```
