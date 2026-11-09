# PublishObject.SourceType

返回 **[XlSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSourceType)** 值，它代表所发布项目的类型。



## 语法

express.**SourceType**

express   一个代表 **PublishObject** 对象的变量。

## 类型

XlSourceType

## 示例


```JavaScript
/*此示例确定保存为网页的第一张图表（在第一个工作簿中）的唯一名称，然后将Boolean型的变量blnChartFound设置为True。如果文档中没有保存为图表组件的项，则blnChartFound为False。本示例假定已经创建PublishObject对象。*/
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
/*本示例在第一张工作簿上新建 PublishObject 对象，并判断如果第一张工作簿上PublishObject对象的类型为xlSourceQuery，则通知用户。*/
function test() {
    Workbooks.Item(1).PublishObjects.Add(xlSourceQuery, "D:\\示例1\\example.html", "Sheet1", "ExternalData_1", xlHtmlChart, "example_test")
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        if (objPublish.SourceType == xlSourceQuery) {
            alert(`第${i}个PublishObject对象的类型为xlSourceQuery`)
        }
    }
}
```
