# Application.MacroOptions

对应于 **“宏选项”** 对话框中的选项。还可使用此方法将用户定义函数 (UDF) 显示在 **“插入函数”** 对话框的内置类别或新类别中。



## 语法

express.**MacroOptions(Macro, Description, HasMenu, MenuText, HasShortcutKey, ShortcutKey, Category, StatusBar, HelpContextID, HelpFile, ArgumentDescriptions)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Macro | 可选 | any | 宏的名称或用户定义函数 (UDF) 的名称。 |
| Description | 可选 | any | 宏的描述。 |
| HasMenu | 可选 | any | 忽略该参数。 |
| MenuText | 可选 | any | 忽略该参数。 |
| HasShortcutKey | 可选 | any | 如果为 **True** ，则为宏指定一个快捷键（还必须指定 _ShortcutKey_）。如果该参数为 **False** ，则不为宏指定快捷键。如果宏已经有快捷键，则将该参数设置为 **False** 可删除快捷键。默认值为 **False** 。 |
| ShortcutKey | 可选 | any | 如果 _HasShortcutKey_ 为 **True** ，则该参数为必选参数；否则忽略该参数。快捷键。 |
| Category | 可选 | any | 一个指定现有的宏函数类别的整数（例如，财务、日期与时间或用户定义）。请参阅备注部分，以确定映射为内置类别的整数。还可指定自定义类别的字符串。如果提供了一个字符串，它将作为类别名称显示在 **“插入函数”** 对话框中。如果此类别名称从未使用过，则将用该名称定义一个新的类别。如果使用的类别名称与某个内置名称相同（请参阅“说明”部分中的列表），ET 将把用户定义的函数映射到该内置类别。 |
| StatusBar | 可选 | any | 宏的状态栏文本。 |
| HelpContextID | 可选 | any | 一个指定分配给宏的帮助主题上下文 ID 的整数。 |
| HelpFile | 可选 | any | 包含 _HelpContextId_ 定义的帮助主题的帮助文件名。 |
| ArgumentDescriptions | 可选 | any | 一维数组， **“函数参数”** 对话框中显示的 UDF 参数的描述。 |

## 返回值

void

## 说明


下表列出了哪些整数被映射到可在 **Category** 参数中使用的内置类别。

| **Integer** | **类别**      |
| ----------- | ----------- |
| 1           | **财务**      |
| 2           | **日期与时间**   |
| 3           | **数学与三角函数** |
| 4           | **统计**      |
| 5           | **查找与引用**   |
| 6           | **数据库**     |
| 7           | **文本**      |
| 8           | **逻辑**      |
| 9           | **信息**      |
| 10          | **命令**      |
| 11          | **自定义**     |
| 12          | **宏控件**     |
| 13          | **DDE/外部**  |
| 14          | **用户定义**    |
| 15          | 第一个自定义类别    |
| 16          | 第二个自定义类别    |
| 17          | 第三个自定义类别    |
| 18          | 第四个自定义类别    |
| 19          | 第五个自定义类别    |
| 20          | 第六个自定义类别    |
| 21          | 第七个自定义类别    |
| 22          | 第八个自定义类别    |
| 23          | 第九个自定义类别    |
| 24          | 第十个自定义类别    |
| 25          | 第十一个自定义类别   |
| 26          | 第十二个自定义类别   |
| 27          | 第十三个自定义类别   |
| 28          | 第十四个自定义类别   |
| 29          | 第十五个自定义类别   |
| 30          | 第十六个自定义类别   |
| 31          | 第十七个自定义类别   |
| 32          | 第十八个自定义类别   |



## 示例


```JavaScript
/*本示例将名为 TestMacro 的用户定义宏添加到名为“我的自定义类别”的自定义类别。运行此示例后，应在“插入函数”对话框中的“或选择类别”下拉列表中看到“我的自定义类别”，其中包含 TestMacro 用户定义函数。*/
function test() {
    // 请在执行前，先实现一个js函数名为TestMacro
    Application.MacroOptions("TestMacro", null, null, null, null, null, "My Custom Category")
}
```


```JavaScript
/*本示例将名为 example 的用户定义宏添加到名为“我的自定义类别”的自定义类别。*/
function test() {
    // 请在执行前，先实现一个js函数名为example
    Application.MacroOptions("example", "test1")
}
```
