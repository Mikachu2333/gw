# Sort.Rng

返回要执行排序的值的区域。只读。



## 语法

express.**Rng**

express   一个代表 **Sort** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动工作表排序区域 A1:A5 中的值。*/
function test() {
    Application.ActiveSheet.Sort.SetRange(Range("A1:A5"))
    let rng = Application.ActiveSheet.Sort.Rng
    alert(`${rng.Value2}`)
}
```


```JavaScript
/*本示例选中第一张工作表的排序区域。*/
function test() {
    Application.Sheets.Item(1).Sort.SetRange(Range("C1:C6"))
    Application.Sheets.Item(1).Sort.Rng.Select()
}
```
