# Worksheet.Copy

将工作表复制到工作簿的另一位置。



## 语法

express.**Copy(Before, After)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 可选 | any | 将要在其之前放置所复制工作表的工作表。如果指定了 After，则不能指定 Before。 |
| After | 可选 | any | 将要在其之后放置所复制工作表的工作表。如果指定了 Before，则不能指定 After。 |

## 返回值

void

## 说明


如果既不指定 *Before* 也不指定 *After*，则 ET 将新建一个工作簿，其中包含复制的工作表。



## 示例


```JavaScript
/*此示例复制工作表 Sheet1，并将其放置在工作表 Sheet3 之后。*/
function test() {
    Application.Worksheets.Item("Sheet1").Copy(null, Application.Worksheets.Item("Sheet3"))
}
```


```JavaScript
/*本示例复制活动工作表，将其放置在活动工作表之前，并通知用户工作表总数。*/
function test() {
    ActiveSheet.Copy(ActiveSheet)
    alert(Worksheets.Count)
}
```
