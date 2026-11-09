# Application.PreviousSelections

返回最后选择的四个区域或名称的数组。数组中的每个元素就是一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 **Variant** 类型，只读。



## 语法

express.**PreviousSelections(Index)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 前一区域或者名称的索引号（从 1 到 4）。 |

## 返回值

any

## 说明


每次使用 **“名称”** 框或 **“定位”** 命令（ **“编辑”** 菜单）转到一个区域或单元格，或每次宏调用 **[Goto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Goto)** 方法时，前一区域都会作为第 1 个元素添加该数组中，而数组中的其他项则相应下移。



## 示例


```JavaScript
/*本示例显示前一次选定的数组中所有项的单元格地址。如果前一次没有选定任何内容，则会捕捉错误，并通知用户。*/
function test() {
    try {
        for (let i = 0; i < Application.PreviousSelections().length; i++) {
            alert(Application.PreviousSelections()[i].Address())
        }
    } catch (error) {
        alert("There are no previous selections")
    }
}
```


```JavaScript
/*本示例选定工作表 Sheet1 中的单元格 D1，并滚动工作表以显示该区域。然后将前一次选定的数组中所有项的单元格的值赋值到A列。*/
function test() {
    Application.Goto(Worksheets.Item("Sheet1").Range("D1"), true)
    for (let i = 0; i < Application.PreviousSelections().length; i++) {
        Worksheets.Item("Sheet1").Cells.Item(i + 1, 1).Value2 = Application.PreviousSelections()[i].Value2
    }
}
```
