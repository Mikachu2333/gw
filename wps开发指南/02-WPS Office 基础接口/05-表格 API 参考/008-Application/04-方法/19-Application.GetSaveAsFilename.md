# Application.GetSaveAsFilename

显示标准的“另存为”对话框，获取用户文件名，而无须真正保存任何文件。



## 语法

express.**GetSaveAsFilename(InitialFilename, FileFilter, FilterIndex, Title, ButtonText)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| InitialFilename | 可选 | any | 指定建议的文件名。如果省略该参数，ET 使用活动工作簿的名称。 |
| FileFilter | 可选 | any | 一个指定文件筛选条件的字符串。最大长度为 255 个字符，否则该方法返回错误。 |
| FilterIndex | 可选 | any | 指定默认文件筛选条件的索引号，范围为 1 到 _FileFilter_ 指定的筛选条件数。如果省略该参数，或者该参数的值大于可用筛选条件数，则使用第一个文件筛选条件。 |
| Title | 可选 | any | 指定对话框的标题。如果省略该参数，则使用默认标题。 |
| ButtonText | 可选 | any | 仅限 Macintosh。 |

## 返回值

Variant

## 说明


在 _FileFilter_ 参数中传递的该字符串由文件筛选字符串对以及后跟的 MS-DOS 通配符文件筛选规范组成，中间以逗号分隔。每个字符串都在 **“文件类型”** 下拉列表框中列出。例如，下列字符串指定两个文件筛选 - 文本和加载宏：“文本文件 (\*.txt)、\*.txt、加载宏文件 (\*.xla)、\*.xla”。

要为单个文件筛选类型使用多个 MS-DOS 通配符表达式，需用分号将通配符表达式分开。例如：“ET 文件 (\*.xlsx; \*.txt)、\*.xlsx; \*.txt”。

本方法返回选定的文件名或用户输入的名称。返回的名称可能包含路径说明。如果用户取消了对话框，则该值为 **False** 。

本方法可能更改当前驱动器或文件夹。

将 InitialFilename 与扩展名一起使用并应用过滤器时，此扩展名必须与过滤器扩展名匹配，否则，对话框中显示的有效 InitialFilename 将为空字符串。



## 示例


```JavaScript
/*本示例显示文本文件的“另存为”对话框。在用户选择文件名后，此示例便会在消息框中显示相应文件名。*/
function test() {
    let fileSaveName = Application.GetSaveAsFilename("example", "Text Files (*.txt), *.txt")
    if (fileSaveName) {
        alert(`Save as ${fileSaveName}`)
    }
}
```


```JavaScript
/*本示例显示标准的“另存为”对话框，然后将文件筛选设置为xlsx文件，并设置保存的文件名。*/
function test() {
    Application.GetSaveAsFilename("example.xlsx", "ET Files (*.xlsx), *.xlsx", 1)
}
```
