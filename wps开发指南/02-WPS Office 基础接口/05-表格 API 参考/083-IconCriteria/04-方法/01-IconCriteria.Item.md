# IconCriteria.Item

从 **IconCriteria** 集合中返回单个 **[IconCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **IconCriteria** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | **IconCriterion** 对象的索引号。 |

## 返回值

IconCriterion

## 说明


_Index_ 参数的值不能大于为图标集条件格式设置的条件的数目。条件与为图标集分配的阈值等效。若要查找阈值的数目，请使用 **[Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriteria/member/Count)** 属性。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第一个图标集条件格式的第一个IconCriterion的类型是否为xlConditionValuePercent。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Item(1).Type == xlConditionValuePercent)
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第二个图标集条件格式的第二个IconCriterion的图标设置为xlIconYellowExclamation。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    iconSet.IconCriteria.Item(2).Icon = xlIconYellowExclamation
}
```
