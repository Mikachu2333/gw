# ShapeNodes 对象

指定的任意多边形中所有 **[ShapeNode](#TODO)** 对象的集合。

## 说明


每一个 **ShapeNode** 对象都代表任意多边形中线段间的结点或任意多边形曲线段的控点。您可以手动创建或通过使用 **[BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/BuildFreeform)** 和 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/ConvertToShape)** 方法来创建任意多边形。

使用 **[Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Nodes)** 属性可返回 **[ShapeNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/obj)** 集合。


## 示例


```JavaScript
/*本示例删除第一张工作表上形状三中的结点四。*/
function test() {
    let shapes = Worksheets.Item(1).Shapes
    shapes.Item(3).Nodes.Delete(4)
}
```
使用 **[Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/Insert)** 方法可创建一个新结点并将它添加到 **ShapeNodes** 集合。



```JavaScript
/*本示例在第一张工作表上的形状三中的结点四之后添加一带有曲线段的平滑结点。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(3).Nodes
    nodes.Insert(4, msoSegmentCurve, msoEditingSmooth, 210, 100)
}
```
使用 **Nodes** (index)（其中index是结点索引号）可返回一个 **ShapeNode** 对象。



```JavaScript
/*本示例将第一张工作表上形状三中的结点一设置为平滑顶点。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(3)
    shape.Nodes.SetEditingType(1, msoEditingSmooth)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/Delete) | 删除对象。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/Insert) | 在任意多边形形状中插入节点。 |
| [SetEditingType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/SetEditingType) | 设置由 _Index_ 指定的结点的编辑类型。如果该结点是一个曲线的控制点，本方法将对其设置相邻结点的编辑属性，该属性连接两个段。请注意，由于编辑类型的不同，本方法可能影响相邻结点的位置。 |
| [SetPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/SetPosition) | 设置由 _Index_ 指定的顶点位置。注意：由于顶点的编辑类型不同，此方法可能影响相邻顶点的位置。 |
| [SetSegmentType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/SetSegmentType) | 设置 _Index_ 指定的结点后面的段的段类型。如果该结点为一条曲线段的控制点，则该方法设置该曲线的段类型。请注意，该方法可能由于插入或删除相邻的结点而影响结点总数。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/member/Count) | 返回一个 **Integer** 值，它代表集合中对象的数量。 |