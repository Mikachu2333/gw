# Workbook.SlicerCaches

表示与指定工作簿关联的切片器缓存的集合。



## 语法

express.**SlicerCaches**

express   一个代表 **Workbook** 对象的变量。

## 类型

SlicerCaches

## 说明


使用 **SlicerCaches** 集合的 **Item** 属性可返回与指定的 Workbook 对象关联的 SlicerCache 对象。 可以使用 Index 属性的值，或者指定对象的 Name 属性来检索 **SlicerCache** 对象。



## 示例


```JavaScript
/*本示例判断当活动工作簿关联的切片器缓存总数小于1，增加一个切片器缓存，否则通知用户第一个切片器缓存的名称。*/
function test() {
    if (ActiveWorkbook.SlicerCaches.Count < 1) {
        ActiveWorkbook.SlicerCaches.Add2(ActiveSheet.PivotTables("数据透视表1"), "数量")
    } else {
        alert(ActiveWorkbook.SlicerCaches.Item(1).Name)
    }
}
```


```JavaScript
/*本示例演示添加一个切片器缓存，并告知用户活动工作簿关联的切片器缓存集合的总数和第一个切片器缓存的名称。*/
function test() {
    ActiveWorkbook.SlicerCaches.Add2(ActiveSheet.PivotTables("数据透视表1"), "日期")
    alert(`活动工作簿关联的切片器缓存集合的总数为：${ActiveWorkbook.SlicerCaches.Count}\n活动工作簿中第一个切片器缓存的名称为：${ActiveWorkbook.SlicerCaches.Item(1).Name}`)
}
```
