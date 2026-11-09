# Workbooks.Close

关闭对象。



## 语法

express.**Close()**

express   一个代表 **Workbooks** 对象的变量。

## 返回值

void

## 说明


通过 JavaScript 关闭工作簿时不在工作簿中运行任何 Auto_Close 宏。 使用 **RunAutoMacros** 方法运行自动关闭宏。



## 示例


```JavaScript
/*此示例关闭所有打开的工作簿。如果某个打开的工作簿有改动，ET 将显示询问是否保存更改的对话框和相应提示。*/
function test() {
    Application.Workbooks.Close()
}
```


```JavaScript
/*本示例判断如果工作簿数量大于0，则关闭所有工作簿。*/
function test() {
    if (Workbooks.Count > 0) {
        Workbooks.Close()
    }
}
```
