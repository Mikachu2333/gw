# Application 事件 

---

  
###  事件列表

| 名称                     | 触发时机                         |
| ---------------------- | ---------------------------- |
| NewWorkbook            | 当新建工作簿时触发此事件。                |
| SheetActivate          | 当激活任一工作表时触发此事件。              |
| SheetBeforeDelete      | 当删除任一工作表之前触发 此事件。            |
| SheetBeforeDoubleClick | 当双击任一工作表之前触发此事件。             |
| SheetBeforeRightClick  | 当右击任一工作表之前触发此事件 。            |
| SheetCalculate         | 在任一工作表进行计算时触发此事件。            |
| SheetChange            | 当用户或外部链接更改了任一工作表中的单元格时触发此事件。 |
| SheetDeactivate        | 当任一工作表被切换到非激活状态时 触发此事件。      |
| SheetFollowHyperlink   | 单击任一工作表的超链接时触 发此事件。          |
| SheetSelectionChange   | 任一工作表上的选定区域发生更改时，将触发此事件。     |
| WindowActivate         | 任一工作簿窗口被激活时，将触发此事件。          |
| WindowDeactivate       | 任一工作簿窗口被切换到非激活状态时触发此事件。      |
| WindowResize           | 任一工作簿窗口调整大小时将触发此事件。          |
| WorkbookActivate       | 任一工作簿被激活时，将触发此事件。            |
| WorkbookAfterSave      | 任一工作簿被保存之后触发此事件。             |
| WorkbookBeforeClose    | 任一打开的工作簿关闭之前触发此事件。           |
| WorkbookBeforePrint    | 在打印任一打开的工作簿之前触发此事件。          |
| WorkbookBeforeSave     | 任一工作簿被保存之前触发 此事件。            |
| WorkbookDeactivate     | 任一工 作簿被切换到非激活状态时触发此事件。       |
| WorkbookNewSheet       | 在任一打开的工作簿中创建新工作表时触发此事件。      |
| WorkbookOpen           | 当打开一个工作簿时触发此事件。              |

  
###  事件

**NewWorkbook** 

---

> 当新建一个工作簿时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_NewWorkbook**(*Wb*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### **参数** 
> 
> | 名称   | 必选/可选 | 数据类型                                                                    | 说明       |
> | ---- | ----- | ----------------------------------------------------------------------- | -------- |
> | *Wb* | 必选    | [Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj) | 新建的工作簿对象 |
> 
> ###  示例
> 
> 当新建一个工作簿时，弹消息框提醒用户新建了工作簿。  
> 
> ```php
> function Application_NewWorkbook(Wb)
> {
> MsgBox("您新建了工作簿："+Wb.Name)
> }
> ```

#### 

  
**SheetActivate** 

---

> 当激活任一工作表时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_SheetActivate** (*Sh*)  
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
> 当新建一个工作簿时，弹消息框提醒用户激活了工作表。  
> 
> ```php
> function Application_SheetActivate(Sh)
> {
> MsgBox("您激活了工作表："+Sh.Name)
> }
> ```

  
**SheetBeforeDelete** 

---

> 当删除任一工作表之前 触发此事件。 
> 
> ### 语法 
> 
> function **Application\_SheetBeforeDelete** (*Sh*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称   | 必选/可选 | 数据类型   | 说明          |
> | ---- | ----- | ------ | ----------- |
> | *Sh* | 必选    | Object | 即将删除的工作表对象。 |
> 
> ###  示例
> 
> 当删除任一工作表之前，弹消息框提醒用户。
> 
> ```php
> function Application_SheetBeforeDelete(Sh)
> {
> MsgBox("您即将删除工作表："+Sh.Name)
> } 
> ```
> 
>  

  
**SheetBeforeDoubleClick** 

---

> 双击任一工作表之前触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetBeforeDoubleClick**(*Sh, Target, Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型    | 说明                              |
> | -------- | ----- | ------- | ------------------------------- |
> | *Sh*     | 必选    | Object  | 双击的工作表对象。                       |
> | *Target* | 必选    | Range对象 | 双击区域所在的单元格对象。                   |
> | *Cancel* | 必选    | Object  | 如果设置其属性Value为 **true**，则取消此次双击。 |
> 
> ###  示例
> 
> 双击任一工作表之前，如果双击操作在A1单元格上，则不响应双击操作（默认是进入编辑），否则则继续响应。
> 
> ```php
> function Application_SheetBeforeDoubleClick(Sh, Target, Cancel)
> {
> if (Target.Address() == "$A$1")
> 	Cancel.Value = true;
> } 
> ```
> 
>  

  
**SheetBeforeRightClick** 

---

> 右击任一工作表之前触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetBeforeRightClick**(*Sh, Target, Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型    | 说明                              |
> | -------- | ----- | ------- | ------------------------------- |
> | *Sh*     | 必选    | Object  | 右击的工作表对象。                       |
> | *Target* | 必选    | Range对象 | 右击区域所在的单元格对象。                   |
> | *Cancel* | 必选    | Object  | 如果设置其属性Value为 **true**，则取消此次右击。 |
> 
> ###  示例
> 
> 右击任一工作表之前，如果右击操作在A1单元格上，则不响应右击操作（默认是弹出右键菜单），否则则继续右击。
> 
> ```php
> function Application_SheetBeforeRightClick(Sh, rg, cancel)
> {
> if (Target.Address() == "$A$1")
> 	Cancel.Value = true;
> }
> ```
> 
>  

  
**SheetCalculate** 

---

> 任一工作表进行计算时触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetCalculate**(*Sh*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型   | 说明        |
> | ---- | ----- | ------ | --------- |
> | *Sh* | 必选    | Object | 计算的工作表对象。 |
> 
> ###  示例
> 
> 当工作表进行计算时，弹消息框提醒用户。
> 
> ```php
> function Application_SheetCalculate(Sh)
> {
> MsgBox("工作表正在计算："+Sh.Name)
> } 
> ```
> 
>  

  
**SheetChange** 

---

> 当用户或外部链接更改了任一工作表中的单元格时触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetChange**(*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型    | 说明            |
> | -------- | ----- | ------- | ------------- |
> | *Sh*     | 必选    | Object  | 修改的工作表对象。     |
> | *Target* | 必选    | Range对象 | 修改的单元格Range对象 |
> 
> ###  示例
> 
> 工作表中的单元格被修改时，弹消息框提醒用户。
> 
> ```php
> function Application_SheetChange(Sh, rg)
> {
> MsgBox("工作表:" + Sh.Name + "。区域："+Target.Address() + "。发生了修改")
> }
> ```
> 
>  
>  

  
**SheetDeactivate** 

---

> 当任一工作表被切换到非激活状态时触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetDeactivate**(*Sh*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型   | 说明               |
> | ---- | ----- | ------ | ---------------- |
> | *Sh* | 必选    | Object | 被切换到非激活状态的工作表对象。 |
> 
> ###  示例
> 
> 任一工作表被切换到非激活状态时，弹消息框提醒用户。
> 
> ```php
> function Application_SheetDeactivate(Sh)
> {
> MsgBox("被切换到非激活的工作表："+Sh.Name)
> } 
> ```
> 
>  

  
**SheetFollowHyperlink** 

---

> 单击任一工作表的超链接时触发此事件。
> 
> ###  语法
> 
> function **Application\_SheetFollowHyperlink**(*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型        | 说明                    |
> | -------- | ----- | ----------- | --------------------- |
> | *Sh*     | 必选    | Object      | 超链接所在的工作表对象。          |
> | *Target* | 必选    | Hyperlink对象 | Hyperlink对象，代表超链接的目标。 |
> 
> ###  示例
> 
> 单击任一工作表的超链接时，弹消息框提醒用户。
> 
> ```php
> function Application_SheetFollowHyperlink(Sh, Target)
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
> ###  语法
> 
> function **Application\_SheetSelectionChange**(*Sh, Target*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型   | 说明          |
> | -------- | ----- | ------ | ----------- |
> | *Sh*     | 必选    | Object | 选区改变的工作表对象。 |
> | *Target* | 必选    | Range  | 新选定的区域。     |
> 
> ###  示例
> 
> 当工作表上的选定区域发生更改时，弹消息框提醒用户。
> 
> ```php
> function Application_SheetSelectionChange(Sh, Target)
> {
> MsgBox("工作表\"" + Sh.Name + "\"选中的区域是："+Target.Address() + "。")
> } 
> ```
> 
>  
  
  
**WindowActivate** 

---

> 任一工作簿窗口被激活时，将触发此事件。 
> 
> ###  语法
> 
> function **Application\_WindowActivate** (*Wb* *, Wn*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称    | 必选/可选 | 数据类型     | 说明       |
> | ----- | ----- | -------- | -------- |
> | *Wb*  | 必选    | Workbook | 激活工作簿对象。 |
> | **Wn* | 必选    | Window   | 激活窗口对象。  |
> 
> ###  示例
> 
> 任一工作簿窗口被激活时，输出激活的窗口标题。 
> 
> ```php
> function Application_WindowActivate(Wb, Wn)
> {
>    Debug.Print("当前激活窗口是："+ Wn.Caption)
> }
> ```
> 
>  
  
  
**WindowDeactivate** 

---

> 任一工 作簿窗口被切换到非激活状态时触发此事件。 
> 
> ###  语法
> 
> function **Application\_WindowDeactivate** (*Wb* *, Wn*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型     | 说明               |
> | ---- | ----- | -------- | ---------------- |
> | *Wb* | 必选    | Workbook | 被切换到非激活状态的工作簿对象。 |
> | *Wn* | 必选    | Window   | 被切换到非激活状态的窗口对象。  |
> 
> ###  示例
> 
> 任一工 作簿窗口被切换到非激活状态时 ，输出激活的窗口标题。
> 
> ```php
> function Application_WindowDeactivate(Wb, Wn)
> {
> Debug.Print("当前被切换到非激活窗口是："+ Wn.Caption)
> } 
> ```
> 
>  
  
  
**WindowResize** 

---

> 任一工作簿窗口调整大小时将触发此事件。 
> 
> ###  语法
> 
> function **Application\_WindowResize** (*Wb* *, Wn*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型     | 说明            |
> | ---- | ----- | -------- | ------------- |
> | *Wb* | 必选    | Workbook | 调整窗口大小的工作簿对象。 |
> | *Wn* | 必选    | Window   | 调整窗口大小的窗口对象。  |
> 
> ###  示例
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_WindowResize(Wb, Wn)
> {
>    MsgBox("窗口\""+ Wn.Caption + "\"大小发生了改变。")
> }
> ```

  
**WorkbookActivate** 

---

> 工作簿被激活时，将触发此事件。
> 
> ###  语法
> 
> function **Application\_WorkbookActivate**(*Wb*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> 参数 
> 
> | 名称   | 必选/可选 | 数据类型     | 说明      |
> | ---- | ----- | -------- | ------- |
> | *Wb* | 必选    | Workbook | 被切换的工作簿 |
> 
> 示例 
> 
> 工作簿被激活时，弹消息框提醒用户。  
> 
> ```php
> function Application_WorkbookActivate(Wb)
> {
> MsgBox("工作簿:" + Wb.Name +"被激活了。");
> }
> ```
> 
>  

#### 

  
**WorkbookAfterSave** 

---

> 工作簿被保存之后触发此事件。
> 
> ###  语法
> 
> function **Application\_** **WorkbookAfterSave**(*Wb,* *Success*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称        | 必选/可选 | 数据类型     | 说明                         |
> | --------- | ----- | -------- | -------------------------- |
> | *Wb*      | 必选    | Workbook | 保存的工作簿                     |
> | *Success* | 必选    | Boolean  | 如果保存操作成功，则为true; 否则为false。 |
> 
> ###  示例
> 
> 工作簿被保存后，弹消息框提醒用户。
> 
> ```php
> function Application_WorkbookAfterSave(Wb, Success)
> {
> if (Success)
> {
> 	MsgBox("文档被成功保存！")
> }
> }
> ```
> 
>  

  
**WorkbookBeforeClose** 

---

> 有工作簿被关闭之前触发此事件。
> 
> ###  语法
> 
> function **Application\_** **WorkbookBeforeClose**(*Wb,* *Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> 参数 
> 
> | 名称       | 必选/可选 | 数据类型     | 说明                              |
> | -------- | ----- | -------- | ------------------------------- |
> | *Wb*     | 必选    | Workbook | 关闭的工作簿                          |
> | *Cancel* | 必选    | Object   | 如果设置其属性Value为 **true**，则取消此次关闭。 |
> 
> 示例 
> 
> 有工作簿被关闭时，弹消息框询问用户是否取消，用户点击“是”就会取消关闭工作簿。
> 
> ```php
> function Application_WorkbookBeforeClose(Wb, Cancel)
> {
> var ret = MsgBox("工作簿:"+ Wb.Name+"正在关闭。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> } 
> ```
> 
>  

  
**WorkbookBeforePrint** 

---

> 有工作簿被打印之前触发此事件
> 
> ###  语法
> 
> function **Application\_** **WorkbookBeforePrint**(*Wb,* *Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称       | 必选/可选 | 数据类型     | 说明                              |
> | -------- | ----- | -------- | ------------------------------- |
> | *Wb*     | 必选    | Workbook | 打印的工作簿                          |
> | *Cancel* | 必选    | Object   | 如果设置其属性Value为 **true**，则取消此次打印。 |
> 
> ###  示例
> 
> 有工作簿被印前时，弹消息框询问用户是否取消，用户点击“是”就会取消打印工作簿。
> 
> ```php
> function Application_WorkbookBeforePrint(Wb, Cancel)
> {
> var ret = MsgBox("工作簿:"+ Wb.Name+"即将打印。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```
> 
>  

  
**WorkbookBeforeSave** 

---

> 有工作簿被保存之前触发此事件。
> 
> ###  语法
> 
> function **Application\_** **WorkbookBeforeSave**(*Wb,* *S* *aveAsUI*，*Cancel*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称            | 必选/可选 | 数据类型     | 说明                                  |
> | ------------- | ----- | -------- | ----------------------------------- |
> | *Wb*          | 必选    | Workbook | 保存的工作簿                              |
> | *S* *aveAsUI* | 必选    | Boolean  | 如果为**true**则表示此次保存操作将会弹出保存或是另存为对话框。 |
> | *Cancel*      | 必选    | Object   | 如果设置其属性Value为 **true**，则取消此次保存。     |
> 
>  
> ###  示例
> 
> 有工作簿被保存之前，如果会弹出保存或是另存为对话框的情况，弹消息框询问用户是否取消，用户点击“是”就会取消保存工作簿。
> 
> ```php
> function Application_WorkbookBeforeSave(Wb, SaveAsUI, Cancel)
> {
> if (SaveAsUI){
> 	var ret = MsgBox("工作簿:"+ Wb.Name+"即将保存。是否取消？", jsYesNo);
> 	if (ret == jsResultYes)
> 		Cancel.Value = true;
> }
> }
> ```
> 
>  

  
**WorkbookDeactivate** 

---

> 工作簿被切换到非激活（非活动）状态时触发此事件。
> 
> ###  语法
> 
> function **Application\_** **WorkbookDeactivate**(*Wb*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型     | 说明      |
> | ---- | ----- | -------- | ------- |
> | *Wb* | 必选    | Workbook | 被切换的工作簿 |
> 
> ###  示例
> 
> 工作簿被切换到非激活（非活动）状态时，弹消息框提醒用户。
> 
> ```php
> function Application_WorkbookDeactivate(Wb)
> {
> MsgBox("工作簿:" + Wb.Name +"被切换到非激活了。");
> }
> ```
> 
>  

  
**WorkbookNewSheet** 

---

> 该工作簿中创建新工作表时触发此事件。
> 
> ###  语法
> 
> function **Application\_WorkbookNewSheet**(*Wb,* *Sh*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型     | 说明          |
> | ---- | ----- | -------- | ----------- |
> | *Wb* | 必选    | Workbook | 新建工作表所在的工作簿 |
> | *Sh* | 必选    | Object   | 新建的工作表      |
> 
> ###  示例
> 
> 创建新工作表时，弹消息框提醒用户。
> 
> ```php
> function Application_WorkbookNewSheet(Wb, Sh)
> {
> MsgBox("新建了工作表：" + Sh.Name)
> }
> ```
> 
>  
  
  
**WorkbookOpen** 

---

> 工作簿打开时触发此事件
> 
> ###  语法
> 
> function **Application\_** **WorkbookOpe** **n**(*Wb*)  
> {  
> *function\_body\_statements*  
> }
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。
> 
> ### 
> 
> ###  参数
> 
> | 名称   | 必选/可选 | 数据类型     | 说明     |
> | ---- | ----- | -------- | ------ |
> | *Wb* | 必选    | Workbook | 打开的工作簿 |
> 
>  
> 示例该工作簿被打开时，弹消息框提醒用户。
> 
> ```php
> function Application_WorkbookOpen(Wb)
> {
> MsgBox("打开了工作簿：" + Wb.Name);
> } 
> ```
