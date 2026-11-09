# SortField.DataOption

指定 **SortField** 对象所指定的区域中的文本排序方式。可读/写 [ **XlSortDataOption** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortDataOption)类型。



## 语法

express.**DataOption**

express   一个代表 **SortField** 对象的变量。

## 类型

XlSortDataOption

## 说明


 **[xlSortDataOption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortDataOption)** 可以是 **[xlSortNormal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortDataOption)** 或 **[xlSortTextAsNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortDataOption)** 。



## 示例


```JavaScript
/*本示例设置活动工作表将文本作为数字型数据进行排序。*/
function test() {
    Application.ActiveSheet.Sort.SortFields.Item(1).DataOption = xlSortTextAsNumbers
}
```


```JavaScript
/*本示例判断第一张工作表的文本排序方式。*/
function test() {
    let sort = Application.Sheets.Item(1).Sort.SortFields
    if (sort.Item(1).DataOption == xlSortNormal) {
        alert("分别对数字和文本数据进行排序")
    } else {
        alert("将文本作为数字型数据进行排序")
    }
}
```
