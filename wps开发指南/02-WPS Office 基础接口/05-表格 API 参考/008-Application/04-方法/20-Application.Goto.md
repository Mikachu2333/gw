# Application.Goto

选定任意工作簿中的任意区域，并且如果该工作簿未处于活动状态，就激活该工作簿。



## 语法

express.**Goto(Reference, Scroll)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Reference | 可选 | any | 目标。可以是 Range 对象、包含 R1C1-样式批注的单元格引用的字符串。如果省略该参数，目标将为最近一次用 Goto 方法选定的区域。 |
| Scroll | 可选 | any | 如果为 True，则滚动窗口直至区域的左上角出现在窗口的左上角中。如果为 False，则不滚动窗口。默认值为 False。 |

## 返回值

void

## 说明


该方法与 Select 方法的区别：

1. 如果指定的区域不在位于最前面屏幕的工作表中，ET 将在选定该区域之前切换至该工作表。（如果对不在屏幕的最前面的工作表中的区域使用 Select 方法，则选定该区域时并不激活该工作表）
2. 该方法具有让用户滚动目标窗口的 Scroll 参数
3. 当使用 Goto 方法时，前一次选定区域（Goto 方法运行前）被增加到以前选定区域的数组中（有关详细信息，请参阅 PreviousSelections 属性）。可以使用该功能快速跳过选定区域，选定区域最多为四个
4. Select 方法具有 Replace 参数，而 Goto 方法没有该参数



## 示例


```JavaScript
/*本示例选定工作表 Sheet1 中的单元格 A154，并滚动工作表以显示该区域。*/
function test() {
    let rg = Application.ActiveWorkbook.Worksheets.Item("Sheet1").Range("A154");
    Application.Goto(rg, true)
}
```


```JavaScript
/*本示例选定工作表 Sheet1 中的单元格 C15,且不滚动工作表。*/
function test() {
    let rg = Application.Worksheets.Item("Sheet1").Range("C15");
    Application.Goto(rg, false)
}
```
