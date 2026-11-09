# Slicer.ActiveItem

返回一个 **[SlicerItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/obj)** 对象，该对象代表指定切片器的当前获得焦点的切片器按钮。只读。



## 语法

express.**ActiveItem**

express   一个代表 **Slicer** 对象的变量。

## 类型

SlicerItem

## 说明


当指定的切片器有焦点，并且活动的控件是切片器中的按钮时， **ActiveItem** 属性将返回 **SlicerItem** 对象（例如，在此状态下，用户使用键盘切换切片器中的按钮）。

下面的情况下， **ActiveItem** 属性将返回 **Null** ：

* 指定的切片器没有焦点（未选中或处于非活动状态）。
* 指定的切片器有焦点，并且选中的是整个切片器本身（例如，用户可在此状态下使用键盘四处移动整个切片器）。
* 指定的切片器有焦点，并且活动的控件是切片器标题中的 **“清除筛选”** 按钮。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个切片器缓存中第一个切片器的焦点中的切片器按钮的名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(1).Slicers(1).ActiveItem.Name)
}
```


```JavaScript
/*本示例取消选择第一张工作簿上第一个切片器缓存的切片器“name”的焦点中的切片器项。*/
function test() {
    let slicer = Workbooks.Item(1).SlicerCaches(1).Slicers("name")
    slicer.ActiveItem.Selected = false
}
```
