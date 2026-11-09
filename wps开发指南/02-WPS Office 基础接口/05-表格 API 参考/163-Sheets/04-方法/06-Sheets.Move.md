# Sheets.Move

将工作表移到工作簿中的其他位置。



## 语法

express.**Move(Before, After)**

express   一个代表 **Sheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 可选 | any | 在其之前放置移动工作表的工作表。如果指定了 After，则不能指定 Before。 |
| After | 可选 | any | 在其之后放置移动工作表的工作表。如果指定了 Before，则不能指定 After。 |

## 返回值

void

## 说明


如果既不指定 *Before* 也不指定 *After*，ET 将新建一个工作簿，其中包含所移动的工作表。



## 示例


```JavaScript
/*此示例将当前活动工作簿的Sheet1和Sheet2移到 Sheet3 之后。*/
function test() {
    let names = ["Sheet1", "Sheet2"]
    Application.Worksheets.Item(names).Move(null, Application.Worksheets.Item("Sheet3"))
}
```


```JavaScript
/*此示例将活动工作簿中索引为1和3的工作表移到 Sheet2 之前。*/
function test() {
    let names = [1, 3]
    Application.ActiveWorkbook.Sheets.Item(names).Move(Application.Worksheets.Item("Sheet2"))
}
```
