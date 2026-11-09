# SlicerCaches.Count

返回集合中对象的数目。



## 语法

express.**Count**

express   一个代表 **SlicerCaches** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿上切片器缓存的数量。*/
function test() {
    alert(`切片器缓存的数量：${ActiveWorkbook.SlicerCaches.Count}`)
}
```
