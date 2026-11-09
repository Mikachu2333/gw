# MsoExtrusionColorType 枚举

指定延伸区域的颜色是否基于原图形的填充（延伸区域的正面），并随着图形填充的改变而自动改变，或者延伸区域的颜色是否与图形填充无关。与 **ThreeDFormat** 对象的 **ExtrusionColorType** 属性一起使用。

| 名称                             | 值   | 说明              |
| ------------------------------ | --- | --------------- |
| **msoExtrusionColorAutomatic** | 1   | 延伸区域的颜色基于图形填充。  |
| **msoExtrusionColorCustom**    | 2   | 延伸区域的颜色独立于图形填充。 |
| **msoExtrusionColorTypeMixed** | \-2 | 只返回值，表示其他状态的组合。 |
