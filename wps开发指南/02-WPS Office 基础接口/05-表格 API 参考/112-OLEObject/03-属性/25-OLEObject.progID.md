# OLEObject.progID

返回对象的程序标识符。 **String** 型，只读。



## 语法

express.**progID**

express   一个代表 **OLEObject** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例为第一张工作表中所有 OLE 对象创建程序标识符列表。*/
function test() {
    let objects = Application.Worksheets.Item(1).OLEObjects()
    let worksheet = Worksheets.Item(2)
    for (let i = 1; i <= objects.Count; i++) {
        worksheet.Cells.Item(i, 1).Value2 = objects.Item(i).progID
    }
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象的程序标识符。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).progID)
}
```
