# Worksheet.ListObjects

返回工作表中 **[ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/obj)** 对象的集合。 **ListObjects** 集合，只读。



## 语法

express.**ListObjects**

express   一个代表 **Worksheet** 对象的变量。

## 类型

ListObjects

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上所有表格的名称。*/
function test() {
    let listObjects = Worksheets.Item("Sheet1").ListObjects
    for (let i = 1; i <= listObjects.Count; i++) {
        alert(`第${i}个表格的名称：${listObjects.Item(i).Name}`)
    }
}
```


```JavaScript
/*本示例为活动工作表上第一张列表添加数据行和数据列。*/
function test() {
    let listObject = Application.ActiveSheet.ListObjects.Item(1)
    listObject.ListRows.Add()
    listObject.ListColumns.Add()
}
```
