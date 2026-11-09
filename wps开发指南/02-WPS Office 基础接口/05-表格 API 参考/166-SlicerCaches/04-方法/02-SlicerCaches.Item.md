# SlicerCaches.Item

从集合中返回一个 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SlicerCaches** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

SlicerCache

## 示例


```JavaScript
/*本示例清除第一张工作簿中名为“切片器_id”切片器缓存的筛选器。*/
function test() {
    Workbooks.Item(1).SlicerCaches.Item("切片器_id").ClearManualFilter()
}
```


```JavaScript
/*本示例删除活动工作簿上名为“切片器_name”的切片器缓存，以及与该切片器缓存关联的“name”切片器。*/
function test() {
    ActiveWorkbook.SlicerCaches.Item("切片器_name").Delete()
}
```
