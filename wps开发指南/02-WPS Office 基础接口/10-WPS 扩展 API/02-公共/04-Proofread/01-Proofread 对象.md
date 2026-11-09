
# Proofread 对象

代表文档校对能力对象，用于发起通用/批量/AI 校对，并对检查结果进行修改、忽略、撤销及获取上下文。

## 说明

`Proofread` 为扩展接口对象。文字、表格、演示通过 `GetDocumentEx` / `GetWorkbookEx` / `GetPresentationEx` 获取；PDF 直接挂载在 `ActiveDocument` 上。

各组件获取方式与 `Execute` 的 `proofreadMode` 如下：

| 组件 | 获取方式 | proofreadMode |
| :--- | :--- | :--- |
| 文字（WPS） | `Application.ActiveDocument.GetDocumentEx().Proofread` | `1`：通用校对；`5`：AI 校对（其它值会被纠正为 `1`） |
| 表格（ET） | `Application.ActiveWorkbook.GetWorkbookEx().Proofread` | 默认/推荐 `3`：跨 Sheet 批量校对 |
| 演示（WPP） | `Application.ActivePresentation.GetPresentationEx().Proofread` | 默认/推荐 `1`：通用校对 |
| PDF | `Application.ActiveDocument.Proofread` | 默认/推荐 `1`：通用校对 |

`proofreadMode` 取值定义（与实现枚举一致）：

| 值 | 含义 |
| :--- | :--- |
| `1` | 通用校对 |
| `3` | 跨 Sheet 批量校对（表格） |
| `5` | AI 校对 |

建议调用顺序：`Execute`（等待 `progress == 100`）→ `ModifyErrorItem` / `IgnoreErrorItem` / `RevokeErrorItem` / `GetErrorItemContext` → `Close`。

参数均为平铺位置传参，不支持对象传参。

同一时间同一组件内仅允许一个 `Execute` 校对会话；错词操作（修改/忽略/撤销/取上下文）不占用该会话锁，但同一文档同时仅允许一个未完成的错词回调。

调用依赖校对插件与账号权益；未登录或无权益时会通过回调返回错误。

```javascript
// 文字
var proofread = Application.ActiveDocument.GetDocumentEx().Proofread;
```

```javascript
// 表格
var proofread = Application.ActiveWorkbook.GetWorkbookEx().Proofread;
```

```javascript
// 演示
var proofread = Application.ActivePresentation.GetPresentationEx().Proofread;
```

```javascript
// PDF
var proofread = Application.ActiveDocument.Proofread;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/Execute) | 发起校对任务，通过回调返回进度与错误项。 |
| [GetErrorItemContext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/GetErrorItemContext) | 获取指定错误项的上下文信息。 |
| [IgnoreErrorItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/IgnoreErrorItem) | 忽略指定错误项。 |
| [ModifyErrorItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/ModifyErrorItem) | 将指定错误项修改为给定文本。 |
| [RevokeErrorItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/RevokeErrorItem) | 撤销对指定错误项的处理。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/Proofread/member/Close) | 关闭校对并释放相关资源。 |
