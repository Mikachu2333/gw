# CreateObject

创建指定名称的外部对象实例。

## 语法

```typescript
function CreateObject(ModuleName: string, InAnalyzer?: boolean): any
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ModuleName | 必选 | string | 模块名称或 WPS 应用标识符（不区分大小写）。 |
| InAnalyzer | 可选 | boolean | 是否以 JS 分析器模式创建对象；省略或为 `false` 时按默认行为处理。传入 `true` 时走 addon 的 `creatObject(..., bJSAstAnalyzer)` 分析器路径（见 `krootapifunction.cpp` L680–693）。 |

## 返回值

创建的对象实例。

## 说明

根据模块名创建对象。传入 WPS 应用名称时创建跨进程的 Application 对象，可用于在宏中操控其他 WPS 应用实例：
`"kwps.application"` 对应 WPS 文字，`"kwpp.application"` 对应 WPS 演示，`"ket.application"` 对应 WPS 表格（不区分大小写）。
传入其他名称时加载对应的 addon 扩展模块并返回其对象实例。模块不存在或加载失败时抛出错误。
可选传入 `InAnalyzer` 为 `true` 时，以分析器模式加载 addon 并创建对象；一般宏场景无需传入。

## 示例

```javascript
/* 创建 WPS 文字 Application 对象 */
function test() {
  const wpsApp = CreateObject("kwps.application")
  Debug.Print("WPS 文字已连接")
}
```

```javascript
/* 创建 WPS 表格 Application 对象 */
function test() {
  const etApp = CreateObject("ket.application")
  Debug.Print("WPS 表格已连接")
}
```
