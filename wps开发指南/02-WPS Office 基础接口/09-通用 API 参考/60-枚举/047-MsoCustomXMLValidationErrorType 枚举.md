# MsoCustomXMLValidationErrorType 枚举

指示将如何清除或生成验证错误。

| 名称                                                  | 值 | 说明                                                 |
| --------------------------------------------------- | - | -------------------------------------------------- |
| **msoCustomXMLValidationErrorAutomaticallyCleared** | 1 | 指定当对错误所绑定到的节点进行任何更改时错误将自行清除。                       |
| **msoCustomXMLValidationErrorManual**               | 2 | 指定直到调用 **Delete** 方法时才清除错误。                        |
| **msoCustomXMLValidationErrorSchemaGenerated**      | 0 | 指定当存在可用于自定义 XML 部分的非空架构集合且验证有效时，对该部分的任何更改都将导致验证错误。 |
