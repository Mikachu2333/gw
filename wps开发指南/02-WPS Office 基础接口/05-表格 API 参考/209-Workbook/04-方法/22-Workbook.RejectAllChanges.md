# Workbook.RejectAllChanges

取消指定共享工作簿中的所有更改。



## 语法

express.**RejectAllChanges(When, Who, Where)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| When | 可选 | any | 指定何时拒绝所有更改。 |
| Who | 可选 | any | 指定由何人拒绝所有更改。 |
| Where | 可选 | any | 指定在何处拒绝所有更改。 |

## 返回值

void

## 示例


```JavaScript
/*本示例取消活动工作簿中的所有更改。*/
function test() {
    ActiveWorkbook.RejectAllChanges()
}
```


```JavaScript
/*本示例演示指定由user1取消活动工作簿中的所有更改。*/
function test() {
    ActiveWorkbook.RejectAllChanges(null, "user1")
}
```
