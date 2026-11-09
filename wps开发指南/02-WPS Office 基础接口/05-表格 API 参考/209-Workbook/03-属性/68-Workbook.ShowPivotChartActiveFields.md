# Workbook.ShowPivotChartActiveFields

此属性控制数据透视图筛选窗格的可见性。可读/写 **Boolean** 类型。



## 语法

express.**ShowPivotChartActiveFields**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


此属性控制数据透视图筛选窗格的可见性（打开/关闭窗格）。为了使窗格可见，必须选择一个 **PivotChart** 对象。



## 示例


```JavaScript
/*本示例使数据透视图筛选器窗格可见。*/
function test() {
    ActiveWorkbook.ShowPivotChartActiveFields = true
}
```


```JavaScript
/*本示例判断数据透视图筛选器窗格是否可见，如果可见则将其隐藏，并通知用户。*/
function test() {
    if (!ActiveWorkbook.ShowPivotChartActiveFields) {
        alert("数据透视图筛选器窗格不可见！")
    } else {
        ActiveWorkbook.ShowPivotChartActiveFields = false
        alert("已设置数据透视图筛选器窗格不可见！")
    }
}
```
