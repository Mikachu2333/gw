# ListObject.ShowTableStyleRowStripes

返回或设置指定的 **ListObject** 对象是否使用“行条纹”表样式。可读/写 **Boolean** 类型。



## 语法

express.**ShowTableStyleRowStripes**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表上包含 C2 单元格的列表是否使用“行条纹”表样式。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C2").ListObject
    alert(listObj.ShowTableStyleRowStripes)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一张列表设置为不使用“行条纹”表样式。*/
function test() {
    let listObj = Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.ShowTableStyleRowStripes = false
}
```
