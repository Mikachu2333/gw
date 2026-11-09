# MsoSyncEventType 枚举

指定 **Sync** 事件的返回值。在 WPS 中，与 **Document** 对象的 **Sync** 事件或 **Application** 对象的 **DocumentSync** 事件一起使用。在 ET 中，与 **Workbook** 对象的 **Sync** 事件或 **Application** 对象的 **WorkbookSync** 事件一起使用。在 WPP 中，与 **Application** 对象的 **PresentationSync** 事件一起使用。

| 注释                                     |
| -------------------------------------- |
| 自 WPS Office 2015 开始，此对象或成员已弃用，不应再行使用。 |

| 名称                                | 值 | 说明      |
| --------------------------------- | - | ------- |
| **msoSyncEventDownloadFailed**    | 2 | 下载失败。   |
| **msoSyncEventDownloadInitiated** | 0 | 下载已开始   |
| **msoSyncEventDownloadNoChange**  | 6 | 未检测到更改。 |
| **msoSyncEventDownloadSucceeded** | 1 | 下载成功。   |
| **msoSyncEventOffline**           | 7 | 脱机。     |
| **msoSyncEventUploadFailed**      | 5 | 上载失败。   |
| **msoSyncEventUploadInitiated**   | 3 | 上载已开始。  |
| **msoSyncEventUploadSucceeded**   | 4 | 上载成功。   |
