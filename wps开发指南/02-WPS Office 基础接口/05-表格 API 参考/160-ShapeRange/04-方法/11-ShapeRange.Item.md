# ShapeRange.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象中第二个形状的宽度减小一半。如果变量 shpRange 不代表 ShapeRange 对象，则本示例无效。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2, 3])
    shpRange.Item(2).Width *= 0.5
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象中的第一个形状删除。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 3])
    shpRange.Item(1).Delete()
}
```
