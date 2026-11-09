# IconCriterion.Icon

返回或指定图标集条件格式规则中某个条件的图标。可读/写。



## 语法

express.**Icon**

express   一个代表 **IconCriterion** 对象的变量。

## 类型

XlIcon

## 说明


设置图标集条件格式规则中图标条件的 **Icon** 属性后， **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSetCondition/member/IconSet)** 属性更改为 **xlCustomSet** 。



## 示例


```JavaScript
/*本示例创建一个图标集条件格式规则，该规则在指定百分比中显示四个图标。图标集最初设置为使用“四向箭头(彩色)”图标集，但是 Icon 属性用来重写用于第一和第三条件的图标。*/
function test() {
    // 第一个条件的图标是“红十字”图标，第二个条件的图标是“4 个箭头 (彩色)”图标集的第二个箭头，第三个条件的图标是“黄色交通灯”图标，第四个条件的图标是“4 个箭头 (彩色)”图标集的第四个箭头。
    Range("B1:B10").Select()
    Selection.FormatConditions.AddIconSetCondition()
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority()

    let formatCondition = Selection.FormatConditions(1)
    formatCondition.ReverseOrder = false
    formatCondition.ShowIconOnly = false
    formatCondition.IconSet = ActiveWorkbook.IconSets(xl4Arrows)

    let iconCriterion1 = Selection.FormatConditions(1).IconCriteria.Item(1)
    iconCriterion1.Icon = xlIconRedCross

    let iconCriterion2 = Selection.FormatConditions(1).IconCriteria.Item(2)
    iconCriterion2.Type = xlConditionValuePercent
    iconCriterion2.Value = 25
    iconCriterion2.Operator = 7

    let iconCriterion3 = Selection.FormatConditions(1).IconCriteria.Item(3)
    iconCriterion3.Type = xlConditionValuePercent
    iconCriterion3.Value = 50
    iconCriterion3.Operator = 7
    iconCriterion3.Icon = xlIconYellowTrafficLight

    let iconCriterion4 = Selection.FormatConditions(1).IconCriteria.Item(4)
    iconCriterion4.Type = xlConditionValuePercent
    iconCriterion4.Value = 75
    iconCriterion4.Operator = 7
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个图标集条件格式的第二个图标设置为xlIconYellowExclamation。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    iconSet.IconCriteria.Item(2).Icon = xlIconYellowExclamation
}
```
