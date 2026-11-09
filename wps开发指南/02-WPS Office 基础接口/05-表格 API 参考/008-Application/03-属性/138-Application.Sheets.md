# Application.Sheets

返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表活动工作簿中所有的工作表。 **Sheets** 对象，只读。



## 语法

express.**Sheets**

express   一个代表 **Application** 对象的变量。

## 类型

Sheets

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `ActiveWorkbook.Sheets`。



## 示例


```JavaScript
/*此示例新建一张工作表，然后在第一列中列出活动工作簿中的工作表名称。*/
function test() {
    let newSheet = Application.Sheets.Add(undefined, undefined, undefined, xlWorksheet)
    for (let i = 1; i <= Application.Sheets.Count; i++) {
        newSheet.Cells(i, 1).Value(undefined, Application.Sheets(i).Name)
    }
}
```


```JavaScript
/*此示例演示复制所有工作表在 Sheet1 之前*/
function test() {
    Application.Sheets.Copy(Application.Sheets.Item('Sheet1'))
}
```
