# Workbook.Path

返回一个 String 类型的值，该值代表此工作簿对象所表示的工作簿/文件的完整路径。



## 语法

express.**Path**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例演示当前活动工作簿的路径。*/
function test() {
    if (Application.ActiveWorkbook.Path.length > 0) {
        alert("当前活动工作簿的路径为：" + Application.ActiveWorkbook.Path)
    } else {
        alert("当前活动工作簿尚未保存")
    }
}
```


```JavaScript
/*本示例演示工作簿 Path 属性的数据类型。*/
function test() {
    alert("Path的数据类型为：" + typeof (Application.Workbooks.Item(1).Path))
}
```
