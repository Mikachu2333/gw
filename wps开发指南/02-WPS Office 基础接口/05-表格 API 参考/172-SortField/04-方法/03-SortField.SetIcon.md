# SortField.SetIcon

为 **SortField** 对象设置图标。



## 语法

express.**SetIcon(Icon)**

express   一个代表 **SortField** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Icon | 必选 | Icon | 要设置的图标。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在活动工作表新建排序字段，并设置该字段按图标对数据进行排序。*/
function test() {
    let sortfield = Application.ActiveSheet.Sort.SortFields.Add(Range("C1:C5"), xlSortOnIcon)
    sortfield.SetIcon(ActiveWorkbook.IconSets(xl3Arrows).Item(1))
}
```


```JavaScript
/*本示例判断如果活动工作表排序字段按图标对数据进行排序，则设置图标类型为三标志。*/
function test() {
    let sortfield = Application.ActiveSheet.Sort.SortFields.Add(Range("A2:A5"), xlSortOnIcon)
    if (sortfield.SortON == xlSortOnIcon) {
        sortfield.SetIcon(ActiveWorkbook.IconSets(xl3Signs).Item(2))
    }
}
```
