# Application.DeleteCustomList

删除一个自定义序列。



## 语法

express.**DeleteCustomList(ListNum)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListNum | 必选 | number（int4 精度） | 自定义序列数字。此数字必须大于或等于 5（ET 有四个不可删除的内置自定义序列）。 |

## 返回值

void

## 说明


如果列表数字小于 5 或者没有匹配的自定义序列，则使用本方法将产生错误。



## 示例


```JavaScript
/*本示例删除一个自定义序列。*/
function test() {
    let n = Application.GetCustomListNum(["water", "lemon", "apple"])
    Application.DeleteCustomList(n)
}
```


```JavaScript
/*本示例演示添加一个自定义序列，通知用户后，删除此自定义序列。*/
function test() {
    let customlist = ["water", "lemon", "apple"]
    Application.AddCustomList(customlist)
    alert("添加成功，即将删除此自定义序列！")
    let n = Application.GetCustomListNum(customlist)
    Application.DeleteCustomList(n)
}
```
