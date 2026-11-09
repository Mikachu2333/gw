# Application.AddCustomFunction

注册一个可在单元格公式中使用的自定义函数（仅 WPS 表格）。

## 语法

```typescript
function AddCustomFunction(namespace: string, name: string, func: Function, metadata?: any): void
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| namespace | 必选 | string | 函数的命名空间，用于组织和区分不同来源的自定义函数；若加载项在 manifest.xml 中配置了 UDF 命名空间，传入值须与之完全一致，否则返回无效参数错误。 |
| name | 必选 | string | 函数名称，在公式中使用。 |
| func | 必选 | Function | 实现函数逻辑的 JavaScript 函数。 |
| metadata | 可选 | any | 函数元数据（JSON 对象）。传入时须包含 `parameters`（数组，每项含 `name`、`type`、`description`）和 `result`（含 `type`，缺省为 `"any"`）；可选 `description` 作为函数帮助文本。未传 metadata 时仅注册函数，不初始化元数据。 |

## 说明

将 JavaScript 函数注册为 WPS 表格的自定义计算函数。注册后用户可在单元格公式中像使用内置函数一样调用它。`namespace` 和 `name` 组合构成函数的完整标识，不能同时为空。

此方法仅在 WPS 表格中可用——在 WPS 文字或 WPS 演示中此属性不存在。

## 示例

```javascript
/* 注册简单的自定义函数 */
function test() {
  if (Application.AddCustomFunction !== undefined) {
    Application.AddCustomFunction("MyAddin", "DOUBLE", function(value) {
      return value * 2
    })
  }
}
```

```javascript
/* 注册带元数据的自定义函数 */
function testWithMetadata() {
  Application.AddCustomFunction("MyAddin", "SUM2", function(a, b) {
    return a + b
  }, {
    description: "两数求和",
    result: { type: "number" },
    parameters: [
      { name: "a", type: "number", description: "第一个数" },
      { name: "b", type: "number", description: "第二个数" }
    ]
  })
}
```
