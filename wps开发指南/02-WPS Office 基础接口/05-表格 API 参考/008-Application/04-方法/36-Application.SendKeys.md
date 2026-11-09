# Application.SendKeys

将击键发送给活动应用程序。



## 语法

express.**SendKeys(Keys, Wait)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Keys | 必选 | any | 要以文本形式发送给应用程序的键或组合键。 |
| Wait | 可选 | any | 如果为 **True** ，则 ET 会等到处理完按键后将控件返回给宏；如果为 **False** （或者省略该参数），则继续运行宏而不等待击键处理完毕。 |

## 返回值

void

## 说明


本方法将击键放到键盘缓冲区。某些情况下，在调用要使用击键的方法之前必须先调用此方法。例如，若要往对话框中发送密码，则必须在显示对话框之前调用 **SendKeys** 方法。

_Keys_ 参数可指定任何单个键或与 Alt、Ctrl 或 Shift 的组合键（或者这些键的组合）。每个键可用一个或多个字符表示。例如，`"a"` 表示字符 a，或者 `"{ENTER}"` 表示 Enter。

若要指定那些没有屏幕回显该字符的键（例如，Enter 或 Tab），请使用下表所列的代码来表示相应的键。表中的每个代码表示键盘上的一个对应键。

| 按键           | 代码                 |
| ------------ | ------------------ |
| BACKSPACE    | \{BACKSPACE\} 或 \{BS\} |
| Break        | \{BREAK\}            |
| Caps Lock    | \{CAPSLOCK\}         |
| Clear        | \{CLEAR\}            |
| Delete 或 Del | \{DELETE\} 或 \{DEL\}   |
| 向下键          | \{DOWN\}             |
| End          | \{END\}              |
| Enter（数字小键盘） | \{ENTER\}            |
| Enter        | \~（波形符）            |
| Esc          | \{ESCAPE\} 或 \{ESC\}   |
| Help         | \{HELP\}             |
| Home         | \{HOME\}             |
| Ins          | \{INSERT\}           |
| 向左键          | \{LEFT\}             |
| Num Lock     | \{NUMLOCK\}          |
| PageDown     | \{PGDN\}             |
| PageUp       | \{PGUP\}             |
| Return       | \{RETURN\}           |
| 向右键          | \{RIGHT\}            |
| Scroll Lock  | \{SCROLLLOCK\}       |
| Tab          | \{TAB\}              |
| 向上键          | \{UP\}               |
| F1 到 F15     | \{F1\} 到 \{F15\}       |

还可指定与 Shift 和/或 Ctrl 和/或 Alt 组合使用的键。若要指定与其他键组合使用的键，可使用下表。

| 要组合的键 | 在键代码之前添加 |
| ----- | -------- |
| Shift | +（加号）    |
| Ctrl  | ^（插入符号）  |
| Alt   | %（百分号）   |



## 示例


```JavaScript
/*本示例创建新的工作簿。*/
function test() {
    Application.SendKeys("^n")
}
```


```JavaScript
/*本示例打开“名称管理器”窗口。*/
function test() {
    Application.SendKeys("^{F3}")
}
```


```JavaScript
/*本示例将值 1234 输入到了“活动单元格”中。*/
function test() {
    Application.SendKeys("1234{Enter}")
}
```
