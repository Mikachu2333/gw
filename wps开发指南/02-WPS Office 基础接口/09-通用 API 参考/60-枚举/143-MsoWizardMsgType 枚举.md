# MsoWizardMsgType 枚举

| 注释                                          |
| ------------------------------------------- |
| 在 WPS Office 的当前版本中已弃用应答向导和 **Balloon** 对象。 |

指定调用向导的回调过程的上下文。用作被设计为与自定义向导一起使用的回调过程中的参数。 

| 名称                            | 值 | 说明                                                                |
| ----------------------------- | - | ----------------------------------------------------------------- |
| **msoWizardMsgLocalStateOff** | 2 | 用户在判定或分支气球中单击了鼠标右键。                                               |
| **msoWizardMsgLocalStateOn**  | 1 | 不支持。                                                              |
| **msoWizardMsgResuming**      | 5 | 如果为 Act 参数指定了 **msoWizardActResume**，则传递到 **ActivateWizard** 方法。  |
| **msoWizardMsgShowHelp**      | 3 | 用户在判定或分支气球中单击了鼠标左键。                                               |
| **msoWizardMsgSuspending**    | 4 | 如果为 Act 参数指定了 **msoWizardActSuspend**，则传递到 **ActivateWizard** 方法。 |
