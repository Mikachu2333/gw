# Columns 对象

代表表格中的列的 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/obj)** 对象的集合。

## 说明


使用 **Columns** 属性可返回 **Columns** 集合。


## 示例


```JavaScript
/*本示例显示活动演示文稿的每一张幻灯片的每一个表格的列数。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            if (shapes.Item(j).HasTable) {
                let colCount = shapes.Item(j).Table.Columns.Count
                alert(`Shape ${i} on slide ${j} contains the first table and has ${colCount} columns.`)
            }
        }
    }
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/member/Add) 方法可向表格中添加一列。



```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第一个表格的第一列前添加一列，然后将新列的宽度设置为 72 磅（1 英寸）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let column = shape.Table.Columns.Add(1)
    column.Width = 72
}
```
使用 **Columns** (_index_) 返回一个 **Column** 对象。_Index_ 代表 **Columns** 集合中列的位置（通常从左向右计算；但 [ **TableDirection** ](#TODO) 属性可变换计算方向）。



```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片的第一个表格的第一列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let columns = shape.Table.Columns
    columns.Item(1).Select()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/member/Add) | 向现有表格中添加一个新列。返回一个代表新表格列的 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/member/Item) | 从指定的 **Columns** 集合中返回单个 **Column** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/member/Count) | 返回指定集合中的对象数。只读。 |