# RecentFiles.Add

返回一个 **RecentFile** 对象，该对象代表添加到最近使用过的文件列表中的文件。



## 语法

express.**Add(Document, ReadOnly)**

express   一个代表 **RecentFiles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Document | 必选 | any | 要添加到最近使用的文件列表的文档。可用文档的字符串名称或 **Document** 对象来指定该参数。 |
| ReadOnly | 可选 | any | 如果该属性值为 **True** ，则将文档设置为只读。 |

## 返回值

RecentFile

## 示例


```JavaScript
/*本示例将活动文档添加到最近使用的文件的列表中。*/
function test() {
    if (ActiveDocument.Saved) {
        Application.RecentFiles.Add(ActiveDocument.FullName, true)
    }
}
```


```JavaScript
/*本示例将“example.docx”添加到最近使用过的文件列表中，然后显示最近使用的文件的数量。*/
function test() {
    Application.RecentFiles.Add("example.docx")
    alert(Application.RecentFiles.Count)
}
```
