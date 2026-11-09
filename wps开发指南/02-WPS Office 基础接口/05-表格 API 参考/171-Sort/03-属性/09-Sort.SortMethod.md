# Sort.SortMethod

指定中文排序方法。可读/写 **[XlSortMethod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSortMethod)** 类型。



## 语法

express.**SortMethod**

express   一个代表 **Sort** 对象的变量。

## 类型

XlSortMethod

## 说明


| XlSortMethod 可以是以下 **SortMethod** 常量之一: |
| --------------------------------------- |
| **xlStroke**                            |
| **xlPinYin**                            |



## 示例


```JavaScript
/*本示例设置第一张工作表按字符的汉语拼音顺序排序。*/
function test() {
    Application.Sheets.Item(1).Sort.SortMethod = xlPinYin
}
```


```JavaScript
/*本示例判断活动工作表排序时执行的排序类型，并通知用户。*/
function test() {
    if (Application.ActiveSheet.Sort.SortMethod == xlPinYin) {
        alert("执行按字符的汉语拼音顺序排序")
    } else if (Application.ActiveSheet.Sort.SortMethod == xlStroke) {
        alert("执行按每个字符的笔划数排序")
    }
}
```
