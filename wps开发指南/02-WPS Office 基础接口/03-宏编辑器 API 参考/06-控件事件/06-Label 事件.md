# Label 事件 

---

  
### 事件列表 

| 名称        | 触发时机                                |
| --------- | ----------------------------------- |
| Click     | 当用户在对象上按下然后释放鼠标按钮时触发此事件             |
| DblClick  | 当用户在系统的双击时间限制内在对象上按下并释放鼠标左键两次时触发此事件 |
| MouseDown | 在用户按下鼠标按钮时触发此事件                     |
| MouseUp   | 在用户释放鼠标按钮时触发此事件                     |
| MouseMove | 在用户移动鼠标时触发此事件                       |

  
**事件** 

**Click** 

---

> 当用户在对象上按下然后释放鼠标按钮时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_Label1\_Click** **()**   
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
> function UserForm1_Label1_Click()
> {
> MsgBox("您单击了一次：")
> } 
> ```

  
**DblClick** 

---

> **语法** 
> 
> function **UserForm1\_Label1\_DblClick(cancel)**   
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
> function UserForm1_Label1_DblClick(cancel)
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
> function **UserForm1\_Label1\_** **MouseDown(btn, shift, x, y)**   
> **{**   
> *function\_body\_statements*   
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
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
> function UserForm1_Label1_MouseDown(btn, shift, x, y)
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
> function **UserForm1\_Label1\_** **MouseUp(btn, shift, x, y)**   
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
> function UserForm1_Label1_MouseUp(btn, shift, x, y)
> {
>    MsgBox("您松开了鼠标：")
> } 
> ```

  
**MouseMove** 

---

> 在用户移动鼠标时触发此事件
> 
> **语法** 
> 
> function **UserForm1\_Label1\_** **MouseMove(btn, shift, x, y)**   
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
> function UserForm1_Label1_MouseMove(btn, shift, x, y)
> {
>    MsgBox("您移动了鼠标：")
> }
> ```
> 
>
