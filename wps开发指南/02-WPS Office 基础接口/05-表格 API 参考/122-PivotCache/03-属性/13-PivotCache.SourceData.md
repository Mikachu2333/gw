# PivotCache.SourceData

返回数据透视表的数据源，如下表所示。 **Variant** 型，可读写。



## 语法

express.**SourceData**

express   一个代表 **PivotCache** 对象的变量。

## 类型

any

## 说明


| 数据源                    | 返回值                                                |
| ---------------------- | -------------------------------------------------- |
| ET 列表或数据库 | 以文本形式返回的单元格引用。                                     |
| 外部数据源                  | 数组。每行包含一个 SQL 连接字符串，该行的剩余元素作为查询字符串，以 255 个字符为单位分段。 |
| 多个合并区域                 | 二维数组。每行由一个引用及与其相关联的页字段项组成。                         |
| 其他数据透视表                | 以上三种情形之一。                                          |

该属性不可用于 OLE DB 数据源。



## 示例


```JavaScript
/*本示例显示活动工作簿中第一个数据缓存的数据源。*/
function test() {
    alert(ActiveWorkbook.PivotCaches().Item(1).SourceData)
}
```


```JavaScript
/*本示例设置第一张工作表中第一张数据透视表的数据缓存的数据源。*/
function test() {
    let pvtCache = Worksheets.Item(1).PivotTables(1).PivotCache()
    pvtCache.SourceData = "=Sheet1!R1C1:R9C3"
}
```
