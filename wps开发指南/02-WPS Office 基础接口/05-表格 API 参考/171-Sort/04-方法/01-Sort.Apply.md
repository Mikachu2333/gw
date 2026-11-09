# Sort.Apply

根据当前应用的排序状态对区域进行排序。



## 语法

express.**Apply()**

express   一个代表 **Sort** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例对第一张工作表中区域 A1:A5 的数据进行升序排序。*/
function test() {
    Application.Sheets.Item(1).Activate()
    let sort = Application.ActiveSheet.Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("A1:A5"))
    sort.SetRange(Range("A1:A5"))
    sort.Apply()
}
```


```JavaScript
/*此示例为活动工作表区域 B1:B3 赋值，并对区域 B1:B3 进行笔划数排序。*/
function test() {
    Range("B1").Value2 = "张三"
    Range("B2").Value2 = "李四"
    Range("B3").Value2 = "王五"
    let sort = Application.ActiveSheet.Sort
    sort.SortFields.Clear()
    sort.SortFields.Add(Range("B1:B3"))
    sort.SetRange(Range("B1:B3"))
    sort.SortMethod = xlStroke
    sort.Apply()
}
```
