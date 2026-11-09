# PageSetup.LayoutMode

返回或设置当前文档的版式模式。 **WdLayoutMode** 类型，可读写。



## 语法

express.**LayoutMode**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdLayoutMode

## 示例


```JavaScript
/*本示例设置活动文档的版式模式，以便 WPS 可以自动将键入的文本与网格线对齐。*/
function test() {
    ActiveDocument.PageSetup.LayoutMode = wdLayoutModeGenko
}
```


```JavaScript
/*本示例显示第一个文档版式模式下排放文本的方式。*/
function test() {
    switch (Documents.Item(1).PageSetup.LayoutMode){
        case wdLayoutModeDefault:
            alert("排放文本时不使用网格。")
            break
        case wdLayoutModeGrid:
            alert("文本排放在网格之上；用户指定行数和每行的字符数，WPS 不自动使字符与网格线对齐。")
            break
        case wdLayoutModeLineGrid:
            alert("文本排放在网格之上；用户指定行数但不指定每行的字符数。")
            break
        case wdLayoutModeGenko:
            alert("文本排放在网格之上；用户指定行数和每行的字符数，WPS 会自动将字符与网格线对齐。")
            break
    }
}
```
