# Workbook.Saved

如果指定工作簿从上次保存至今未发生过更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Saved**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


如果某个工作簿从未保存过，则其 **Path** 属性返回一个空字符串 ("")。

如果要关闭某个已更改的工作簿，但又不想保存它或者不想出现保存提示，则可将此属性设为 **True** 。



## 示例


```JavaScript
/*本示例检查活动工作簿是否有未保存的更改，如果有，则显示一条消息。*/
function test() {
    if (Application.ActiveWorkbook.Saved == false) {
        alert("This workbook contains unsaved changes.")
    }
}
```


```JavaScript
/*本示例演示关闭某个已更改的工作簿，而不出现保存提示。*/
function test() {
    Application.ActiveSheet.Cells(1).Value2 = 1
    Application.ActiveWorkbook.Saved = true
    Application.ActiveWorkbook.Close()
}
```
