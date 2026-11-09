# Slicers.Item

从集合中返回一个 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **Slicers** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | **Slicer** 对象的名称或索引号。 |

## 返回值

Slicer

## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_id”的切片器缓存中第一个切片器的高度。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_id").Slicers.Item(1).Height)
}
```


```JavaScript
/*本示例将活动工作表上数据透视表的第一个切片器内的列数设置为 2。*/
function test() {
    let slicer = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1)
    slicer.NumberOfColumns = 2
}
```
