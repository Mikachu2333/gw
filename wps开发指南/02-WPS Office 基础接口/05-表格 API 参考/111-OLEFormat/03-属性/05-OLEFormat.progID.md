# OLEFormat.progID

返回对象的程序标识符。 **String** 型，只读。



## 语法

express.**progID**

express   一个代表 **OLEFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例为第一张工作表中所有 OLE 对象创建程序标识符列表。*/
function test() {
    for (let i = 1; i <= Worksheets.Item(1).Shapes.Count; i++) {
        Worksheets.Item(2).Cells.Item(i, 1).Value2 = Worksheets.Item(1).Shapes.Item(i).OLEFormat.Object.progID
    }
}
```


```JavaScript
/*此示例显示活动工作表中第一个 OLE 对象的程序标识符。*/
function test() {
    alert(ActiveSheet.Shapes.Item(1).OLEFormat.Object.progID)
}
```
