# SortFields.Item

返回一个 **SortField** 对象，该对象代表可在工作簿中排序的项的集合。只读。



## 语法

express.**Item(Index)**

express   一个代表 **SortFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 排序字段的索引值。 |

## 返回值

SortField

## 示例


```JavaScript
/*本示例判断如果活动工作表SortField对象数量大于1，则删除第二个SortField对象。*/
function test() {
    let sortfields = Application.ActiveSheet.Sort.SortFields
    if (sortfields.Count > 1) {
        sortfields.Item(2).Delete()
    }
}
```


```JavaScript
/*本示例在活动工作表新建排序字段，并显示第一个SortField对象的键值地址。*/
function test() {
    let sortfields = Application.ActiveSheet.Sort.SortFields
    sortfields.Add(Range("A1:A4"), xlSortOnValues)
    alert(sortfields.Item(1).Key.Address())
}
```
