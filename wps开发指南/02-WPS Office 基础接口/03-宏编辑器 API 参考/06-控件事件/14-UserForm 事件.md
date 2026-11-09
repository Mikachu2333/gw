# UserForm 事件 

---

  
### 事件列表 

| 名称         | 触发时机                                                                 |
| ---------- | -------------------------------------------------------------------- |
| Initialize | 在加载对象之后但在显示之前触发此事件                                                   |
| Terminate  | 当通过将引用该对象的所有变量设置为 Nothing 或当对该对象的最后一个引用超出范围而从内存中删除对某个对象实例的所有引用时触发此事件 |
| Click      | 当用户在对象上按下然后释放鼠标按钮时触发此事件                                              |
| DblClick   | 当用户在系统的双击时间限制内在对象上按下并释放鼠标左键两次时触发此事件                                  |
| MouseDown  | 在用户按下鼠标按钮时触发此事件                                                      |
| MouseUp    | 在用户释放鼠标按钮时触发此事件                                                      |
| MouseMove  | 在用户移动鼠标时触发此事件                                                        |
| KeyUp      | 当用户在窗体或控件具有焦点时释放键时触发此事件                                              |
| KeyDown    | 当用户在窗体或控件具有焦点时按下某个键时触发此事件                                            |
| KeyPress   | 当窗体或控件具有焦点时，当用户按下并释放对应于 ANSI 代码的键或组合键时触发此事件                          |

  
**事件** 

**Initialize** 

---

> 在加载对象之后但在显示之前触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_Initialize** **()**  
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
> function UserForm1_Initialize()
> {
> MsgBox("您新建了用户窗体：")
> }
> ```

  
**Terminate** 

---

> 当通过将引用该对象的所有变量设置为 Nothing 或当对该对象的最后一个引用超出范围而从内存中删除对某个对象实例的所有引用时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_Terminate** **()**  
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
> function UserForm1_Terminate()
> {
> MsgBox("您关闭了用户窗体：")
> }
> ```

  
**Click** 

---

> 当用户在对象上按下然后释放鼠标按钮时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_Click** **()**  
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
> function UserForm1_Click()
> {
> MsgBox("您单击了一次：")
> } 
> ```

  
**DblClick** 

---

> 当用户在系统的双击时间限制内在对象上按下并释放鼠标左键两次时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_DblClick(cancel)**  
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
> function UserForm1_DblClick(cancel)
> {
> MsgBox("您双击了一次：")
> }
> ```

  
**MouseDown** 

---

> 在用户按下鼠标按钮时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_**MouseDown(btn, shift, x, y)   
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> **参数** 
> 
> | 名称     | 必选/可选 | 数据类型    | 说明                                          |
> | ------ | ----- | ------- | ------------------------------------------- |
> | Button | 必选    | Integer | 被按下以触发事件的鼠标按钮                               |
> | Shift  | 必选    | Integer | 按下或释放 Button 参数指定的按钮时 Shift、Ctrl 和 Alt 键的状态 |
> | X      | 必选    | Single  | 鼠标指针当前位置的 x 坐标                              |
> | Y      | 必选    | Single  | 鼠标指针当前位置的 y坐标                               |
> 
> **示例** 
> 
> ```bash
> function UserForm1_MouseDown(btn, shift, x, y)
> {
>    MsgBox("您按下了鼠标：")
> } 
> ```

  
**MouseUp** 

---

> 在用户释放鼠标按钮时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_**MouseUp(btn, shift, x, y)   
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> **参数** 
> 
> | 名称     | 必选/可选 | 数据类型    | 说明                                          |
> | ------ | ----- | ------- | ------------------------------------------- |
> | Button | 必选    | Integer | 被按下以触发事件的鼠标按钮                               |
> | Shift  | 必选    | Integer | 按下或释放 Button 参数指定的按钮时 Shift、Ctrl 和 Alt 键的状态 |
> | X      | 必选    | Single  | 鼠标指针当前位置的 x 坐标                              |
> | Y      | 必选    | Single  | 鼠标指针当前位置的 y坐标                               |
> 
> **示例** 
> 
> ```bash
> function UserForm1_MouseUp(btn, shift, x, y)
> {
>    MsgBox("您松开了鼠标：")
> } 
> ```

  
**MouseMove** 

---

> 在用户移动鼠标时触发此事件 
> 
> **语法**  
> function **UserForm1\_**MouseMove(btn, shift, x, y)   
> {   
> *function\_body\_statements*   
> 
> } 
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> **参数** 
> 
> | 名称     | 必选/可选 | 数据类型    | 说明                                          |
> | ------ | ----- | ------- | ------------------------------------------- |
> | Button | 必选    | Integer | 被按下以触发事件的鼠标按钮                               |
> | Shift  | 必选    | Integer | 按下或释放 Button 参数指定的按钮时 Shift、Ctrl 和 Alt 键的状态 |
> | X      | 必选    | Single  | 鼠标指针当前位置的 x 坐标                              |
> | Y      | 必选    | Single  | 鼠标指针当前位置的 y坐标                               |
> 
> **示例** 
> 
> ```bash
> function UserForm1_MouseMove(btn, shift, x, y)
> {
>    MsgBox("您移动了鼠标：")
> }
> ```
> 
>  

**KeyUp** 

---

> 当用户在窗体或控件具有焦点时释放键时触发此事件 
> 
> **语法** 
> 
> function **UserForm1\_**KeyUp(keycode, shift)   
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
> function UserForm1_KeyUp(keycode, shift)
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
> function **UserForm1\_** **KeyDown** **(keycode, shift)**   
> {   
> *function\_body\_statements*   
> 
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
> function UserForm1_KeyDown(keycode, shift)
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
> function **UserForm1\_** **KeyPress(keyascii)**   
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
> function UserForm1_KeyPress(keyascii)
> {
>    MsgBox("您点击了" + keycode + "键")
> }
> ```
> 
>
