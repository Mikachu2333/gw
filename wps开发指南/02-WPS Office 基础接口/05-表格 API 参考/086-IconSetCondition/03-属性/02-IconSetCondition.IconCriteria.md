# IconSetCondition.IconCriteria

返回一个 **[IconCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriteria/obj)** 集合，该集合代表图标集条件格式规则的一组条件。



## 语法

express.**IconCriteria**

express   一个代表 **IconSetCondition** 对象的变量。

## 类型

IconCriteria

## 说明


在您具有 **IconCriteria** 集合之后，可以使用该集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriteria/member/Item)** 属性返回 **[IconCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/obj)** 对象。 **IconCriterion** 对象代表图标集的单个条件。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第一个图标集条件格式的第一个IconCriterion的类型是否为xlConditionValuePercent。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Item(1).Type == xlConditionValuePercent)
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第二个图标集条件格式的第二个IconCriterion的图标为xlIconYellowExclamation。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    iconSet.IconCriteria.Item(2).Icon = xlIconYellowExclamation
}
```
