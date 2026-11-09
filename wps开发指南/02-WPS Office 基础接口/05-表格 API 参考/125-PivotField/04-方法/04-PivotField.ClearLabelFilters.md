# PivotField.ClearLabelFilters

此方法将删除透视字段的 **PivotFilters** 集合中的所有标签筛选或所有日期筛选。



## 语法

express.**ClearLabelFilters()**

express   一个代表 **PivotField** 对象的变量。

## 返回值

void

## 说明


下表列出了此方法将删除的各种标签筛选类型。  

| **xlCaptionEquals**                 |
| ----------------------------------- |
| **xlCaptionDoesNotEqual**           |
| **xlCaptionIsGreaterThan**          |
| **xlCaptionIsGreaterThanOrEqualTo** |
| **xlCaptionIsLessThan**             |
| **xlCaptionIsLessThanOrEqualTo**    |
| **xlCaptionBeginsWith**             |
| **xlCaptionDoesNotBeginWith**       |
| **xlCaptionEndsWith**               |
| **xlCaptionDoesNotEndWith**         |
| **xlCaptionContains**               |
| **xlCaptionDoesNotContain**         |
| **xlCaptionIsBetween**              |
| **xlCaptionIsNotBetween**           |

下表列出了此方法将删除的各种日期筛选类型。

| **xlSpecificDate**              |
| ------------------------------- |
| **xlNotSpecificDate**           |
| **xlBefore**                    |
| **xlBeforeOrEqualTo**           |
| **xlAfter**                     |
| **xlAfterOrEqualTo**            |
| **xlDateBetween**               |
| **xlDateNotBetween**            |
| **xlDateToday**                 |
| **xlDateYesterday**             |
| **xlDateTomorrow**              |
| **xlDateThisWeek**              |
| **xlDateLastWeek**              |
| **xlDateNextWeek**              |
| **xlDateThisMonth**             |
| **xlDateLastMonth**             |
| **xlDateNextMonth**             |
| **xlDateThisQuarter**           |
| **xlDateLastQuarter**           |
| **xlDateNextQuarter**           |
| **xlDateThisYear**              |
| **xlDateLastYear**              |
| **xlDateNextYear**              |
| **xlYearToDate**                |
| **xlAllDatesInPeriodQuarter1**  |
| **xlAllDatesInPeriodQuarter2**  |
| **xlAllDatesInPeriodQuarter3**  |
| **xlAllDatesInPeriodQuarter4**  |
| **xlAllDatesInPeriodJanuary**   |
| **xlAllDatesInPeriodFebruary**  |
| **xlAllDatesInPeriodMarch**     |
| **xlAllDatesInPeriodApril**     |
| **xlAllDatesInPeriodMay**       |
| **xlAllDatesInPeriodJune**      |
| **xlAllDatesInPeriodJuly**      |
| **xlAllDatesInPeriodAugust**    |
| **xlAllDatesInPeriodSeptember** |
| **xlAllDatesInPeriodOctober**   |
| **xlAllDatesInPeriodNovember**  |
| **xlAllDatesInPeriodDecember**  |



## 示例


```JavaScript
/*本示例删除活动工作表中第一张数据透视表的字段“id”的所有日期筛选器。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("id").ClearAllFilters()
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中数据透视表应用于字段“grades”的所有标签筛选器。*/
function test() {
    let pvtfield = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("grades")
    pvtfield.ClearLabelFilters()
}
```
