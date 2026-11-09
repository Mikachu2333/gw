# Rows 对象

代表表格中行的 **[Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/obj)** 对象的集合。

## 说明


使用 [ **Rows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/member/Rows) 属性可返回 **Rows** 集合。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格所有行的高度设置为 160 磅。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    for (let i = 1; i <= table.Rows.Count; i++) {
        table.Rows.Item(i).Height = 160
    }
}
```
使用 [ **Add** ](#TODO) 方法可向表格中添加一行。

使用 **Rows** (_index_) 返回单个 **Row** 对象，其中 _index_ 是一个数字，它代表表格中行所在的位置。



```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格的第一行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let rows = shape.Table.Rows
    rows.Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Rows/member/Item) | 从指定的 **Rows** 集合中返回单个 **Row** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Rows/member/Count) | 返回指定集合中的对象数。只读。 |