# Sheets.Visible

返回或设置一个 **Variant** 值，它确定对象是否可见。



## 语法

express.**Visible**

express   一个代表 **Sheets** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例将名称为“Sheet2”和“Sheet3”的工作表设置为不可见。*/
function test() {
    let names = ["Sheet2", "Sheet3"]
    Application.Sheets.Item(names).Visible = msoFalse
}
```


```JavaScript
/*此示例将活动工作簿中索引为1和2的工作表设置为可见。*/
function test() {
    let names = [1, 2]
    Application.ActiveWorkbook.Sheets.Item(names).Visible = msoTrue
}
```
