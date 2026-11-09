# FileDialogFilters.Add

在 **“文件”** 对话框的 **“文件类型”** 下拉列表框的筛选器列表中添加一个新的文件筛选器。返回一个代表新添的文件筛选器的 **FileDialogFilter** 对象。



## 语法

express.**Add(Description, Extensions, Position)**

express   一个代表 **FileDialogFilters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Description | 必选 | string | 该文本表示要添加到筛选器列表中的文件扩展名的说明。 |
| Extensions | 必选 | string | 该文本代表要添加到筛选器列表中的文件扩展名。可以指定多个扩展名，每个扩展名必须以分号分隔。例如，可以向以下字符串分配参数：“\*.txt; \*.htm”。注意：不需要在扩展名两侧添加括号。在说明和扩展名字符串连接成一个文件筛选器项时，WPS Office 将自动在扩展名字符串两侧添加括号。 |
| Position | 可选 | any | 表示新控件在筛选列表中位置的数字。新筛选将插入到该位置的筛选之前。如果忽略该参数，筛选将添加到指定列表的末端。 |

## 返回值

FileDialogFilter

## 说明


列表中的每个筛选器由两部分组成：文件扩展名（例如 .txt）和文件扩展名的文本说明（例如“文本文件”）。二者相结合，文件筛选器将在 **“文件类型”** 下拉列表框中显示为：文本文件(\*.txt)。

请注意，向列表中添加筛选器时，不会删除默认的筛选器。仅当选中 **“窗口”** 选项时才显示筛选器。如果 *Position* 无效，将显示超出范围运行时错误。如果 *Description* 和 *Extensions* 值无效，将显示运行时错误（分析）。



## 示例


```JavaScript
/*本示例运行于各组件，为“文件选取器”对话框的“文件类型”下拉列表框的筛选器列表中添加一个新的文件筛选器，然后展示“文件夹选取器”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    fileDialog.Filters.Add("Images", "*.gif; *.jpg; *.jpeg", 1)
    fileDialog.Show()
}
```


```JavaScript
/*本示例运行于各组件，为“文件选取器”对话框的“文件类型”下拉列表框的筛选器列表中添加一个新的文件筛选器，然后显示“文件夹选取器”对话框的“文件类型”下拉列表框的筛选器的数量。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    fileDialog.Filters.Add("example", "*.pptx; *.xlsx; *.docx", 1)
    alert(fileDialog.Filters.Count)
}
```
