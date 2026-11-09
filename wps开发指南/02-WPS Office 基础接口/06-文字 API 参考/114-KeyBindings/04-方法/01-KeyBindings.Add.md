# KeyBindings.Add

返回一个 **KeyBinding** 对象，该对象代表宏、内置命令、字体、“自动图文集”词条、样式或符号的新快捷键。



## 语法

express.**Add(KeyCategory, Command, KeyCode, KeyCode2, CommandParameter)**

express   一个代表 **KeyBindings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| KeyCategory | 必选 | WdKeyCategory | 键分配方案的类别。 |
| Command | 必选 | string | 指定组合键执行的命令。 |
| KeyCode | 必选 | number（int4 精度） | 用 **WdKey** 某个常量指定的键。 |
| KeyCode2 | 可选 | any | 用 **WdKey** 某个常量指定的另一个键。 |
| CommandParameter | 可选 | any | _Command_ 所指定的命令所需的附加文字（如果有）。有关详细信息，请参阅“注解”部分。 |

## 返回值

KeyBinding

## 说明


可以使用 **BuildKeyCode** 方法创建 _KeyCode_ 或 _KeyCode2_ 参数。

在下表中，左边的列包含需要命令值的命令，右边的列说明如何指定每个命令的 _CommandParameter_。（在 **“工具”** 菜单中的 **“自定义键盘”** 对话框中指定 _CommandParameter_ 的等效操作是：在 **“命令”** 框中选择下列命令之一后，在显示的列表框中选择一项。）

| 如果将 Command 设置为                     | CommandParameter 必须为                                      |
| ----------------------------------- | --------------------------------------------------------- |
| **Borders** 、 **Color** 或 **Shading** | 一个指定为文本的数字，对应于在包含值的列表框中选中项的位置，其中 0（零）是第一项，1 是第二项，以此类推     |
| **Columns**                         | 一个指定为文本的 1 至 45 之间的数字，对应于要应用的列数                           |
| **Condensed**                       | 一个 0.1 磅至 12.75 磅之间的文本度量值，以 0.05 磅为增量（72 磅 = 1 英寸）        |
| **Expanded**                        | 一个 0.1 磅至 12.75 磅之间的文本度量值，以 0.05 磅为增量（72 磅 = 1 英寸）        |
| **FileOpenFile**                    | 需要打开文件的路径和名称。如果没有指定路径，则使用当前文件夹                            |
| **Font Size**                       | 一个正的文本度量值，以 0.5 磅为增量（72 磅 = 1 英寸）                         |
| **Lowered、Raised**                  | 一个 1 磅至 64 磅之间的文本度量值，以 0.5 磅为增量（72 磅 = 1 英寸）              |
| **Symbol**                          | 通过连接 **String.fromCharCode()** 指令和符号的字体名称所创建的字符串（例如， String.fromCharCode(167) + "Symbol"） |



## 示例


```JavaScript
/*本示例为 FileClose 命令添加 Ctrl+Alt+W 组合键。这个键盘自定义方案保存在 Normal 模板中。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FileClose", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyW))
}
```


```JavaScript
/*本示例为 Arial 字体添加 ALT + F4 组合键，然后显示KeyBindings集合中的项的数目。该示例然后清除 ALT + F4 键组合（返回到其默认设置），并重新显示KeyBindings集合中的项的数目。*/
function test() {
    Application.CustomizationContext = ActiveDocument.AttachedTemplate
    let keyBinding = Application.KeyBindings.Add(wdKeyCategoryFont, "Arial", Application.BuildKeyCode(wdKeyAlt, wdKeyF4))
    alert(Application.KeyBindings.Count + " keys in KeyBindings collection")
    keyBinding.Clear()
    alert(Application.KeyBindings.Count + " keys in KeyBindings collection")
}
```


```JavaScript
/*本示例向 Font 命令添加 Ctrl+Alt+S，并将字号指定为 8 磅。*/
function test() {
    Application.CustomizationContext = Application.NormalTemplate
    Application.KeyBindings.Add(wdKeyCategoryCommand, "FontSize", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyS), null, "8")
}
```


```JavaScript
/*本示例为活动文档中“标题 1”样式添加 Ctrl+Alt+H 组合键。*/
function test() {
    Application.CustomizationContext = ActiveDocument
    Application.KeyBindings.Add(wdKeyCategoryStyle, "标题 1", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyH))
}
```


```JavaScript
/*本示例为“Example_1”的“自动图文集”词条添加 Ctrl+Alt+O 组合键。*/
function test() {
    Application.CustomizationContext = ActiveDocument
    Application.KeyBindings.Add(wdKeyCategoryAutoText, "Example_1", Application.BuildKeyCode(wdKeyControl, wdKeyAlt, wdKeyO))
}
```
