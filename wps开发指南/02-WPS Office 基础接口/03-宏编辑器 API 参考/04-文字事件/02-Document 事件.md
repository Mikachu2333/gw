# Document 事件 

---

  
###  事件列表

| 名称                                | 触发时机                                           |
| --------------------------------- | ---------------------------------------------- |
| Close                             | 当文档关闭时触发此事件。                                   |
| ContentControlAfterAdd            | 当内容控件被添加到文档之后触发此事件。                            |
| ContentControlBeforeContentUpdate | 当内容控件的内容发生来自XML映射内容更新时触发此事件。                   |
| ContentControlBeforeDelete        | 当内容控件被从文档删除之前触发此事件。                            |
| ContentControlBeforeStoreUpdate   | 当内容控件的内容去更新XML映射内容时触发此事件。                      |
| ContentControlOnEnter             | 当进入内容控件时触发此事件。                                 |
| ContentControlOnExit              | 当退出内容控件时 触发此事件。                                |
| New                               | 当基于模板创建新文档时触发，此事件只发向基于的模板文档对象。                 |
| Open                              | 文档打开时触发。                                       |
| XMLAfterInsert                    | 向文档添加XML 元素时触发。如果同时向文档添加多个元素，则插入的每个元素都会触发这一事件。 |
| XMLBeforeDelete                   | 从文档删除XML 元素时触发。如果同时向文档删除多个元素，则删除的每个元素都会触发这一事件。 |

  
###  事件

**Close** 

---

> 当文档关闭时触发此事件。 
> 
> ### 语法 
> 
> function **Document\_Close**(*Wb*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ###  示例
> 
> 当关闭文档时，弹消息框提醒用户。  
> 
> ```php
> function Document_Close()
> {
> MsgBox("文档已关闭")
> }
> ```

#### 

  
**ContentControlAfterAdd** 

---

> 当内容控件被添加到文档之后触发 此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlAfterAdd** (*NewContentControl, InUndoRedo*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称                   | 必选/可选 | 数据类型             | 说明                   |
> | -------------------- | ----- | ---------------- | -------------------- |
> | **NewContentControl* | 必选    | ContentControl对象 | 要添加的内容控件。            |
> | **InUndoRedo*        | 必选    | Boolean          | 此次添加操作是否是撤销或恢复操作所发生的 |

  
**ContentControlBeforeContentUpdate** 

---

> 当内容控件的内容发生来自XML映射内容更新时触发此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlBeforeContentUpdate** (*ContentControl, Content*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称                | 必选/可选 | 数据类型             | 说明                                    |
> | ----------------- | ----- | ---------------- | ------------------------------------- |
> | **ContentControl* | 必选    | ContentControl对象 | 要更新的内容控件。                             |
> | **Content*        | 必选    | String           | 控件的更新内容。 此参数用于更改 XML 数据的内容，以及设置其显示格式。 |
> 
> ### **备注** 
> 
> 对于重复内容，控件不触发此事件。 

  
**ContentControlBeforeDelete** 

---

> 当内容控件被从文档删除之前触发此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlBeforeDelete** (*OldContentControl, InUndoRedo*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称                   | 必选/可选 | 数据类型             | 说明                   |
> | -------------------- | ----- | ---------------- | -------------------- |
> | **OldContentControl* | 必选    | ContentControl对象 | 要删除的内容控件。            |
> | *InUndoRedo*         | 必选    | Boolean          | 此次删除操作是否是撤销或恢复操作所发生的 |

  
**ContentControlBeforeStoreUpdate** 

---

> 当内容控件的内容去更新XML映射内容时触发此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlBeforeStoreUpdate** (*ContentControl, Content*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 
> 
> ### 参数 
> 
> | 名称               | 必选/可选 | 数据类型             | 说明                                      |
> | ---------------- | ----- | ---------------- | --------------------------------------- |
> | *ContentControl* | 必选    | ContentControl对象 | 要更新的内容控件。                               |
> | *Content*        | 必选    | String           | 去更新XML映射的内容。 在将内容设置到XML映射之前，可使用此参数更改该值。 |
> 
> ### 
> 
> ### 备注 
> 
> 对于重复内容，控件不触发此事件。

  
**ContentControlOnEnter** 

---

> 当进入内容控件时 触发此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlOnEnter** (*ContentControl*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称               | 必选/可选 | 数据类型             | 说明       |
> | ---------------- | ----- | ---------------- | -------- |
> | *ContentControl* | 必选    | ContentControl对象 | 进入的内容控件。 |
> 
> 备注 
> 
> 此事件仅对您要进入的内容控件而不对内容父控件触发。 例如，如果您的一个文本框内容控件嵌入内容组控件，您要将光标置于该文本框内容控件，则此事件仅对该文本框内容控件触发一次，而不对内容父组控件触发。

  
**ContentControlOnExit** 

---

> 当退出内容控件时触发 此事件。 
> 
> ### 语法 
> 
> function **Document\_ContentControlOnExit**(*ContentControl, Cancel*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称               | 必选/可选 | 数据类型             | 说明                            |
> | ---------------- | ----- | ---------------- | ----------------------------- |
> | *ContentControl* | 必选    | ContentControl对象 | 要离开的内容控件。                     |
> | **Cancel*        | 必选    | Object           | 如果设置其属性Value为 **true**，则取消退出。 |
> 
> 备注 
> 
> 此事件仅对您要进入的内容控件而不对内容父控件触发。 例如，如果您的一个文本框内容控件嵌入内容组控件，您要将光标置于该文本框内容控件，则此事件仅对该文本框内容控件触发一次，而不对内容父组控件触发。

  
**New** 

---

> 当基于模板创建新文档时触发，此事件只发向基于的模板文档对象。 
> 
> ### 语法 
> 
> function **Document\_New**()  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ###  示例
> 
> 当模板创建新文档时，弹消息框提醒用户。
> 
> ```php
> function Document_New()
> {
> MsgBox("模板新建了一个文档！")
> }
> ```

  
**Open** 

---

> 文档打开时触发。 
> 
> ### 语法 
> 
> function **Document\_Open**(*Wb*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ###  示例
> 
> 当文档打开时，弹消息框提醒用户。
> 
> ```php
> function Document_Open()
> {
> MsgBox("文档打开了！")
> }
> ```

  
**XMLAfterInsert** 

---

> 向文档添加XML 元素时触发。如果同时向文档添加多个元素，则插入的每个元素都会触发这一事件。 
> 
> ### 语法 
> 
> function **Document\_XMLAfterInsert** (*NewXMLNode, InUndoRedo*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ### 参数 
> 
> | 名称            | 必选/可选 | 数据类型      | 说明                   |
> | ------------- | ----- | --------- | -------------------- |
> | **NewXMLNode* | 必选    | XMLNode对象 | 新添加的 XML 节点。         |
> | **InUndoRedo* | 必选    | Boolean   | 此次添加操作是否是撤销或恢复操作所发生的 |
> 
> ### 备注 
> 
> 如果**InUndoRedo**参数为true，不要在**XMLAfterInsert** 和 **XMLBeforeDelete** 中改变文档的XML。 
> 
> 如果**InUndoRedo** 参数为 false，您可以在**XMLAfterInsert** 和 **XMLBeforeDelete** 中改变文档的XML，但请注意 **XMLAfterInsert** 和 **XMLBeforeDelete** 事件会因此存在嵌套，从而导致无限循环。 您可以在全局使用Boolean 变量判断是否重入来防止无限循环的出现。  
> 
> ###  示例
> 
> 向文档添加XML 元素时，验证一个新添加的节点，如果节点无效，则显示一条描述验证错误的消息。 
> 
> ```scss
> function Document_XMLAfterInsert(NewXMLNode, InUndoRedo)
> {
> NewXMLNode.Validate()
> if (NewXMLNode.ValidationStatus != wdXMLValidationStatusOK)
> {
> 	MsgBox(NewXMLNode.ValidationErrorText)
> }
> }
> ```

  
**XMLBeforeDelete** 

---

> 从文档删除XML 元素时触发。如果同时向文档删除多个元素，则删除的每个元素都会触发这一事件。 
> 
> ### 语法 
> 
> function **Document\_XMLBeforeDelete** (*DeletedRange, OldXMLNode, InUndoRedo*)  
> {  
> *function\_body\_statements*  
> }  
> 
> **function\_body\_statements* 代表了响应函数的函数体的语句。 
> 
> ###  参数
> 
> | 名称             | 必选/可选 | 数据类型      | 说明                                                                      |
> | -------------- | ----- | --------- | ----------------------------------------------------------------------- |
> | *DeletedRange* | 必选    | Range对象   | 被删除的 XML 元素的内容。 如果仅删除元素，并且未关联文本，DeletedRange 参数将不存在，因此将设置为 **Nothing**。 |
> | **OldXMLNode*  | 必选    | XMLNode对象 | 删除的 XML 节点。                                                             |
> | **InUndoRedo*  | 必选    | Boolean   | 此次添加操作是否是撤销或恢复操作所发生的                                                    |
> 
> 备注 
> 
> 如果**InUndoRedo**参数为true，不要在**XMLAfterInsert** 和 **XMLBeforeDelete** 中改变文档的XML。
> 
> 如果**InUndoRedo** 参数为 false，您可以在**XMLAfterInsert** 和 **XMLBeforeDelete** 中改变文档的XML，但请注意 **XMLAfterInsert** 和 **XMLBeforeDelete** 事件会因此存在嵌套，从而导致无限循环。 您可以在全局使用Boolean 变量判断是否重入来防止无限循环的出现。
> 
> ###  示例
> 
> 在 XML 元素被删除时。 如果元素中包含文本，则显示一条信息询问用户是否要删除元素所包含的文本。 如果用户通过单击"否"进行响应，则元素的内容将复制到剪贴板。
> 
> ```php
> function Document_XMLBeforeDelete(DeletedRange, OldXMLNode, InUndoRedo)
> {
> var ret = MsgBox("是否删除文本：" + DeletedRange.Text + "?", jsYesNo);
> if (ret == jsResultNo)
> {
> 	DeletedRange.Copy();
> 	MsgBox("文本内容已经复制到剪切板。")
> }	
> }
> ```
