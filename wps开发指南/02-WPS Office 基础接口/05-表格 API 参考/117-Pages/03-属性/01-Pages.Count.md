# Pages.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Pages** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 Sheet1 页数。*/
function test() {
    alert(`工作表 Sheet1 页数为 ${Application.Worksheets.Item("Sheet1").PageSetup.Pages.Count} `)
}
```


```JavaScript
/*本示例显示活动工作表页数。*/
function test() {
    alert(`活动工作表页数为 ${ActiveSheet.PageSetup.Pages.Count} `)
}
```
