# MsoCalloutDropType 枚举

指定相对于文本边界框的标注线起始位置。与 **CalloutFormat** 对象的 **PresetDrop** 方法一起使用。

| 名称                       | 值   | 说明                                                                                                   |
| ------------------------ | --- | ---------------------------------------------------------------------------------------------------- |
| **msoCalloutDropBottom** | 4   | 底部。                                                                                                  |
| **msoCalloutDropCenter** | 3   | 中心。                                                                                                  |
| **msoCalloutDropCustom** | 1   | 自定义。如果该值用作 **PresetDrop** 属性的值，则 **CalloutFormat** 对象的 **Drop** 和 **AutoAttach** 属性用于确定标注线连接到文本框的位置。 |
| **msoCalloutDropMixed**  | \-2 | 只返回值，表示其他状态的组合。                                                                                      |
| **msoCalloutDropTop**    | 2   | 顶部。                                                                                                  |
