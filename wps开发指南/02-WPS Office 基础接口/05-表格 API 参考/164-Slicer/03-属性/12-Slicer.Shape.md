# Slicer.Shape

返回与指定的切片器关联的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。只读。



## 语法

express.**Shape**

express   一个代表 **Slicer** 对象的变量。

## 类型

Shape

## 说明


切片器的某些属性（如 **[AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/AlternativeText)** 属性）只能从与该切片器关联的 **Shape** 对象访问。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第四个切片器的 Shape 属性关联的可选文字的说明。*/
function test() {
    let slicer = ActiveSheet.PivotTables(1).Slicers.Item(4)
    alert(slicer.Shape.AlternativeText)
}
```


```JavaScript
/*本示例设置活动工作簿上名为“切片器_date”的切片器缓存中第一个切片器的 Shape 属性的标题。*/
function test() {
    let slicer = ActiveWorkbook.SlicerCaches("切片器_date").Slicers.Item(1)
    slicer.Shape.Title = "slicer_date"
}
```
