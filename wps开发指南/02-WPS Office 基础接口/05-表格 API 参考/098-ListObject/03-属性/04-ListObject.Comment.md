# ListObject.Comment

返回或设置与列表对象关联的批注。可读/写 **String** 类型。



## 语法

express.**Comment**

express   一个代表 **ListObject** 对象的变量。

## 类型

string

## 说明


批注文本不能超过 255 个字符。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张表格的批注。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.Comment)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上包含单元格 A2 的表格的批注，并显示该批注。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").Range("A2").ListObject
    listObj.Comment = "示例数据"
    alert(listObj.Comment)
}
```
