# Worksheet.ShowDataForm

显示与指定工作表相关联的数据表单。



## 语法

express.**ShowDataForm()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 说明


使用数据表单时宏的运行会暂停。关闭数据表单后，宏将从 **ShowDataForm** 方法的下一语句开始继续执行。

如果存在自定义数据表单，则本方法将运行此表单。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 的数据表单。*/
function test() {
    Application.Worksheets.Item(1).ShowDataForm()
}
```


```JavaScript
/*本示例为活动工作表A1等单元格分别赋值，并显示与活动工作表相关联的数据表单。*/
function test() {
    Application.ActiveSheet.Select()
    Range("A1").Value2 = "班级"
    Range("A2").Value2 = 1
    Range("A3").Value2 = 2
    Range("B1").Value2 = "成绩"
    Range("B2").Value2 = 89
    Range("B3").Value2 = 81
    Application.ActiveSheet.ShowDataForm()
}
```
