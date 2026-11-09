# CommandBarComboBox.List

获取或设置 **CommandBarComboBox** 控件中的某一项。可读/写。



## 语法

**注意：** 为 **List** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
List(Index: number, pbstrItem: string): void;
List(Index: number): string;
```

express.**List(Index)**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要设置的列表项。 |

## 返回值

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

对于内置的组合框控件，该属性为只读。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，在该控件中添加四个列表项，然后判断如果第四个项目不是“View News”，则显示一条消息，告知用户组合框可能已损坏，并要求用户重新安装应用程序。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("Get Stock Quote", 1)
    cbComboBox.AddItem("View Chart", 2)
    cbComboBox.AddItem("View Fundamentals", 3)
    cbComboBox.AddItem("View News", 4)
    cbComboBox.Caption = "Stock Data"
    cbComboBox.DescriptionText = "View Data For Stock"
    if (cbComboBox.List(4) != "View News") {
        alert("Stock Data appears to be damaged. Please reinstall application.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件中所有项。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    let str = ""
    for (let i = 1; i <= cbComboBox.ListCount; i++) {
        str += cbComboBox.List(i) + "\n"
    }
    alert(str)
}
```
