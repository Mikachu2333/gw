# MsoSyncConflictResolutionType 枚举

指定在同步共享文档时如何解决冲突。与 **Sync** 对象的 **ResolveConflict** 方法一起使用。

| 名称                            | 值 | 说明                                                                                                                  |
| ----------------------------- | - | ------------------------------------------------------------------------------------------------------------------- |
| **msoSyncConflictClientWins** | 0 | 用本地副本代替服务器副本。                                                                                                       |
| **msoSyncConflictMerge**      | 2 | 将对服务器副本所做的更改合并到本地副本中。要解决冲突并成功地合并更改，必须在合并更改后保存活动文档，然后再次使用 **msoSyncConflictClientWins** 选项调用 **ResolveConflict** 方法。 |
| **msoSyncConflictServerWins** | 1 | 用服务器副本代替本地副本。                                                                                                       |
