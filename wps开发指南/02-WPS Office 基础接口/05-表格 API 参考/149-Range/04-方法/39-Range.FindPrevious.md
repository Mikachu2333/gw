# Range.FindPrevious

继续由 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Find)** 方法开始的搜索。查找匹配相同条件的上一个单元格，并返回代表该单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。该操作不影响选定内容和活动单元格。



## 语法

express.**FindPrevious(After)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| After | 可选 | any | 指定一个单元格，查找将从该单元格之前开始。此单元格对应于从用户界面搜索时的活动单元格的位置。请注意：After 必须是区域中的单个单元格。注意，搜索是从该单元格之前开始的；直到本方法环绕到此单元格时，才检测其内容。如果未指定本参数，查找将从区域的左上角单元格之前开始。 |

## 返回值

Range。

## 说明


当查找到指定查找区域的起始位置时，本方法将环绕至区域的末尾继续搜索。发生绕回后，要停止搜索，可保存第一个找到的单元格地址，然后测试后面找到的每个单元格地址是否与其相同。



## 示例


```JavaScript
/*本示例演示 FindPrevious 方法如何与 Find 方法和 FindNext 方法一起使用。运行本示例之前，请确保工作表 Sheet1 的 B 列中至少出现过两次“Phoenix”单词。*/
function test() {
    let fc = Application.Worksheets.Item("Sheet1").Columns.Item("B").Find("Phoenix")
    MsgBox("The first occurrence is in cell " + fc.Address())
    let Mc = Application.Worksheets.Item("Sheet1").Columns.Item("B").FindNext(fc)
    MsgBox("The next occurrence is in cell " + Mc.Address())
    let gc = Application.Worksheets.Item("Sheet1").Columns.Item("B").FindPrevious(fc)
    MsgBox("The previous occurrence is in cell " + gc.Address())
}
```


```JavaScript
/*本示例查找 B 列最后一个含有 2 的单元格，将其值设置为 100*/
function test() {
    let c = Range("B:B").Find(2)
    c = Range("B:B").FindPrevious(c)
    c.Value2 = 100
}
```
