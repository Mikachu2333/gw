# ChartObjects.Locked

返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。



## 语法

express.**Locked**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

boolean

## 说明


如果对象已被锁定，此属性将返回 **True** ；如果在工作表处于受保护状态时仍能修改对象，则返回 **False** 。



## 示例


```JavaScript
/*此示例取消对工作表 Sheet1 中所有图表的锁定，并通知用户。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    chartobjects.Locked = false
    alert("已取消对工作表 Sheet1 上所有图表的锁定")
}
```


```JavaScript
/*此示例显示工作表 Sheet2 中所有图表是否已被锁定。*/
function test() {
    let chartobjects = Application.Sheets.Item("Sheet2").ChartObjects()
    alert(chartobjects.Locked)
}
```
