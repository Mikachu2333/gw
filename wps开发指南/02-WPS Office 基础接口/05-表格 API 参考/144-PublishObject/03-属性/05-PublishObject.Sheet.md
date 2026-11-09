# PublishObject.Sheet

返回指定的 **[PublishObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/obj)** 对象的工作表名称。只读 **String** 类型。



## 语法

express.**Sheet**

express   一个代表 **PublishObject** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例确定工作表的名称，假定该工作表包含在网页中保存为静态 HTML 的第一个PublishObject对象。然后，示例将Boolean变量blnSheetFound设置为True。如果文档中没有任何项保存为静态 HTML，则blnSheetFound为False。*/
function test() {
    let blnSheetFound = false
    let poSheet = null
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        if (objPublish.HtmlType == xlHtmlStatic) {
            poSheet = objPublish.Sheet
            blnSheetFound = true
        }
    }
}
```


```JavaScript
/*本示例在第一张工作簿上创建新的 PublishObject 对象，然后将第一张工作簿上所有 PublishObject 对象保存到网页并显示其工作表名称。*/
function test() {
    Workbooks.Item(1).PublishObjects.Add(xlSourceRange, "D:\\示例1\\example.html", "Sheet1", "$A$1:$A$10", xlHtmlStatic, "example_test")
    for (let i = 1; i <= Workbooks.Item(1).PublishObjects.Count; i++) {
        let objPublish = Workbooks.Item(1).PublishObjects.Item(i)
        objPublish.Publish()
        alert(objPublish.Sheet)
    }
}
```
