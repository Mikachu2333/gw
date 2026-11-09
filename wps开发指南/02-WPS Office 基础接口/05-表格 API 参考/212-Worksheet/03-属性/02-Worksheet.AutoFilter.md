# Worksheet.AutoFilter

如果筛选已打开，则返回一个 **AutoFilter** 对象。只读。



## 语法

express.**AutoFilter**

express   一个代表 **Worksheet** 对象的变量。

## 类型

AutoFilter

## 说明


如果筛选已关闭，该属性返回 **null** 。

要为工作表创建 **AutoFilter** 对象，必须手动打开或使用 **Range** 对象的 **AutoFilter** 方法打开工作表上某个区域上的自动筛选功能。



## 示例


```JavaScript
/*下面的示例返回当前工作表的自动筛选。*/
function test() {
    let returnValue = Worksheets.Item(1).AutoFilter
}
```


```JavaScript
/*本示例显示活动工作表中筛选器的总数，以及活动工作表是否处于自动筛选筛选器模式。*/
function test() {
    alert(`活动工作表中筛选器的总数：${ActiveSheet.AutoFilter.Filters.Count}\n活动工作表是否处于自动筛选筛选器模式：${ActiveSheet.AutoFilter.FilterMode}`)
}
```
