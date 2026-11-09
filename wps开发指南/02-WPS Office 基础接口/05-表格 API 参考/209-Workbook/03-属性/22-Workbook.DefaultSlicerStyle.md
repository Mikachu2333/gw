# Workbook.DefaultSlicerStyle

从 **[TableStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/obj)** 对象中指定用作切片器默认样式的样式。可读/写。



## 语法

express.**DefaultSlicerStyle**

express   一个代表 **Workbook** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例演示活动工作簿切片器默认样式*/
function test() {
    alert(ActiveWorkbook.DefaultSlicerStyle)
}
```


```JavaScript
/*本示例演示向活动工作簿的 TableStyles 集合中添加 slicer_style1 样式，并指定 slicer_style1 为切片器默认样式*/
function test() {
    ActiveWorkbook.TableStyles.Add("slicer_style1")
    ActiveWorkbook.DefaultSlicerStyle = "slicer_style1"
}
```
