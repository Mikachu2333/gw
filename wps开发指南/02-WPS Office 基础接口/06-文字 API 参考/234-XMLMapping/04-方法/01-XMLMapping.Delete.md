# XMLMapping.Delete

从父内容控件中删除 XML 映射。



## 语法

express.**Delete()**

express   一个代表 **XMLMapping** 对象的变量。

## 返回值

void

## 说明


此操作删除 XML 映射。XML 数据和内容控件仍保留在文档中。



## 示例


```JavaScript
/*本示例删除活动文档内当前映射的所有内容控件的 XML 映射。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let xmlMapping = ActiveDocument.ContentControls.Item(i).XMLMapping
        if (xmlMapping.IsMapped) {
            xmlMapping.Delete()
        }
    }
}
```


```JavaScript
/*本示例删除第一个文档上第一个内容控件的XML映射。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    xmlMapping.Delete()
}
```
