# WdMailMergeState 枚举

指定邮件合并操作的状态。

| 名称                           | 值 | 说明              |
| ---------------------------- | - | --------------- |
| **wdDataSource**             | 5 | 不带主文档的数据源。      |
| **wdMainAndDataSource**      | 2 | 带附加数据源的主文档。     |
| **wdMainAndHeader**          | 3 | 带附加域名源的主文档。     |
| **wdMainAndSourceAndHeader** | 4 | 带附加数据源和域名源的主文档。 |
| **wdMainDocumentOnly**       | 1 | 不附带数据的主文档。      |
| **wdNormalDocument**         | 0 | 在邮件合并操作中不涉及文档。  |
