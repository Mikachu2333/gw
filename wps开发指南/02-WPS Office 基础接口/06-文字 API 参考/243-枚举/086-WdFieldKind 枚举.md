# WdFieldKind 枚举

指定 **Field** 对象的域类型。

| 名称                  | 值 | 说明                                                                    |
| ------------------- | - | --------------------------------------------------------------------- |
| **wdFieldKindCold** | 3 | 没有结果的域，如索引项 (XE) 域、目录项 (TC) 域或 Private 域。                             |
| **wdFieldKindHot**  | 1 | 每次显示或页面重新设置格式时自动更新的域，但也可进行手动更新（如 INCLUDEPICTURE 或 FORMDROPDOWN）。      |
| **wdFieldKindNone** | 0 | 无效的域（如其中没有任何内容的一对域字符）。                                                |
| **wdFieldKindWarm** | 2 | 能进行更新并有结果的域。该类型包括随数据源变化而自动更新的域，也包括那些可以手动进行更新的域（如 DATE 或 INCLUDETEXT）。 |
