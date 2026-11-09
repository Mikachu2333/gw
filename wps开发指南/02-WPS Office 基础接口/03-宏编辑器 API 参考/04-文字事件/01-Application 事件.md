# Application 事件 

---

  
###  事件列表

| 名称                      | 触发时机                         |
| ----------------------- | ---------------------------- |
| DocumentBeforeClose     | 当文档关闭前时触发此事件。                |
| DocumentBeforePrint     | 当文档打印之前时触发此事件。               |
| DocumentChange          | 当创建新文档、打开已有文档或者切换激活文档时触发此事件。 |
| DocumentOpen            | 当任一文档打开时触发此事件。               |
| NewDocument             | 当创建新文档时触发 此事件。               |
| Quit                    | 当关闭退出文字组件进程时触发此事件。           |
| WindowActivate          | 当激活文档窗口时触发此事件。               |
| WindowBeforeDoubleClick | 当双击任一文档窗口之前触发 此事件。           |
| WindowBeforeRightClick  | 当右击任一文档窗口之前 触发此事件。           |
| WindowDeactivate        | 任一文档 窗口被切换到非激活状态时触发此事件。      |
| WindowSelectionChange   | 活动窗口所选内容更改时将触发此事件。           |
| WindowSize              | 任一文档窗口调整大小时将触发 此事件。          |
| XMLSelectionChange      | 当前所选内容的 XML 父节点更改时将触发此事件。    |
| XMLValidationError      | 文档中存在验证错误时时，将触发此事件。          |

  
###  事件

**DocumentBeforeClose** 

---

> 当文档关闭前时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_DocumentBeforeClose** (*Doc, Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### **参数** 
> 
> | 名称       | 必选/可选 | 数据类型       | 说明                             |
> | -------- | ----- | ---------- | ------------------------------ |
> | *Doc*    | 必选    | Document对象 | 关闭的文档对象                        |
> | *Cancel* | 必选    | Object     | 如果设置其属性Value为 **true**，则不关闭文稿。 |
> 
> ###  示例
> 
> 当关闭一个文档时，弹消息框提醒用户即将关闭文档，询问是否取消。用户点击“是”就会取消关闭文档。  
> 
> ```php
> function Application_DocumentBeforeClose(Doc, Cancel)
> {
> var ret = MsgBox("文档\"" + Doc.Name + "\"" +"正在关闭。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```

**DocumentBeforePrint** 

---

> 当文档打印之前时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_DocumentBeforePrint** (*Doc, Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型       | 说明                             |
> | -------- | ----- | ---------- | ------------------------------ |
> | *Doc*    | 必选    | Document对象 | 关闭的文档对象                        |
> | *Cancel* | 必选    | Object     | 如果设置其属性Value为 **true**，则不打印文档。 |
> 
> ###  示例
> 
> 当打印一个文档时，弹消息框提醒用户即将打印文档，询问是否取消。用户点击“是”就会取消打印文档。 
> 
> ```php
> function Application_DocumentBeforePrint(Doc, Cancel)
> {
> var ret = MsgBox("即将对文档\"" + Doc.Name + "\"" +"进行打印。是否取消？", jsYesNo);
> if (ret == jsResultYes)
> Cancel.Value = true;
> }
> ```

  
**DocumentChange** 

---

> 当创建新文档、打开已有文档或者切换激活文档时触发 此事件。 
> 
> ### 语法 
> 
> function **Application\_DocumentChange** ()  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 示例 
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_DocumentChange()
> {
> MsgBox("文档切换了！");
> }
> ```
> 
>  

  
**DocumentOpen** 

---

> 当任一文档打开时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_DocumentOpen** (*Doc*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称    | 必选/可选 | 数据类型       | 说明      |
> | ----- | ----- | ---------- | ------- |
> | *Doc* | 必选    | Document对象 | 关闭的文档对象 |
> 
> ###  示例
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_DocumentOpen(Doc)
> {
> MsgBox("打开了文档:" + Doc.Name);
> }
> ```
> 
>  

  
**NewDocument** 

---

> 当创建新文档时触发 此事件。 
> 
> ### 语法 
> 
> function **Application\_NewDocument** (*Doc*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称    | 必选/可选 | 数据类型       | 说明      |
> | ----- | ----- | ---------- | ------- |
> | *Doc* | 必选    | Document对象 | 关闭的文档对象 |
> 
> ###  示例
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_NewDocument(Doc)
> {
> MsgBox("新建了文档:" + Doc.Name);
> }
> ```
> 
>  

  
**Quit** 

---

> 当关闭退出文字组件进程时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_Quit** ()  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 

**WindowActivate** 

---

> 当激活文档窗口时触发 此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowActivate** (*Doc, Wn*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称    | 必选/可选 | 数据类型       | 说明      |
> | ----- | ----- | ---------- | ------- |
> | *Doc* | 必选    | Document对象 | 激活的文档对象 |
> | Wn    | 必选    | Window对象   | 激活的窗口对象 |
> 
> ###  示例
> 
> 当切换文档窗口时，输出激活的窗口标题。 
> 
> ```php
> function Application_WindowActivate(Doc,  Wn)
> {
> Debug.Print("当前激活窗口是："+ Wn.Caption)
> }
> ```

  
**WindowBeforeDoubleClick** 

---

> 当双击任一文档窗口之前触发此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowBeforeDoubleClick** (**Sel , Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型      | 说明                              |
> | -------- | ----- | --------- | ------------------------------- |
> | *Sel*    | 必选    | Selection | 当前所选内容。                         |
> | *Cancel* | 必选    | Object    | 如果设置其属性Value为 **true**，则取消此次双击。 |
> 
> ###  示例
> 
> 当在一个窗口内双击时，弹消息框提醒用户，询问是否取消。用户点击“是”就会取消该操作。 
> 
> ```php
> function Application_WindowBeforeDoubleClick(Sel, Cancel)
> {
> var ret = MsgBox("您进行了双击，当前选中内容是：" + Sel +"是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```

  
**WindowBeforeRightClick** 

---

> 当右击任一文档窗口之前触发 此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowBeforeRightClick** (**Sel , Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称       | 必选/可选 | 数据类型      | 说明                              |
> | -------- | ----- | --------- | ------------------------------- |
> | *Sel*    | 必选    | Selection | 当前所选内容。                         |
> | *Cancel* | 必选    | Object    | 如果设置其属性Value为 **true**，则取消此次右击。 |
> 
> ###  示例
> 
> 当在一个窗口内右击时，弹消息框提醒用户，询问是否取消。用户点击“是”就会取消该操作。 
> 
> ```php
> function Application_WindowBeforeRightClick(Sel, Cancel)
> {
> var ret = MsgBox("您进行了右击，当前选中内容是：" + Sel +"是否取消？", jsYesNo);
> if (ret == jsResultYes)
> 	Cancel.Value = true;
> }
> ```

  
**WindowDeactivate** 

---

> 任一文档 窗口被切换到非激活状态时触发此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowDeactivate** (*Doc, Wn*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称    | 必选/可选 | 数据类型       | 说明             |
> | ----- | ----- | ---------- | -------------- |
> | *Doc* | 必选    | Document对象 | 被切换到非激活状态的文档对象 |
> | *Wn*  | 必选    | Window对象   | 被切换到非激活状态的窗口对象 |
> 
> ###  示例
> 
> 当切换文档窗口时，输出被切换到非激活状态的窗口标题。 
> 
> ```php
> function Application_WindowDeactivate(Doc,  Wn)
> {
> Debug.Print("当前被切换到非激活窗口是："+ Wn.Caption)
> }
> ```

  
**WindowSelectionChange** 

---

> 活动窗口所选内容更改时将触发此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowSelectionChange** (*Sel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称     | 必选/可选 | 数据类型        | 说明      |
> | ------ | ----- | ----------- | ------- |
> | **Sel* | 必选    | Selection对象 | 当前所选内容。 |
> 
> ###  示例
> 
> 当活动窗口所选内容更改时触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_WindowSelectionChange(Sel)
> {
> MsgBox("当前选中内容是：" + Sel);
> }
> ```
> 
>  
  
  
**WindowSize** 

---

> 任一文档窗口调整大小时将触发此事件。 
> 
> ### 语法 
> 
> function **Application\_WindowSize** (*Doc, Wn*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称    | 必选/可选 | 数据类型       | 说明          |
> | ----- | ----- | ---------- | ----------- |
> | *Doc* | 必选    | Document对象 | 调整窗口大小的文档对象 |
> | *Wn*  | 必选    | Window对象   | 调整窗口大小的窗口对象 |
> 
> ###  示例
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_WindowSize(Doc, Wn)
> {
> MsgBox("窗口\""+ Wn.Caption + "\"大小发生了改变。")
> }
> ```
> 
>  

**XMLSelectionChange** 

---

> 当前所选内容的 XML 父节点更改时将触发此事件。 
> 
> ### 语法 
> 
> function **Application\_XMLSelectionChange** (*Sel, OldXMLNode, NewXMLNode, Reason*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称           | 必选/可选 | 数据类型        | 说明              |
> | ------------ | ----- | ----------- | --------------- |
> | *Sel*        | 必选    | Selection对象 | 当前所选内容。         |
> | *OldXMLNode* | 必选    | XMLNode对象   | 插入区域移动前的XML 节点。 |
> | *NewXMLNode* | 必选    | XMLNode对象   | 插入区域移动后的XML 节点。 |
> | *Reason*     | 必选    | long        | 更改的操作           |
> 
> ###  示例
> 
> 以下示例在将新元素插入到文档中时，对新添加的 XML 元素进行验证。 
> 
> ```scss
> function Application_XMLSelectionChange(Sel, OldXMLNode, NewXMLNode, Reason)
> {
> if (Reason == wdXMLSelectionChangeReasonInsert)
> {
> 	if (OldXMLNode !== undefined && OldXMLNode !== null)
> 		NewXMLNode.Validate()
> }
> }
> ```
> 
>  

  
**XMLValidationError** 

---

> 文档中存在验证错误时时，将触发此事件。 
> 
> ### 语法 
> 
> function **Application\_XMLValidationError** (*XMLNode*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称         | 必选/可选 | 数据类型      | 说明        |
> | ---------- | ----- | --------- | --------- |
> | **XMLNode* | 必选    | XMLNode对象 | 无效的 XML节点 |
> 
> ###  示例
> 
> 当触发事件时，弹出消息框提醒用户。 
> 
> ```php
> function Application_XMLValidationError(XMLNode)
> {
> MsgBox("XML 节点"  + XMLNode.BaseName +" 无效:" + XMLNode.ValidationErrorText)
> }
> ```
> 
>
