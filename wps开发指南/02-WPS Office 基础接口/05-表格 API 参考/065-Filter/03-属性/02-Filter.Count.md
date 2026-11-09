# Filter.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Filter** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上筛选区域中第一列的筛选数量。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Item(1).Count)
}
```
