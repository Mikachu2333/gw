# SheetViews 对象

指定的或活动工作簿窗口中所有工作表视图的集合。


## 示例


```JavaScript
/*本示例显示活动窗口的工作表视图数量*/
function test() {
    let count = Application.ActiveWindow.SheetViews.Count
    alert(`活动窗口的工作表视图数量是 ${count}`)
}
```


```JavaScript
/*本示例更改第一个工作表视图所在的工作表名称，并显示出来。*/
function test() {
    let sheetview = ActiveWindow.SheetViews.Item(1)
    sheetview.Sheet.Name = "成绩表"
    alert(sheetview.Sheet.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SheetViews/member/Item) | 返回一个 **SheetView** 对象，该对象代表工作簿的视图。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SheetViews/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SheetViews/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SheetViews/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SheetViews/member/Parent) | 返回指定对象的父对象。只读。 |