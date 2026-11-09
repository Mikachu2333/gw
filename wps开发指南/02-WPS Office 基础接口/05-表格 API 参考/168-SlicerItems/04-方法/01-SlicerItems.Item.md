# SlicerItems.Item

从集合中返回一个 **[SlicerItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **SlicerItems** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

SlicerItem

## 示例


```JavaScript
/*本示例显示活动工作簿上第二个切片器缓存中第三个切片器项的源名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(2).SlicerItems.Item(3).SourceName)
}
```


```JavaScript
/*本示例选中活动工作表上数据透视表第一个切片器的缓存中名为“张三”的切片器项。*/
function test() {
    let sliItem = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems.Item("张三")
    sliItem.Selected = true
}
```
