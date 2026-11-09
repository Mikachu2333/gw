# Window.Close

关闭指定的窗口。



## 语法

express.**Close(SaveChanges, RouteDocument)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SaveChanges | 可选 | any | 指定保存文档的操作。可以是下列 **WdSaveOptions** 常量之一： **wdDoNotSaveChanges** 、 **wdPromptToSaveChanges** 或 **wdSaveChanges** 。 |
| RouteDocument | 可选 | any | 如果该参数值为 **True** ，则将文档传送给下一个收件人。如果文档没有附加的传送名单，则忽略此参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例关闭活动文档的活动窗口并保存文档。*/
function test() {
    ActiveDocument.ActiveWindow.Close(wdSaveChanges)
}
```


```JavaScript
/*本示例关闭第一个窗口并不保存文档。*/
function test() {
    Windows.Item(1).Close(wdDoNotSaveChanges)
}
```
