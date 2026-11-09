# Annot.LineStyle

获取或设置注释的线型。 **Long** 类型，可读写。

## 语法

express.**LineStyle**

express   一个代表 **Annot** 对象的变量。

## 类型

long

## 说明

| 值 | 样式 | 说明 |
|---|------|------|
| 0 | 实线 | Solid |
| 1 | 点线 | Dashed，dash pattern [2, x] |
| 2 | 短虚线 | Dashed，dash pattern [3, x] |
| 3 | 中虚线 | Dashed，dash pattern [4, x] |
| 4 | 点划线 | Dashed，dash pattern [4, 3, 2, 3] |
| 5 | 长点划线 | Dashed，dash pattern [4, 3, 16, 3] |
| 6 | 双点划线 | Dashed，dash pattern [8, 4, 4, 4] |
| 7 | 云朵线（小波瓣） | Cloudy，intensity = 1 |
| 8 | 云朵线（大波瓣） | Cloudy，intensity = 2 |

**Dash Pattern 格式说明（PDF 规范）**

`dash pattern` 数组来自 PDF 规范（ISO 32000）的线型定义，数组元素交替表示"画线长度"和"间隔长度"，单位为 pt（磅），按顺序循环：

```
[dash₁, gap₁, dash₂, gap₂, ...]
```

例如 `[4, 3, 2, 3]` 表示：画 4pt → 空 3pt → 画 2pt → 空 3pt → 循环。

表中 `x` 为与线宽相关的动态间隔值，由渲染器自动计算，调用者无需关心。

值 7、8 的云朵线不使用 dash pattern，而是 PDF 注释规范中独立的边框效果（border effect）；`intensity` 控制波瓣大小。

## 示例

```JavaScript
annot.LineStyle = 0; // 实线
```
