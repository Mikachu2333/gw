# Workbook.EnableAutoRecover

根据规定的时间间隔保存全部格式的已更改文件。 **Boolean** 类型，可读写。



## 语法

express.**EnableAutoRecover**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


如果 ET 出现故障、系统出现故障，或者系统非正常关闭（不允许 ET 保存更改的文件），则会打开备份的文件，使用户有机会保存否则会丢失的更改。当用户重新启动 ET 时，将打开一个文档恢复窗口，该窗口为用户提供一个选择，以恢复他们正在处理的文件。如果将该属性设置为 **True** （默认值），将启用该功能。



## 示例


```JavaScript
/*下例检查“自动恢复”功能的设置，如果不能启用该功能，则 ET 将启用该功能，并通知用户。*/
function test() {
    // Check to see if the feature is enabled, if not, enable it.
    if (!ActiveWorkbook.EnableAutoRecover) {
        ActiveWorkbook.EnableAutoRecover = true
        MsgBox("The AutoRecover feature has been enabled.")
    } else {
        MsgBox("The AutoRecover feature is already enabled.")
    }
}
```


```JavaScript
/*本示例演示EnableAutoRecover属性的数据类型，点击“确定”后关闭备份功能。*/
function test() {
    alert(typeof ActiveWorkbook.EnableAutoRecover)
    ActiveWorkbook.EnableAutoRecover = false
}
```
