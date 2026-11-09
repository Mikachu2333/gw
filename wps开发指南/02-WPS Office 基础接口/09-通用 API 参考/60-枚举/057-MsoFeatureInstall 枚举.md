# MsoFeatureInstall 枚举

指定应用程序如何处理对需要尚未安装的功能的方法和属性的调用。

| 名称                                  | 值 | 说明                           |
| ----------------------------------- | - | ---------------------------- |
| **msoFeatureInstallNone**           | 0 | 如果调用了未安装的功能，则在运行时生成一般的自动化错误。 |
| **msoFeatureInstallOnDemand**       | 1 | 提示用户安装新功能。                   |
| **msoFeatureInstallOnDemandWithUI** | 2 | 在安装时显示进度表；但不提示用户安装新功能。       |
