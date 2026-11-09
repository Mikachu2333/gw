# Application 事件 

---

  
###  事件列表

| 名称                      | 触发时机                 |
| ----------------------- | -------------------- |
| NewPresentation         | 当新建演示文稿时触发此事件。       |
| PresentationBeforeClose | 任一打开的演示文稿关闭之前触发此事件。  |
| PresentationBeforeSave  | 任一演示文稿被保存之前 触发此事件。   |
| PresentationOpen        | 当打开任一演示文稿时触发此事件。     |
| PresentationSave        | 任一演示文稿被保存 时触发此事件。    |
| WindowActivate          | 任一演示文稿窗口被激活时，将触发此事件。 |

  
###  事件

**NewPresentation** 

---

> 当新建演示文稿时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_NewPresentation** (*Pres*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### **参数** 
> 
> | 名称      | 必选/可选 | 数据类型           | 说明         |
> | ------- | ----- | -------------- | ---------- |
> | **Pres* | 必选    | Presentation对象 | 新建的演示文稿对象。 |
> 
> ###  示例
> 
> 当新建一个演示文稿时，弹消息框提醒用户新建了演示文稿。  
> 
> ```php
> function Application_NewPresentation(Pres)
> {
> MsgBox("您新建了演示文稿："+Pres.Name)
> }
> ```

####   

  
**PresentationBeforeClose** 

---

> 任一打开的演示文稿关闭之前触发此事件。 
> 
> ###  语法
> 
> function **Application\_PresentationBeforeClose**(*Pres, Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型           | 说明                               |
> | -------- | ----- | -------------- | -------------------------------- |
> | *Pres*   | 必选    | Presentation对象 | 关闭的演示文稿对象。                       |
> | *Cancel* | 必选    | Object         | 如果设置其属性Value为 **true**，则不关闭演示文稿。 |
> 
> ###  示例
> 
> 当关闭一个演示文稿时，弹消息框提醒用户即将关闭演示文稿，是否取消。用户点击“是”就会取消关闭演示文稿。  
> 
> ```php
> function Application_PresentationBeforeClose(pres, Cancel)
> {
> var ret = MsgBox("演示文稿\"" + pres.Name + "\"" +"正在关闭。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```
> 
>  

####   

  
**PresentationBeforeSave** 

---

> 任一演示文稿被保存之前 触发此事件。 
> 
> ###  语法
> 
> function **Application\_PresentationBeforeSave** (*Pres, Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型           | 说明                               |
> | -------- | ----- | -------------- | -------------------------------- |
> | *Pres*   | 必选    | Presentation对象 | 保存的演示文稿对象。                       |
> | *Cancel* | 必选    | Object         | 如果设置其属性Value为 **true**，则不保存演示文稿。 |
> 
> ###  示例
> 
> 当保存一个演示文稿时，弹消息框提醒用户即将保存演示文稿，是否取消。用户点击“是”就会取消保存演示文稿。  
> 
> ```php
> function Application_PresentationBeforeSave(pres, Cancel)
> {
> var ret = MsgBox("演示文稿\"" + pres.Name + "\"" +"即将保存。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```
> 
>  

  
**PresentationOpen** 

---

> 当打开任一演示文稿时触发此事件。 
> 
> ###  语法
> 
> function **Application\_PresentationOpen**(*Pres*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称     | 必选/可选 | 数据类型           | 说明         |
> | ------ | ----- | -------------- | ---------- |
> | *Pres* | 必选    | Presentation对象 | 新建的演示文稿对象。 |
> 
> ###  示例
> 
> 当打开任一演示文稿时，弹消息框提醒用户打开了演示文稿。  
> 
> ```php
> function Application_PresentationOpen(Pres)
> {
> MsgBox("您打开了演示文稿。")
> }
> ```

####   

**PresentationSave** 

---

> 任一演示文稿被保存时触发 此事件。 
> 
> ###  语法
> 
> function **Application\_PresentationSave**(*Pres*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称     | 必选/可选 | 数据类型           | 说明         |
> | ------ | ----- | -------------- | ---------- |
> | *Pres* | 必选    | Presentation对象 | 保存的演示文稿对象。 |
> 
> ###  示例
> 
> 当保存演示文稿时，弹消息框提醒用户正在保存演示文稿。  
> 
> ```php
> function Application_PresentationSave(pre)
> {
> MsgBox("正在保存演示文稿："+ pre.Name)
> }
> ```

####   

**WindowActivate** 

---

> 任一演示文稿窗口被激活时，将触发 此事件。 
> 
> ###  语法
> 
> function **Application\_WindowActivate**(*Pres, Wn*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称     | 必选/可选 | 数据类型             | 说明         |
> | ------ | ----- | ---------------- | ---------- |
> | *Pres* | 必选    | Presentation对象   | 新建的演示文稿对象。 |
> | *Wn*   | 必选    | DocumentWindow对象 | 激活的文档窗口对象。 |
> 
> ###  示例
> 
> 当切换演示文稿窗口时，输出激活的窗口标题。  

> ```php
> function Application_WindowActivate(pre, win)
> {
> Debug.Print("当前激活窗口是："+ win.Caption)
> }
> ```
> 
>
