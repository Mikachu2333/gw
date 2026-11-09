# WdHorizontalLineWidthType 枚举

指定 WPS 如何解释指定横线的宽度（长度）。

| 名称                               | 值   | 说明                                                                                                                                       |
| -------------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **wdHorizontalLineFixedWidth**   | \-2 | WPS 将指定横线的宽度（长度）解释为固定值（以磅为单位）。该值为使用 **AddHorizontalLine** 方法添加的横线的默认值。设置与横线相关联的 **InlineShape** 对象的 **Width** 属性可将 **WidthType** 属性设为该值。 |
| **wdHorizontalLinePercentWidth** | \-1 | WPS 将指定横线的宽度（长度）解释为屏幕宽度的百分比。该值为使用 **AddHorizontalLineStandard** 方法添加的横线的默认值。设置横线的 **PercentWidth** 属性可将 **WidthType** 属性设为该值。            |
