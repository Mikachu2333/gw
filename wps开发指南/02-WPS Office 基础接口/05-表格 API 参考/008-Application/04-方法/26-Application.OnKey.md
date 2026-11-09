# Application.OnKey

当按特定键或特定的组合键时运行指定的过程。



## 语法

express.**OnKey(Key, Procedure)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key | 必选 | string | 表示要按的键的字符串。 |
| Procedure | 可选 | any | 表示要运行的过程名称的字符串。如果 _Procedure_ 为空文本 ("")，则按 _Key_ 时不发生任何操作。该格式的 **OnKey** 将更改键击在 ET 中产生的正常结果。如果省略 _Procedure_ 参数，则 _Key_ 恢复为 ET 中的正常结果，同时清除先前使用 **OnKey** 方法所做的特殊键击设置。 |

## 返回值

void

## 说明


_Key_ 参数可指定任何与 Alt、Ctrl 或 Shift 组合使用的键，还可以指定这些键的任何组合。每一个键可由一个或多个字符表示，比如 `"a"` 表示字符 a，`"{ENTER}"` 表示 Enter。

若要指定按对应的键（例如 Enter 或 Tab）时的非显示字符，请使用下表所列出的代码。表中的每个代码表示键盘上的一个对应键。

| 按键           | 代码                 |
| ------------ | ------------------ |
| Backspace    | \{BACKSPACE\} 或 \{BS\} |
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

若为特定字符指定处理过程（如 +、^、% 等等），可将此字符用圆括号括起。有关详细信息，请参阅示例。



## 示例


```JavaScript
/*本示例为键序列 Ctrl+加号分配“InsertProc”过程，并为键序列 Shift+Ctrl+向右键分配“SpecialPrintProc”过程。*/
function test() {
    Application.OnKey("^{+}", "InsertProc")
    Application.OnKey("+^{RIGHT}", "SpecialPrintProc")
}
```


```JavaScript
/*本示例将 Shift+Ctrl+向右键重新设为正常的含义。*/
function test() {
    Application.OnKey("+^{RIGHT}")
}
```


```JavaScript
/*本示例将 Shift + Ctrl + 向右键键序列设为不发生任何操作。*/
function test() {
    Application.OnKey("+^{RIGHT}", "")
}
```
