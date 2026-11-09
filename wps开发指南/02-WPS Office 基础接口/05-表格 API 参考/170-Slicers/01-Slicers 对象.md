# Slicers 对象

 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的集合。

## 说明


每个 **Slicer** 对象都代表工作簿中的一个切片器。切片器的作用是筛选数据。

使用 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Slicers)** 属性可返回 **Slicers** 集合。


## 示例


```JavaScript
/*本示例显示活动工作簿中第一个切片器缓存中的切片器数量。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(1).Slicers.Count)
}
```
使用 **Slicers** (_index_)（其中 _index_ 是切片器的索引号或名称）可返回切片器集合中的单个 **Slicer** 对象。



```JavaScript
/*本示例将第一个切片器缓存中第一个切片器的标题更改为“My Slicer”。*/
function test() {
    ActiveWorkbook.SlicerCaches(1).Slicers.Item(1).Caption = "My Slicer"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/member/Add) | 创建新的切片器，并返回 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/member/Item) | 从集合中返回一个 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/member/Count) | 返回集合中对象的数量。 |