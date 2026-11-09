# DropCap.Position

返回或设置首字下沉的位置。可读/写 **WdDropPosition** 类型。



## 语法

express.**Position**

express   一个代表 **DropCap** 对象的变量。

## 类型

WdDropPosition

## 示例


```JavaScript
/*本示例将活动文档中第一段首字下沉的位置设置为wdDropNormal。*/
function test() {
    let dropcap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropcap.FontName = "Arial"
    dropcap.Position = wdDropNormal
    dropcap.LinesToDrop = 3
}
```


```JavaScript
/*本示例判断活动文档中第一段首字下沉的位置，并通知用户。*/
function test() {
    let dropcap = ActiveDocument.Paragraphs.Item(1).DropCap
    switch (dropcap.Position) {
        case wdDropMargin:
            alert("下沉的大写字母在左边距结束。")
            break
        case wdDropNone:
            alert("没有去掉的大写字母。")
            break
        case wdDropNormal:
            alert("下沉的大写字母从左边距开始。")
            break
    }
}
```
