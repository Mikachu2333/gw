# CommandBarComboBox.RemoveItem

从 **CommandBarComboBox** 控件中删除一项。



## 语法

express.**RemoveItem(Index)**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要从列表删除的项。 |

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

本属性只能用于列表框控件。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，在该控件中添加四个列表项，然后判断如果列表项的数量大于3，则删除第二项，更改控件的样式并设置 Text 属性值。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Controls.Add(msoControlComboBox, 1)
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Item(1)
    cbComboBox.AddItem("Get Stock Quote", 1)
    cbComboBox.AddItem("View Chart", 2)
    cbComboBox.AddItem("View Fundamentals", 3)
    cbComboBox.AddItem("View News", 4)
    cbComboBox.Caption = "Stock Data"
    cbComboBox.DescriptionText = "View Data For Stock"
    if (cbComboBox.ListCount > 3) {
        cbComboBox.RemoveItem(2)
        cbComboBox.Style = msoComboNormal
        cbComboBox.Text = "New Default"
        let commandBar1 = cbComboBox.Parent
    }
}
```


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项，最后删除该控件中的最后一项。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    cbComboBox.RemoveItem(cbComboBox.ListCount)
}
```
