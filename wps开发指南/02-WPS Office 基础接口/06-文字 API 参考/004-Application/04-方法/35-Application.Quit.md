# Application.Quit

退出 WPS ，并可选择保存或传送打开的文档。



## 语法

express.**Quit(SaveChanges, OriginalFormat, RouteDocument)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SaveChanges | 可选 | any | 指定 WPS 在关闭前是否保存更改过的文档。可以是 **WdSaveOptions** 常量之一。 |
| OriginalFormat | 可选 | any | 指定 WPS 保存其原格式不是 WPS 文档格式的方式。可以是 **WdOriginalFormat** 常量之一。 |
| RouteDocument | 可选 | any | 如果为 **True** ，则将文档传送给下一个收件人。如果文档没有附加传送名单，则忽略该参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例关闭 WPS，并提示用户保存自上次保存后已更改过的每篇文档。*/
function test() {
    Application.Quit(wdPromptToSaveChanges)
}
```


```JavaScript
/*本示例提示用户保存文档。如果用户单击"确定"，则在关闭 WPS 前，以 wdWordDocument 格式保存文档。*/
function test() {
    let intResponse = MsgBox("Do you want to save all documents?", jsOKCancel)
    if (intResponse == jsResultOK) {
        Application.Quit(wdSaveChanges, wdWordDocument)
    }
}
```
