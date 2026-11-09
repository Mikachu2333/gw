# Application.GetOpenFilename

显示标准的 **“打开文件”** 对话框，并获取用户文件名，而不必真正打开任何文件。



## 语法

express.**GetOpenFilename(FileFilter, FilterIndex, Title, ButtonText, MultiSelect)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileFilter | 可选 | any | 一个指定文件筛选条件的字符串。 |
| FilterIndex | 可选 | any | 指定默认文件筛选条件的索引号，取值范围为 1 到由 _FileFilter_ 所指定的筛选条件数目。如果省略该参数，或者该参数的值大于可用筛选条件数，则使用第一个文件筛选条件。 |
| Title | 可选 | any | 指定对话框的标题。如果省略该参数，则标题为“打开”。 |
| ButtonText | 可选 | any | 仅限 Macintosh。 |
| MultiSelect | 可选 | any | 如果为 **True** ，则允许选择多个文件名。如果为 **False** ，则只允许选择一个文件名。默认值为 **False** 。 |

## 返回值

Variant

## 说明


在 _FileFilter_ 参数中传递的该字符串由文件筛选字符串对以及后跟的 MS-DOS 通配符文件筛选规范组成，中间以逗号分隔。每个字符串都在 **“文件类型”** 下拉列表框中列出。例如，下列字符串指定两个文件筛选 - 文本和加载宏：“文本文件 (\*.txt)、\*.txt、加载宏文件 (\*.xla)、\*.xla”。

要为单个文件筛选类型使用多个 MS-DOS 通配符表达式，需用分号将通配符表达式分开。例如：“ET 文件 (\*.xlsx; \*.txt)、\*.xlsx; \*.txt”。

如果省略 _FileFilter_，则此参数默认为“所有文件 (\*.\*),\*.\*”。

本方法返回选定的文件名或用户输入的名称。返回的名称可能包含路径说明。如果 _MultiSelect_ 为 **True** ，则返回值将是一个包含所有选定文件名的数组（即使仅选定了一个文件名）。如果用户取消了对话框，则该值为 **False** 。

本方法可能更改当前驱动器或文件夹。



## 示例


```JavaScript
/*此示例显示“打开文件”对话框，并将文件筛选设置为文本文件。如果用户选择了文件名，则显示该文件名。*/
function test() {
    let fileToOpen = Application.GetOpenFilename("Text Files (*.txt), *.txt")
    if (fileToOpen) {
        alert(`Open ${fileToOpen}`)
    }
}
```


```JavaScript
/*本示例显示“打开文件”对话框，然后将文件筛选设置为xlsx文件，并允许选择多个文件名。*/
function test() {
    Application.GetOpenFilename("ET Files (*.xlsx), *.xlsx", 1, false, null, true)
}
```
