# Workbook.ReadOnly

如果对象以只读方式打开，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ReadOnly**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例演示如果当前活动工作簿是只读的，则将此活动工作簿另存为 Newfile.xls。*/
function test() {
    if (Application.ActiveWorkbook.ReadOnly == true) {
        Application.ActiveWorkbook.SaveAs("NEWFILE.XLS")
    }
}
```


```JavaScript
/*此示例演示当前活动工作簿 ReadOnly 属性的数据类型。*/
function test() {
    alert(typeof (Application.ActiveWorkbook.ReadOnly))
}
```
