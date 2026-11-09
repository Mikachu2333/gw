# SortField.ModifyKey

修改字段中按其排序的键值。



## 语法

express.**ModifyKey(Key)**

express   一个代表 **SortField** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | Range | 指定要修改的键。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在第一张工作表创建新的排序字段，并将第一张工作表排序字段的键值地址修改为B2:B5。*/
function test() {
    Application.Sheets.Item(1).Activate()
    let sortfield = ActiveSheet.Sort.SortFields.Add(Range("B1:B10"), xlSortOnValues)
    sortfield.ModifyKey(Range("B2:B5"))
}
```


```JavaScript
/*本示例判断如果活动工作表 SortField 对象的数量大于1，则将活动工作表第二个排序字段的键值地址修改为C1:C10。*/
function test() {
    let sort = Application.ActiveSheet.Sort.SortFields
    if (sort.Count > 1) {
        sort.Item(2).ModifyKey(Range("C1:C10"))
    }
}
```
