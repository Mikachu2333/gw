# TableStyle.ShowAsAvailableSlicerStyle

返回或设置指定的表样式是否作为可用的表样式在切片器样式库中显示。可读/写



## 语法

express.**ShowAsAvailableSlicerStyle**

express   一个代表 **TableStyle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动工作簿上指定的表样式设置为可用的表样式在切片器样式库中显示。*/
function test() {
    let tableStyles = ActiveWorkbook.TableStyles
    tableStyles.Item(286).ShowAsAvailableSlicerStyle = true
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表的表样式是否作为可用的表样式在切片器样式库中显示。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.TableStyle.ShowAsAvailableSlicerStyle)
}
```
