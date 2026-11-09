# Range.ListNames

从指定区域的第一个单元格位置开始，将所有未隐藏的名称的列表粘贴到工作表上。



## 语法

express.**ListNames()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 说明


可以使用 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Names)** 属性返回工作表中所有名称的集合。



## 示例


```JavaScript
/*本示例从 Sheet1 中单元格 A1 的位置开始，粘贴已定义名称的列表。本示例将粘贴 Sheet1 上定义的工作簿级名称和工作表级名称。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").ListNames()
}
```


```JavaScript
/*本示例将 B2 单元格名称设置为 testB，C1:C3 单元格名称设置为 testC，将工作表中所有未隐藏的名称以及相对应的地址显示到从 E1 单元格开始的区域*/
function test() {
    Range("B2").Name = "testB"
    Range("C1:C3").Name = "testC"
    Range("E1").ListNames()
}
```
