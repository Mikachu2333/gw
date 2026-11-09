# ListObject.TableStyle

获取或设置指定的 **ListObject** 对象的表样式。可读/写 **Variant** 类型。



## 语法

express.**TableStyle**

express   一个代表 **ListObject** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作表上包含 B2 单元格的列表的表样式的名称。*/
function test() {
    let listObj = Application.ActiveSheet.Range("B2").ListObject
    alert(listObj.TableStyle.Name)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一张列表的表样式。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.TableStyle = "TableStylePreset1_Accent1"
}
```
