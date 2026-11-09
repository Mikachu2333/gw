# TabStop2 对象

代表单个制表位。 **TabStop2** 对象是 **[TabStops2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/obj)** 集合的一个成员。

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
/*本示例运行于表格组件，判断如果活动工作表上第一个形状（文本框）中第一个制表位的类型为msoTabStopCenter，则设置该制表位相对于左边距的位置。*/
function test() {
    let tabStops2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler.TabStops
    if (tabStops2.Item(1).Type == msoTabStopCenter) {
        tabStops2.Item(1).Position = 220
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStop2/member/Clear) | 删除指定的自定义制表位。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStop2/member/Position) | 获取或设置制表位相对于左边距的位置。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStop2/member/Type) | 获取或设置 **TabStop2** 对象的类型。可读/写。 |