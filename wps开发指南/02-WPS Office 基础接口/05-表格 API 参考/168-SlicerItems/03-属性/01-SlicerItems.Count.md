# SlicerItems.Count

返回集合中对象的数量。只读。



## 语法

express.**Count**

express   一个代表 **SlicerItems** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作簿上名为“切片器_id”的切片器缓存中切片器项的数量。*/
function test() {
    let sliItems = Workbooks.Item(1).SlicerCaches("切片器_id").SlicerItems
    alert(sliItems.Count)
}
```
