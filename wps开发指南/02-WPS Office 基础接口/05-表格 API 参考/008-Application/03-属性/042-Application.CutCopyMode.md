# Application.CutCopyMode

返回或设置剪切或复制模式的状态。可为 **True** 、 **False** 或如下表所示的一个 **[XLCutCopyMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCutCopyMode)** 常量。 **Long** 类型，可读写。



## 语法

express.**CutCopyMode**

express   一个代表 **Application** 对象的变量。

## 类型

XlCutCopyMode

## 说明


| 返回值        | 说明          |
| ---------- | ----------- |
| **False**  | 不处于剪切或复制模式。 |
| **xlCopy** | 处于复制模式。     |
| **xlCut**  | 处于剪切模式。     |

| 设置值       | 说明                |
| --------- | ----------------- |
| **False** | 取消剪切或复制模式并清除移动边框。 |
| **True**  | 启动剪切或复制模式并显示移动边框。 |



## 示例


```JavaScript
/*本示例在消息框中显示剪切或复制模式的状态。*/
function test() {
    switch (Application.CutCopyMode) {
        case 0:
            MsgBox("Not in Cut or Copy mode")
            break
        case xlCopy:
            MsgBox("In Copy mode")
            break
        case xlCut:
            MsgBox("In Cut mode")
            break
    }
}
```


```JavaScript
/*本示例将A1单元格复制到剪贴板，并判断如果CutCopyMode属性的值为xlCopy，则将其设置为false，并通知用户。*/
function test() {
    Range("A1").Copy()
    if (Application.CutCopyMode == xlCopy) {
        Application.CutCopyMode = false
        alert("已取消剪切或复制模式并清除移动边框。")
    }
}
```
