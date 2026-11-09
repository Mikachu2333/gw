# Filters.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Filters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

Filter

## 示例


```JavaScript
/*下例将一个变量设置为第一张工作表上的筛选区域中第一列的筛选的 On 属性的值。*/
function test() {
    let worksheet = Worksheets.Item(1)
    if (worksheet.AutoFilterMode) {
        let filterIsOn = worksheet.AutoFilter.Filters.Item(1).On
    }
}
```


```JavaScript
/*本示例显示活动工作表上筛选区域中第一列的筛选的 Criteria1 属性值。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Item(1).Criteria1)
}
```
