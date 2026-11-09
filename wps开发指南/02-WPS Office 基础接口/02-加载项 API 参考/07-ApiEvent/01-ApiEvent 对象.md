# ApiEvent 对象

ApiEvent 对象用于接收 WPS 应用程序各种事件通知。

## 说明

 **ApiEvent** 对象用于注册和反注册 **WPS** 事件回调函数，注册一个事件回调函数的接口为： **ApiEvent.AddApiEventListener(eventName, func)** ， 其中 **eventName** 表示要响应的事件类型，这些事件类型由wps内部规定， **func** 表示要回调的js函数，当wps有某个事件被触发时，这些注册的js函数会被wps执行。 例如需要在打开文档时，弹出一个打开文档后的消息框，示例代码如下如下：

```javascript
Application.ApiEvent.AddApiEventListener("DocumentOpen", (doc)=>{alert("文档已打开，文档名是： " + doc.Name)});
```

 同样，如果不再需要某个已注册的回调函数，可以把相关的回调函数进行反注册，wps内部也会在网页关闭时，把网页中所有已注册的回调函数自动反注册，反注册一个回调函数的方式为： **ApiEvent.RemoveApiEventListener(eventName)** 。其中 **eventName** 表示事件类型，反注册后当前网页不再有此事件的回调函数被执行。

```javascript
Application.ApiEvent.RemoveApiEventListener("DocumentOpen")
```

 api事件分为询问型事件和通知型事件，询问型事件是指wps在准备做某一个事情时发出事件回调，第三方代码有机会来控制这个事情， 通知型事件是指wps做了某个事件后通知第三方代码这个事情已经结束，这种情况下事情已然发生。以上面的几个事件类型为例， **DocumentBeforeClose** 和 **DocumentBeforeSave** 事件是询问型事件，其它几个是通知型事件。下面分别对两种事件各举一个例子

**1.询问型事件：**  
示例：当用户想保存一个文件时，通过js事件回调禁止保存这个文件,代码如下：

```javascript
 let func = (doc)=>{
	alert(doc.Name)
	Application.ApiEvent.Cancel = true
}										
Application.ApiEvent.AddApiEventListener("DocumentBeforeSave", func) 
```

 上面代码的意思是在文件保存前 **OnDocBeforeSave** 这个js函数被调用到，此时js函数里边通过 **ApiEvent** . **Cancel** 这个属性设置了要取消掉这次流程， wps执行完 **OnBeforeSave** 这个js函数后，检测到[ **Cancel** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/ApiEvent/member/Cancel)属性被设置为true, 从而中止了保存流程。 对于询问型事件，一般是通过 **Cancel** 属性来继续或是中止流程的执行。

**2.通知型事件：**  
示例：示例：当用户打开文件后弹出这个文件的磁盘路径，代码如下：

```javascript
 let func = (doc)=>{
	alert(doc.Name)
}										
Application.ApiEvent.AddApiEventListener("DocumentOpen", func) 
```

 上面代码的意思是在文件打开这个事件发生后，wps把事件发生后通知给了网页上注册的回调函数。

 关于事件类型的定义，在wps/et/wpp中各有不同，事件类型也基本上保持与office标准的事件类型相对应，详细的事件类型如下表：

  
 wps文字支持的事件类型如下：

| 名称                                | 级别          | 类型  | 触发时机                         |
| --------------------------------- | ----------- | --- | ---------------------------- |
| DocumentOpen                      | Application | 通知型 | 文档打开时触发。                     |
| DocumentBeforeClose               | Application | 询问型 | 任一打开的文档关闭之前触发此事件。            |
| DocumentBeforeSave                | Application | 询问型 | 任一打开的文档保存之前触发此事件。            |
| DocumentAfterClose                | Application | 通知型 | 任一打开的文档关闭之后触发此事件。            |
| DocumentChange                    | Application | 通知型 | 任一打开的文档内容发生变化时触发此事件。         |
| DocumentBeforePrint               | Application | 询问型 | 任一打开的文档打印之前触发此事件。            |
| DocumentNew                       | Application | 通知型 | 新建任一文档时触发此事件。                |
| DocumentRightsInfo                | Application | 通知型 | 当操作文档权限时会触发此事件。              |
| DocumentBeforeCopy                | Application | 询问型 | 在任一文档复制之前触发该事件。              |
| DocumentBeforePaste               | Application | 询问型 | 在任一文档粘贴之前触发该事件。              |
| DocumentBeforeNew                 | Application | 询问型 | 在任一文档新建之前触发该事件。              |
| DocumentBeforeOpen                | Application | 询问型 | 在任一文档打开之前触发该事件。              |
| DocumentAfterSave                 | Application | 通知型 | 在任一文档保存之后触发该事件。              |
| DocumentViewFocusIn               | Application | 通知型 | 在任一文档获取到焦点之后触发该事件。           |
| DocumentViewFocusOut              | Application | 通知型 | 在任一文档失去焦点之后触发该事件。            |
| DocumentAfterPrint                | Application | 通知型 | 在任一文档打印之后触发该事件。              |
| WindowActivate                    | Application | 通知型 | 当激活文档窗口时触发此事件。               |
| WindowDeactivate                  | Application | 通知型 | 任一文档窗口被切换到非激活状态时触发此事件。       |
| WindowSelectionChange             | Application | 通知型 | 活动窗口所选内容更改时将触发此事件。           |
| WindowBeforeRightClick            | Application | 询问型 | 当右击任一文档窗口之前触发此事件。            |
| WindowBeforeDoubleClick           | Application | 询问型 | 当双击任一文档窗口之前触发此事件。            |
| ApplicationQuit                   | Application | 通知型 | 当退出文字组件进程时触发此事件。             |
| AfterLogin                        | Application | 通知型 | 在用户登陆之后触发此事件。                |
| AfterLogout                       | Application | 通知型 | 在用户登出之后触发此事件。                |
| AfterVIPInfoChanged               | Application | 通知型 | 在用户会员信息变化之后触发此事件。            |
| AfterWebExtensionDataRangeChange  | Application | 通知型 | 在网络扩展数据范围变化之后触发此事件。          |
| AfterTaskPaneShow                 | Application | 通知型 | 当任务窗格显示之后触发此事件。              |
| AfterTaskPaneHidden               | Application | 通知型 | 当任务窗格隐藏之后触发此事件。              |
| QueryDocumentPrintCopies          | Application | 询问型 | 当打印复本排队时触发此事件。               |
| ContentChange                     | Application | 通知型 | 当文档内容发生变化时触发此事件。             |
| SelectionAfterStyleChange         | Application | 通知型 | 当选择的内容字体变化之后触发此事件。           |
| FileAfterSave                     | Application | 通知型 | 在文件保存之后触发该事件。                |
| ContentControlAfterAdd            | Application | 通知型 | 当内容控件被添加到文档之后触发此事件。          |
| ContentControlBeforeDelete        | Application | 通知型 | 当内容控件被从文档删除之前触发此事件。          |
| ContentControlOnExit              | Application | 通知型 | 当退出内容控件时触发此事件。               |
| ContentControlOnEnter             | Application | 通知型 | 当进入内容控件时触发此事件。               |
| ContentControlBeforeStoreUpdate   | Application | 通知型 | 当内容控件的内容去更新XML映射内容时触发此事件。    |
| ContentControlBeforeContentUpdate | Application | 通知型 | 当内容控件的内容发生来自XML映射内容更新时触发此事件。 |

  
 wps表格支持的api事件为：

| 名称                             | 级别          | 类型  | 触发时机                             |
| ------------------------------ | ----------- | --- | -------------------------------- |
| WorkbookOpen                   | Application | 通知型 | 当打开一个工作簿时触发此事件。                  |
| NewWorkbook                    | Application | 通知型 | 当新建工作簿时触发此事件。                    |
| WorkbookBeforeSave             | Application | 询问型 | 任一工作簿被保存之前触发此事件。                 |
| WorkbookAfterSave              | Application | 通知型 | 任一工作簿被保存之后触发此事件。                 |
| WorkbookBeforeClose            | Application | 询问型 | 任一打开的工作簿关闭之前触发此事件。               |
| WorkbookBeforePrint            | Application | 询问型 | 在打印任一打开的工作簿之前触发此事件。              |
| SheetSelectionChange           | Application | 通知型 | 该工作簿任一工作表上的选定区域发生更改时，将触发此事件。     |
| SheetChange                    | Application | 通知型 | 当用户或外部链接更改了该工作簿任一工作表中的单元格时触发此事件。 |
| SheetActivate                  | Application | 通知型 | 当激活任一工作表时触发此事件。                  |
| SheetDeactivate                | Application | 通知型 | 当该工作簿任一工作表被切换到非激活状态时触发此事件。       |
| WindowActivate                 | Application | 通知型 | 任一工作簿窗口被激活时，将触发此事件。              |
| WindowDeactivate               | Application | 通知型 | 任一工作簿窗口被切换到非激活状态时触发此事件。          |
| SheetBeforeDoubleClick         | Application | 询问型 | 当双击任一工作表之前触发此事件。                 |
| SheetBeforeRightClick          | Application | 询问型 | 当右击任一工作表之前触发此事件 。                |
| SheetCalculate                 | Application | 通知型 | 在任一工作表进行计算时触发此事件。                |
| WorkbookActivate               | Application | 通知型 | 任一工作簿被激活时，将触发此事件。                |
| WorkbookDeactivate             | Application | 通知型 | 任一工作簿被切换到非激活状态时触发此事件。            |
| WorkbookNewSheet               | Application | 通知型 | 在任一打开的工作簿中创建新工作表时触发此事件。          |
| WindowResize                   | Application | 通知型 | 任一工作簿窗口调整大小时将触发此事件。              |
| SheetFollowHyperlink           | Application | 通知型 | 单击任一工作表的超链接时触 发此事件。              |
| AfterCalculate                 | Application | 通知型 | 当计算完成后触发此事件。                     |
| SheetBeforeDelete              | Application | 通知型 | 当删除任一工作表之前触发此事件。                 |
| DocumentRightsInfo             | Application | 通知型 | 当操作文档权限时会触发此事件。                  |
| AfterLogin                     | Application | 通知型 | 当用户登陆之后触发此事件。                    |
| AfterLogout                    | Application | 通知型 | 当用户登出之后触发此事件。                    |
| AfterVIPInfoChanged            | Application | 通知型 | 当用户的会员信息变化之后触发此事件。               |
| AfterWebExtWatchingDataUpdated | Application | 通知型 | 当网页拓展监控的数据发生变化之后触发此事件            |
| AfterTaskPaneShow              | Application | 通知型 | 当任务窗格显示之后触发此事件。                  |
| AfterTaskPaneHidden            | Application | 通知型 | 当任务窗格隐藏之后触发此事件                   |
| DocumentBeforeNew              | Application | 询问型 | 在任一文档新建之前触发该事件。                  |
| DocumentBeforeOpen             | Application | 询问型 | 在任一文档打开之前触发该事件。                  |
| DocumentBeforeCopy             | Application | 询问型 | 在任一文档复制之前触发该事件。                  |
| DocumentBeforePaste            | Application | 询问型 | 在任一文档粘贴之前触发该事件。                  |
| FileAfterSave                  | Application | 通知型 | 在任一文档保存之后触发该事件。                  |
| LinkedDataTypeConvert          | Application | 通知型 | 在连接数据类型转变时触发该事件。                 |
| LinkedDataTypeChange           | Application | 通知型 | 在连接数据类型改变时触发该事件。                 |
| LinkedDataTypeRefresh          | Application | 通知型 | 在连接数据类型刷新时触发该事件。                 |
| LinkedDataTypeCancel           | Application | 通知型 | 在连接数据类型取消时触发该事件。                 |
| DocumentAfterPrint             | Application | 通知型 | 该文档打印之后触发该事件。                    |

  
 wps演示支持的api事件为：

| 名称                      | 级别          | 类型  | 触发时机                |
| ----------------------- | ----------- | --- | ------------------- |
| AfterLogin              | Application | 通知型 | 用户登录之后触发该事件。        |
| AfterLogout             | Application | 通知型 | 用户登出之后触发该事件。        |
| AfterPresentationOpen   | Application | 通知型 | 任一演示文稿打开后触发该事件。     |
| AfterTaskPaneHidden     | Application | 通知型 | 当任务窗格隐藏之后触发此事件。     |
| AfterTaskPaneShow       | Application | 通知型 | 当任务窗格显示之后触发此事件。     |
| DocumentAfterPrint      | Application | 通知型 | 当文档打印之后触发此事件。       |
| DocumentBeforeCopy      | Application | 询问型 | 当文档复制之前触发此事件。       |
| DocumentBeforeNew       | Application | 询问型 | 当文档新建之前触发此事件。       |
| DocumentBeforeOpen      | Application | 询问型 | 当文档打开之前触发此事件。       |
| DocumentBeforePaste     | Application | 询问型 | 当文档粘贴之前触发此事件。       |
| DocumentRightsInfo      | Application | 通知型 | 当操作文档权限时会触发此事件。     |
| FileAfterSave           | Application | 通知型 | 当文件保存之后触发此事件。       |
| NewPresentation         | Application | 通知型 | 当新建演示文稿时触发此事件。      |
| PresentationBeforeClose | Application | 询问型 | 任一打开的演示文稿关闭之前触发此事件。 |
| PresentationBeforePrint | Application | 询问型 | 任一演示文稿打印之前触发此事件。    |
| PresentationBeforeSave  | Application | 询问型 | 任一演示文稿被保存之前触发此事件。   |
| PresentationClose       | Application | 通知型 | 任一演示文稿关闭时触发此事件。     |
| PresentationCloseFinal  | Application | 通知型 | 任一演示文稿关闭之后触发此事件。    |
| PresentationNewSlide    | Application | 通知型 | 任一演示文稿新建幻灯片时触发此事件。  |
| PresentationOpen        | Application | 通知型 | 任一演示文稿打开时触发此事件。     |
| PresentationPrint       | Application | 通知型 | 任一演示文稿打印时触发此事件。     |
| PresentationSave        | Application | 通知型 | 任一演示文稿保存时触发此事件。     |
| Quit                    | Application | 通知型 | 任一演示文稿退出时触发此事件。     |
| SlideSelectionChanged   | Application | 通知型 | 演示文稿幻灯片选择变化时触发此事件。  |
| SlideShowBegin          | Application | 通知型 | 演示文稿开始播放时触发此事件。     |
| SlideShowEnd            | Application | 通知型 | 演示文稿结束播放时触发此事件。     |
| SlideShowNextClick      | Application | 通知型 | 演示文稿播放时下一次点击触发此事件。  |
| SlideShowNextSlide      | Application | 通知型 | 演示文稿播放下一个幻灯片时触发此事件。 |
| SlideShowOnNext         | Application | 通知型 | 演示文稿播放点击下一页时触发此事件。  |
| SlideShowOnPrevious     | Application | 通知型 | 演示文稿播放点击上一页时触发此事件。  |
| WindowActivate          | Application | 通知型 | 当激活演示窗口时触发此事件。      |
| WindowSelectionChange   | Application | 通知型 | 活动窗口所选内容更改时将触发此事件。  |

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddApiEventListener](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/ApiEvent/member/AddApiEventListener) | 注册wps事件的回调。 |
| [RemoveApiEventListener](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/ApiEvent/member/RemoveApiEventListener) | 反注册wps事件的回调。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Cancel](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/ApiEvent/member/Cancel) | 当事件是询问型事件时，此属性用于设置是否中止事件进行的状态 |