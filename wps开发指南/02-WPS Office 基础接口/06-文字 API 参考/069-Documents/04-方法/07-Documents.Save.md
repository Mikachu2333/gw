# Documents.Save

保存 **Documents** 集合中的所有文档。



## 语法

express.**Save(NoPrompt, OriginalFormat)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NoPrompt | 可选 | any | 如果该属性值为 **True** ，则 WPS 将自动保存所有文档。如果该属性值为 **False** ，WPS 将提示用户保存自上次保存后已修改过的每篇文档。 |
| OriginalFormat | 可选 | any | 指定文档的保存方式。可以是 **WdOriginalFormat** 常量之一。 |

## 返回值

void

## 说明


如果此文档以前未保存过，则 **“另存为”** 对话框将提示用户键入文件名。



## 示例


```JavaScript
/*本示例保存所有已打开的文档。*/
function test() {
    Documents.Save()
}
```


```JavaScript
/*本示例以原始文档的格式保存所有已打开的文档。*/
function test() {
    Documents.Save(true, wdOriginalDocumentFormat)
}
```
