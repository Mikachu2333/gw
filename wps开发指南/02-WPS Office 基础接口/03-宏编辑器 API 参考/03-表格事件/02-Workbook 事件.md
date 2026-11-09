# Workbook 事件 

---

  
###  事件列表

| 名称                     | 触发时机                              |
| ---------------------- | --------------------------------- |
| Activate               | 该工作簿被激活时，将触发此事件。                  |
| AfterSave              | 该工作簿被保存之后触发此事件。                   |
| BeforeClose            | 该工作簿关闭之前触发此事件。                    |
| BeforePrint            | 该工作簿打印之前触发此事件。                    |
| BeforeSave             | 该工作簿保存之前触发此事件。                    |
| Deactivate             | 该工作簿被切换到非激活状态时触发此事件。              |
| NewSheet               | 该工作簿中创建新工作表时触发此事件。                |
| Open                   | 该工作簿打开时触发此事件。                     |
| SheetActivate          | 当激活该工作簿任一工作表时触发 此事件。              |
| SheetBeforeDelete      | 删除该工作簿任一 工作表之前触发此事件。              |
| SheetBeforeDoubleClick | 双击该工作簿任一工作表之前 触发此事件。              |
| SheetBeforeRightClick  | 右击该工作簿任一工作表之前 触发此事件。              |
| SheetCalculate         | 在该工作簿任一工作表进行 计算时触发此事件。            |
| SheetChange            | 当用户或外部链接更改了该工作簿任一 工作表中的单元格时触发此事件。 |
| SheetDeactivate        | 当该工作簿任一 工作表被切换到非激活状态时触发此事件。       |
| SheetFollowHyperlink   | 单击该工作簿任一 工作表的超链接时触发 此事 件。         |
| SheetSelectionChange   | 该工作簿任一工作表上的选定区域发生更改时，将触发此事件。      |

  
###  事件

**Activate** 

---

> 该工作簿被激活时，将触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_Activate**()  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ###  示例
> 
> 该工作簿被激活时，弹消息框提醒用户。  
> 
> ```php
> function Workbook_Activate()
> {
> MsgBox("您激活了当前工作簿")
> } 
> ```

#### 

  
**AfterSave** 

---

> 该工作簿被保存之后触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_AfterSave** (*Success*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### **参数** 
> 
> | 名称         | 必选/可选 | 数据类型    | 说明                         |
> | ---------- | ----- | ------- | -------------------------- |
> | **Success* | 必选    | Boolean | 如果保存操作成功，则为true; 否则为false。 |
> 
> ###  示例
> 
> 该工作簿被保存后，弹消息框提醒用户。

> ```php
> function Workbook_AfterSave(Success)
> {
> if (Success)
> {
> 	MsgBox("文档被成功保存！")
> }
> } 
> ```
> 
>  

  
**BeforeClose** 

---

> 该工作簿关闭之前触发此事件。 
> 
> ###  语法
> 
> function **Workbook\_BeforeClose**(*Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型   | 说明                              |
> | -------- | ----- | ------ | ------------------------------- |
> | *Cancel* | 必选    | Object | 如果设置其属性Value为 **true**，则取消此次关闭。 |
> 
> ###  示例
> 
> 该工作簿被关闭时，弹消息框询问用户是否取消，用户点击“是”就会取消关闭工作簿。

> ```php
> function Workbook_BeforeClose(Cancel)
> {
> var ret = MsgBox("工作簿正在关闭。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```
> 
>  
  
  
**BeforePrint** 

---

> 该工作簿打印之前触发此事件 
> 
> ###  语法
> 
> function **Workbook\_BeforePrint**(*Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型   | 说明                              |
> | -------- | ----- | ------ | ------------------------------- |
> | *Cancel* | 必选    | Object | 如果设置其属性Value为 **true**，则取消此次打印。 |
> 
> ###  示例
> 
> 该工作簿打印前时，弹消息框询问用户是否取消，用户点击“是”就会取消打印工作簿。 

> ```php
> function Workbook_BeforePrint(Cancel)
> {
>    var ret = MsgBox("工作簿即将打印。是否取消？", jsYesNo);
>    if (ret == jsResultYes) Cancel.Value = true;
> }
> ```
> 
>  

  
**BeforeSave** 

---

> 该工作簿保存之前触发此事件。 
> 
> ###  语法
> 
> function **Workbook\_BeforeSave**(*S* *aveAsUI*，*Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ### 参数 
> 
> | 名称            | 必选/可选 | 数据类型    | 说明                                  |
> | ------------- | ----- | ------- | ----------------------------------- |
> | *S* *aveAsUI* | 必选    | Boolean | 如果为**true**则表示此次保存操作将会弹出保存或是另存为对话框。 |
> | *Cancel*      | 必选    | Object  | 如果设置其属性Value为 **true**，则取消此次保存。     |
> 
>  
> ###  示例
> 
> 对该工作簿保存之前，如果会弹出保存或是另存为对话框的情况，弹消息框询问用户是否取消，用户点击“是”就会取消保存工作簿。

> ```php
> function Workbook_BeforeSave(SaveAsUI, Cancel)
> {
> if (SaveAsUI){
> 	var ret = MsgBox("工作簿即将保存。是否取消？", jsYesNo);
> 	if (ret == jsResultYes)
> 		Cancel.Value = true;
> }
> } 
> ```
> 
>  
>  

  
**Deactivate** 

---

> 该工作簿被切换到非激活（非活动 ）状态时触发此事件。 
> 
> ###  语法
> 
> function **Workbook\_Deactivate**()  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  示例
> 
> 该工作簿被切换到非激活（非活动）状态时，弹消息框提醒用户。

> ```php
> function Workbook_Deactivate()
> {
> MsgBox("工作簿被切换到非激活了。");
> } 
> ```
> 
>  

  
**NewSheet** 

---

> 该工作簿中创建新工作表时触发此事件。 
> 
> ###  语法
> 
> function **Workbook\_NewSheet**(*Sh*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明     |
> | ---- | ----- | ------ | ------ |
> | *Sh* | 必选    | Object | 新建的工作表 |
> 
> ###  示例
> 
> 该工作簿创建新工作表时，弹消息框提醒用户。

> ```php
> function Workbook_NewSheet(Sh)
> {
> MsgBox("新建了工作表：" + Sh.Name)
> } 
> ```

  
**Open** 

---

> 该工作簿打开时触发此事件 
> 
> ###  语法
> 
> function **Workbook\_Open**()  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  示例
> 
> 该工作簿被打开时，弹消息框提醒用户。

> ```php
> function Workbook_Open()
> {
> MsgBox("工作簿被打开了。");
> }
> ```
  
  
**SheetActivate** 

---

> 当激活该工作簿任一工作表时 触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetActivate** (*Sh*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明        |
> | ---- | ----- | ------ | --------- |
> | *Sh* | 必选    | Object | 激活的工作表对象。 |
> 
> ###  示例
> 
> 当激活了工作表时，弹消息框提醒用户。  
> 
> ```php
> function Application_SheetActivate(Sh)
> {
> MsgBox("您激活了工作表："+Sh.Name)
> }
> ```
  
  
**SheetBeforeDelete** 

---

> 删除该工作簿任一工作表之前 触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetBeforeDelete** (*Sh*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明        |
> | ---- | ----- | ------ | --------- |
> | *Sh* | 必选    | Object | 删除的工作表对象。 |
> 
> ###  示例
> 
> 删除该工作簿任一工作表之前，弹消息框提醒用户。

> ```php
> function Workbook_SheetBeforeDelete(Sh)
> {
> MsgBox("您删除了工作表："+Sh.Name)
> }
> ```
> 
>  
  
  
**SheetBeforeDoubleClick** 

---

> 双击该工作簿任一工作表之前触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetBeforeDoubleClick** (*Sh, Target, Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型    | 说明                              |
> | -------- | ----- | ------- | ------------------------------- |
> | *Sh*     | 必选    | Object  | 双击的工作表对象。                       |
> | Target   | 必选    | Range对象 | 双击区域所在的单元格对象。                   |
> | *Cancel* | 必选    | Object  | 如果设置其属性Value为 **true**，则取消此次双击。 |
> 
> ###  示例
> 
> 双击该工作簿任一工作表之前，如果双击操作在A1单元格上，则不响应双击操作（默认是进入编辑），否则则继续响应。

> ```php
> function Workbook_SheetBeforeDoubleClick(Sh, Target, Cancel)
> {
> if (Target.Address() == "$A$1")
> 	Cancel.Value = true;
> } 
> ```
> 
>  
  
  
**SheetBeforeRightClick** 

---

> 右击该工作簿任一工作表之前触发 此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetBeforeRightClick** (*Sh, Target, Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型    | 说明                              |
> | -------- | ----- | ------- | ------------------------------- |
> | *Sh*     | 必选    | Object  | 右击的工作表对象。                       |
> | *Target* | 必选    | Range对象 | 右击区域所在的单元格对象。                   |
> | *Cancel* | 必选    | Object  | 如果设置其属性Value为 **true**，则取消此次右击。 |
> 
> ###  示例
> 
> 右击该工作簿任一工作表之前，如果右击操作在A1单元格上，则不响应右击操作（默认是弹出右键菜单），否则则继续右击。 

> ```php
> function Workbook_SheetBeforeRightClick(Sh, Target, Cancel)
> {
>    if (Target.Address() == "$A$1") Cancel.Value = true;
> }
> ```
> 
>  

  
**SheetCalculate** 

---

> 该工作簿任一工作表进行计算时触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetCalculate** (*Sh*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明        |
> | ---- | ----- | ------ | --------- |
> | *Sh* | 必选    | Object | 计算的工作表对象。 |
> 
> ###  示例
> 
> 当工作表进行计算时，弹消息框提醒用户。

> ```php
> function Workbook_SheetCalculate(Sh)
> {
> MsgBox("工作表正在计算："+Sh.Name)
> } 
> ```
> 
>  

  
**SheetChange** 

---

> 当用户或外部链接更改了该工作簿任一工作表中的单元格时触发 此事件。 
> 
> ### 语法 
> 
> function **Workbook** **\_SheetChange** (*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型    | 说明            |
> | -------- | ----- | ------- | ------------- |
> | *Sh*     | 必选    | Object  | 修改的工作表对象。     |
> | *Target* | 必选    | Range对象 | 修改的单元格Range对象 |
> 
> ###  示例
> 
> 工作表中的单元格被修改时，弹消息框提醒用户。

> ```php
> function Workbook_SheetChange(Sh, Target)
> {
> MsgBox("工作表:" + Sh.Name + "。区域："+Target.Address() + "。发生了修改")
> }
> ```
> 
>  

  
**SheetDeactivate** 

---

> 当该工作簿任一工作表被切换到非激活状态时 触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetDeactivate** (*Sh*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明               |
> | ---- | ----- | ------ | ---------------- |
> | *Sh* | 必选    | Object | 被切换到非激活状态的工作表对象。 |
> 
> ###  示例
> 
> 任一工作表被切换到非激活状态时，弹消息框提醒用户。

> ```php
> function Workbook_SheetDeactivate(Sh)
> {
> MsgBox("被切换到非激活的工作表："+Sh.Name)
> } 
> ```
> 
>  

  
**SheetFollowHyperlink** 

---

> 单击该工作簿任一工作表的超链接 时触发此事 件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetFollowHyperlink** (*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型        | 说明                    |
> | -------- | ----- | ----------- | --------------------- |
> | *Sh*     | 必选    | Object      | 超链接所在的工作表对象。          |
> | *Target* | 必选    | Hyperlink对象 | Hyperlink对象，代表超链接的目标。 |
> 
> ###  示例
> 
> 单击该工作簿任一工作表的超链接时，弹消息框提醒用户。

> ```php
> function Workbook_SheetFollowHyperlink(Sh, Target)
> {
> MsgBox("你点击了工作表\"" + Sh.Name + "\"上的超链接："+Target.Address)
> } 
> ```
> 
>  

  
**SheetSelectionChange** 

---

> 该工作簿任一工作表上的选定区域发生更改时，将触发此事件。 
> 
> ### 语法 
> 
> function **Workbook\_SheetSelectionChange** (*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型   | 说明          |
> | -------- | ----- | ------ | ----------- |
> | *Sh*     | 必选    | Object | 选区改变的工作表对象。 |
> | *Target* | 必选    | Range  | 新选定的区域。     |
> 
> ###  示例
> 
> 当工作表上的选定区域发生更改时，弹消息框提醒用户。

> ```php
> function Workbook_SheetSelectionChange(Sh, Target)
> {
> MsgBox("工作表\"" + Sh.Name + "\"选中的区域是："+Target.Address() + "。")
> }
> ```
