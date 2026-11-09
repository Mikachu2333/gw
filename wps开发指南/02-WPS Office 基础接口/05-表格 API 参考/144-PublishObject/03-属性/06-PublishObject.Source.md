# PublishObject.Source

返回一个代表唯一名称的 **Variant** 值，该名称用于标识其 **[SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/SourceType)** 属性值为 **xlSourceRange** 、 **xlSourceChart** 、 **xlSourcePrintArea** 、 **xlSourceAutoFilter** 、 **xlSourcePivotTable** 或 **xlSourceQuery** 的项。



## 语法

express.**Source**

express   一个代表 **PublishObject** 对象的变量。

## 类型

string

## 说明


如果 **SourceType** 属性设置为 **xlSourceRange** ，则此属性返回一个区域，该区域可以是一个定义名称。如果 **SourceType** 属性设置为 **xlSourceChart** 、 **xlSourcePivotTable** 或 **xlSourceQuery** ，则此属性返回对象的名称，例如：图表名称、数据透视表名称或查询表名称。



## 示例


```JavaScript
/*此示例确定保存为网页的第一张图表（在第一个工作簿中）的唯一名称，然后将Boolean型的变量blnChartFound设置为True。如果文档中没有保存为图表组件的项，则blnChartFound为False。本示例假定已经创建PublishObject对象*/
function test() {
    let blnSheetFound = false
    let poSource = null
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        if (objPublish.SourceType == xlSourceChart) {
            poSource = objPublish.Soursce
            blnSheetFound = true
        }
    }
}
```


```JavaScript
/*本示例在第一张工作簿上新建 PublishObject 对象，并将第一张工作簿上所有 PublishObject 对象的 Source 属性值赋值给单元格，然后将所有 PublishObject 对象保存到网页。*/
function test() {
    Workbooks.Item(1).PublishObjects.Add(xlSourceQuery, "D:\\示例1\\example.html", "Sheet1", "ExternalData_1", xlHtmlChart, "example_test")
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        ActiveSheet.Cells(i, 10).Value2 = objPublish.Source
        objPublish.Publish()
    }
}
```
