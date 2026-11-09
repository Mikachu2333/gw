# IconSet.Item

返回一个代表图标集中的单个图标的 **[Icon](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Icon/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **IconSet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | **Icon** 对象的索引号。 |

## 返回值

Icon

## 说明


_Index_ 参数的值不能大于图标集中图标的数目。要查找图标集中图标的总数，请使用 **[IconSet.Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/member/Count)** 属性。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第一个图标集条件格式的图标集中第一个图标的索引。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(1).IconSet
    alert(iconSet.Item(1).Index)
}
```


```JavaScript
/*本示例显示活动工作表上区域 B1:B10 中第二个图标集条件格式的图标集中第一个图标的实际类型。*/
function test() {
    let iconSet = ActiveSheet.Range("B1:B10").FormatConditions.Item(2).IconSet
    alert(iconSet.Item(1).constructor.name)
}
```
