# Sheets.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Sheets** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示活动工作簿中的工作表数量。*/
function test() {
    alert(Application.ActiveWorkbook.Sheets.Count)
}
```


```JavaScript
/*此示例判断如果当前工作簿成功添加一个工作表，则显示结果。*/
function test() {
    let count = ThisWorkbook.Sheets.Count
    ThisWorkbook.Sheets.Add()
    if (ThisWorkbook.Sheets.Count == count + 1) {
        alert("成功添加一个工作表")
    }
}
```
