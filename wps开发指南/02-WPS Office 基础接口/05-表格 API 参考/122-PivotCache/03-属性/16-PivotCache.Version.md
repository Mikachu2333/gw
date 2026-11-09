# PivotCache.Version

返回在其中创建数据透视表缓存的 ET 版本。只读。



## 语法

express.**Version**

express   一个代表 **PivotCache** 对象的变量。

## 类型

XlPivotTableVersionList

## 说明


此属性返回数据透视表的版本。默认设置和行为方式取决于，当数据透视表的版本与编写代码所针对的 ET 版本对应时，返回的版本是否允许旧数据透视表对象模型代码以相同的行为方式在 ET 中运行。



## 示例


```JavaScript
/*本示例显示第一张工作表中第一张数据透视表缓存的版本是否为 xlPivotTableVersion15。*/
function test() {
    alert(Worksheets.Item(1).PivotTables(1).PivotCache().Version == xlPivotTableVersion15)
}
```


```JavaScript
/*本示例显示第一张工作簿的第一个数据缓存的版本是否为 xlPivotTableVersion14。*/
function test() {
    alert(Workbooks.Item(1).PivotCaches(1).Version == xlPivotTableVersion14)
}
```
