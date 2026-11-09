# TabStops2 对象

 **[TabStop2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStop2/obj)** 对象的集合。

## 说明


制表位按照标尺从左向右编制数字索引。


## 示例


```JavaScript
/*本示例运行于表格组件，删除活动工作表上第一个形状（文本框）中第一个自定义制表位。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    tabStops2.Item(1).Clear()
}
```


```JavaScript
/*本示例运行于表格组件，设置第一张工作表上第二个形状（文本框）中最后一个制表位相对于左边距的位置。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler.TabStops
    tabStops2.Item(tabStops2.Count).Position = 200
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/member/Add) | 将新的制表位添加到指定的 **TabStops2** 对象中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/member/Item) | 获取 **TabStops2** 集合中的单个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/member/Count) | 获取一个 **Long** 类型的值，指示 **TabStops2** 集合中的项数。只读。 |
| [DefaultSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/member/DefaultSpacing) | 获取或设置制表位之间的默认间隔。可读/写。 |