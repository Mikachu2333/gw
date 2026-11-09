# **ScrollBar 事件** 

---

  
###  事件列表

| 名称       | 触发时机                                        |
| -------- | ------------------------------------------- |
| KeyUp    | 当用户在窗体或控件具有焦点时释放键时触发此事件                     |
| KeyDown  | 当用户在窗体或控件具有焦点时按下某个键时触发此事件                   |
| KeyPress | 当窗体或控件具有焦点时，当用户按下并释放对应于 ANSI 代码的键或组合键时触发此事件 |
| Change   | 当控件的内容发生变化时触发此事件                            |
| Enter    | 在控件从同一窗体的控件上接收焦点之前触发此事件                     |
| Exit     | 在一个控件上的焦点转移到同一窗体上的另一个控件之前触发此事件              |

  
**事件** 

**KeyUp** 

---

> 当用户在窗体或控件具有焦点时释放键时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_KeyUp** **(keycode, shift)**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> | 名称      | 必选/可选 | 数据类型    | 说明                                          |
> | ------- | ----- | ------- | ------------------------------------------- |
> | keyCode | 必选    | Integer | 键代码，您可以通过将参数设置为 0 来阻止对象接收按键                 |
> | Shift   | 必选    | Integer | 按下或释放 Button 参数指定的按钮时 Shift、Ctrl 和 Alt 键的状态 |
> 
> **示例** 
> 
> ```bash
> function UserForm1_ScrollBar1_KeyUp(keycode, shift)
> {
>    MsgBox("您松开了" + keycode + "键")
> }						
> 
> ```

  
**KeyDown** 

---

> 当用户在窗体或控件具有焦点时按下某个键时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_KeyDown** **(keycode, shift)**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> | 名称      | 必选/可选 | 数据类型    | 说明                                          |
> | ------- | ----- | ------- | ------------------------------------------- |
> | keyCode | 必选    | Integer | 键代码，您可以通过将参数设置为 0 来阻止对象接收按键                 |
> | Shift   | 必选    | Integer | 按下或释放 Button 参数指定的按钮时 Shift、Ctrl 和 Alt 键的状态 |
> 
> **示例** 
> 
> ```bash
> function UserForm1_ScrollBar1_KeyDown(keycode, shift)
> {
>    MsgBox("您按下了" + keycode + "键")
> }
> ```

  
**KeyPress** 

---

> 当窗体或控件具有焦点时，当用户按下并释放对应于 ANSI 代码的键或组合键时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_KeyPress** **(keyascii)**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> | 名称       | 必选/可选 | 数据类型    | 说明                                                                |
> | -------- | ----- | ------- | ----------------------------------------------------------------- |
> | keyAscii | 必选    | Integer | 返回一个数字 ANSI 键码。 KeyAscii 参数是通过引用传递的；更改它会向对象发送不同的字符。 将该参数设置为0会取消击键 |
> 
> **示例** 
> 
> ```php
> function UserForm1_ScrollBar1_KeyPress(keyascii)
> {
>    MsgBox("您点击了" + keycode + "键")
> }
> ```
> 
>  

**Change** 

---

> 当控件的内容发生变化时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_Change** **()**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> 无
> 
> **示例** 
> 
> ```php
> function UserForm1_ScrollBar1_Change()
> {
> MsgBox("控件内容发生改变")
> } 
> ```
> 
>  

**Enter** 

---

> 在控件从同一窗体的控件上接收焦点之前触发该事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_Enter** **()**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> 无
> 
> **示例** 
> 
> ```php
> function UserForm1_ScrollBar1_Enter()
> {
> MsgBox("焦点进入该控件")
> }
> ```

  
**Exit** 

---

> 在一个控件上的焦点转移到同一窗体上的另一个控件之前触发该事件
> 
> **语法** 
> 
> function **UserForm1\_ScrollBar1\_Exit** **(cancel)**   
> {  
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> | 名称     | 必选/可选 | 数据类型    | 说明                                      |
> | ------ | ----- | ------- | --------------------------------------- |
> | Cancel | 必选    | Integet | 该设置确定是否触发事件。 将该参数设置为 True (1) 会取消触发该事件。 |
> 
> **示例** 
> 
> ```php
> function UserForm1_ScrollBar1_Exit(cancel)
> {
> MsgBox("焦点离开该控件")
> }
> ```
