# AllowEditRange.Range

返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)代表，它代表在受保护工作表上可编辑的区域的子集。



## 语法

express.**Range**

express   一个代表 **AllowEditRange** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示第一张工作表上第一个 AllowEditRange 对象的单元格数量。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowEditRanges.Item(1).Range.Count)
}
```


```JavaScript
/*本示例选中活动工作表上第二个 AllowEditRange 对象的单元格。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Item(2).Range.Select()
}
```
