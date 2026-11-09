# Sparkline 对象

表示单个迷你图。

## 说明


使用 **[ModifyLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/ModifyLocation)** 方法可更改单个迷你图的位置，使用 **[ModifySourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/ModifySourceData)** 方法可更改源数据区域。若要一次操作一组迷你图，请使用 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象的成员。


## 示例


```JavaScript
/*本示例修改单元格 I1 中第一个迷你图组的第一个迷你图的位置，并显示修改后迷你图的位置的地址。*/
function test() {
    let sparkline = Range("I1").SparklineGroups(1).Item(1)
    sparkline.ModifyLocation(Range("K1"))
    alert(sparkline.Location.Address())
}
```


```JavaScript
/*本示例修改单元格 I1 中第一个迷你图组的第一个迷你图的源数据，并显示修改后的源数据的区域。*/
function test() {
    let sparkline = Range("I1").SparklineGroups(1).Item(1)
    sparkline.ModifySourceData("Sheet1!A1:C1")
    alert(`修改后的源数据区域：${sparkline.SourceData}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ModifyLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/ModifyLocation) | 修改单个迷你图的位置。 |
| [ModifySourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/ModifySourceData) | 修改单个迷你图的源数据。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/Location) | 返回或设置单个迷你图的位置。可读/写。 |
| [SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/member/SourceData) | 返回或设置包含单个迷你图的源数据的区域。可读/写。 |