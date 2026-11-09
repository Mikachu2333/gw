# ColorScaleCriteria.Count

返回一个 **Long** 值，该值指定色阶条件格式规则的条件的数目。只读。



## 语法

express.**Count**

express   一个代表 **ColorScaleCriteria** 对象的变量。

## 类型

number（int4 精度）

## 说明


条件的数目等于为色阶分配的阈值的数目。此值要么为 2，要么为 3，具体情况取决于您为条件格式规则使用双色色阶还是使用三色色阶。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的阈值条件的数量。*/
function test() {
    let criteria = ActiveSheet.Range("A1:A10").FormatConditions.Item(1).ColorScaleCriteria
    alert(criteria.Count)
}
```
