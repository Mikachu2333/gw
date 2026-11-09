# PivotCache.MissingItemsLimit

返回或设置每个数据透视表字段的唯一项的最大数量，即使在缓存记录中没有支持数据，唯一项也能保留。 **[XlPivotTableMissingItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableMissingItems)** 类型，可读写。



## 语法

express.**MissingItemsLimit**

express   一个代表 **PivotCache** 对象的变量。

## 类型

XlPivotTableMissingItems

## 说明


| **XlPivotTableMissingItems** 可为以下 **XlPivotTableMissingItems** 常量之一。 |
| -------------------------------------------------------------------- |
| **xlMissingItemsDefault** 每个允许的数据透视表字段中唯一项的默认个数。                     |
| **xlMissingItemsMax** 每个允许的数据透视表字段中唯一项的最大个数 (32,500)。                |
| **xlMissingItemsNone** 每个允许的数据透视表中没有唯一项（零）。                          |

该属性的值可以介于 0 到 32500。如果指定一个小于零的整数，则其等价于指定 **xlMissingItemsDefault** 。可以指定大于 32,500 的整数，但等价于指定 **xlMissingItemsMax** 。

 **MissingItemsLimit** 属性只用于非 OLAP 数据透视表，否则将出现运行时错误。



## 示例


```JavaScript
/*本示例确定每个字段的唯一项的最大个数，并通知用户。本示例假定数据透视表位于活动工作表上。*/
function test() {
    let pvtCache = Application.ActiveWorkbook.PivotCaches().Item(1)
    switch (pvtCache.MissingItemsLimit) {
        case xlMissingItemsDefault:
            alert("The default value of unique items per PivotField is allowed.")
            break
        case xlMissingItemsMax2:
            alert("The maximum value of unique items per PivotField is allowed.")
            break
        case xlMissingItemsNone:
            alert("No unique items per PivotField are allowed.")
            break
    }
}
```


```JavaScript
/*本示例将第一张工作表上数据透视表的数据缓存中每个数据透视表字段的唯一项的最大数量设置为 xlMissingItemsMax2。*/
function test() {
    let pvtCache = Worksheets.Item(1).Range("I1").PivotTable.PivotCache()
    pvtCache.MissingItemsLimit = xlMissingItemsMax2
}
```
