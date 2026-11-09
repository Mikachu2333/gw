# PivotTable.Slicers

返回指定数据透视表的 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合。只读



## 语法

express.**Slicers**

express   一个代表 **PivotTable** 对象的变量。

## 类型

Slicers

## 说明


切片器可用于筛选数据透视表中的数据。 **Slicers** 集合包含的 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象表示与该指定数据透视表关联的切片器。



## 示例


```JavaScript
/*本示例删除数据透视表中所有的切片器*/
function test() {
    for (let i = Worksheets.Item(1).PivotTables(1).Slicers.Count; i > 0; i--) {
        Worksheets.Item(1).PivotTables(1).Slicers.Item(i).Delete()
    }
}
```


```JavaScript
/*本示例将数据透视表中第一个切片器的标题设置为“总量”*/
function test() {
    ActiveSheet.PivotTables(1).Slicers.Item(1).Caption = "总量"
}
```
