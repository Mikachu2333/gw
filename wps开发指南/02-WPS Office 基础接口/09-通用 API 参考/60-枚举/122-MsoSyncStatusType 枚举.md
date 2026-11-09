# MsoSyncStatusType 枚举

指定活动文档的本地副本与服务器副本的同步状态。与 **Sync** 对象的 **Status** 属性一起使用。

| 注释                                     |
| -------------------------------------- |
| 自 WPS Office 2015 开始，此对象或成员已弃用，不应再行使用。 |

| 名称                                 | 值 | 说明                                            |
| ---------------------------------- | - | --------------------------------------------- |
| **msoSyncStatusConflict**          | 4 | 本地副本和服务器副本都发生更改。                              |
| **msoSyncStatusError**             | 6 | 发生错误。使用 **Sync** 对象的 **ErrorType** 属性确定确切的错误。 |
| **msoSyncStatusLatest**            | 1 | 文档已处于同步状态。                                    |
| **msoSyncStatusLocalChanges**      | 3 | 仅本地副本发生更改。                                    |
| **msoSyncStatusNewerAvailable**    | 2 | 仅服务器副本发生更改。                                   |
| **msoSyncStatusNoSharedWorkspace** | 0 | 无共享工作区。                                       |
| **msoSyncStatusNotRoaming**        | 0 | 不需要同步。                                        |
| **msoSyncStatusSuspended**         | 5 | 同步已挂起。                                        |
