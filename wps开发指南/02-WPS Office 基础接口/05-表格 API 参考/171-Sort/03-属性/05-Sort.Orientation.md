# Sort.Orientation

指定排序方向。可读/写 **[XlSortOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortOrientation)** 类型。



## 语法

express.**Orientation**

express   一个代表 **Sort** 对象的变量。

## 类型

XlSortOrientation

## 说明


| XlSortOrientation 可以是下列 **XlSortOrientation** 常量之一: |
| --------------------------------------------------- |
| **xlSortColumns**                                   |
| **xlSortRows**                                      |



## 示例


```JavaScript
/*本示例设置第一张工作表执行按列排序。*/
function test() {
    Application.Sheets.Item(1).Sort.Orientation = xlSortColumns
}
```


```JavaScript
/*本示例判断活动工作表执行的排序方向，并通知用户。*/
function test() {
    if (Application.ActiveSheet.Sort.Orientation == xlSortColumns) {
        alert("排序时执行按列排序")
    } else {
        alert("排序时执行按行排序")
    }
}
```
