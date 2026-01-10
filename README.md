# MAGI LP Template

ClaudeのAIが生成するTypeScript形式のデザインデータから、ランディングページを動的に生成するReactコンポーネントライブラリです。

## 概要

MAGI LP Templateは、UIコンポーネント、型定義、ユーティリティ関数を含む完全なエコシステムを提供します。Claudeから出力されるデザインデータをそのまま渡すだけで、プロダクションレディなLPを生成できます。

## パッケージ情報

| 項目 | 値 |
|------|-----|
| パッケージ名 | `@aivec/magi-lp-template` |
| バージョン | 1.0.0 |
| ライセンス | MIT |
| 出力形式 | ESM (ES2020) + CommonJS |

## 技術スタック

| カテゴリ | 技術 | 用途 |
|---------|------|------|
| フレームワーク | React 18/19 | UI構築 |
| 言語 | TypeScript 5.6+ | 型安全性 |
| スタイリング | Tailwind CSS 3+ | ユーティリティCSS |
| UIコンポーネント | Radix UI | アクセシビリティ |
| アイコン | Lucide React | 40+アイコン |
| ビルドツール | Vite 6.3.5 | 高速ビルド |
| トランスパイル | SWC | 高速処理 |
| 画像最適化 | Sharp | AVIF/WebP変換 |
| クラス管理 | CVA + tailwind-merge | スタイル合成 |

## インストール

```bash
npm install @aivec/magi-lp-template
```

## 基本的な使い方

### 1. デザインデータからLPを生成

```tsx
import { LandingPage } from '@aivec/magi-lp-template';
import '@aivec/magi-lp-template/styles.css';
import type { LPDesignData } from '@aivec/magi-lp-template';

// Claudeから出力されたデザインデータ
const designData: LPDesignData = {
  meta: {
    title: "イベントLP",
    description: "イベントの説明文",
  },
  theme: {
    primary: "#3b82f6",
    accent: "#ec4899",
  },
  sections: [
    {
      type: "hero",
      data: {
        backgroundImage: { src: "/images/hero.jpg", alt: "ヒーロー画像" },
        title: "イベントタイトル",
        cta: { text: "今すぐ申し込む", href: "/register" },
      },
    },
    // ... 他のセクション
  ],
};

function App() {
  return <LandingPage data={designData} />;
}
```

### 2. 個別のセクションコンポーネントを使用

```tsx
import {
  HeroSection,
  PainSection,
  SolutionSection,
  FAQSection,
} from '@aivec/magi-lp-template';

function CustomLP() {
  return (
    <>
      <HeroSection data={heroData} />
      <PainSection data={painData} />
      <SolutionSection data={solutionData} />
      <FAQSection data={faqData} />
    </>
  );
}
```

### 3. Tailwind CSSの設定

```js
// tailwind.config.js
module.exports = {
  presets: [require('@aivec/magi-lp-template/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@aivec/magi-lp-template/dist/**/*.js',
  ],
};
```

## 利用可能なセクション

| セクション | 説明 |
|-----------|------|
| `HeaderSection` | 固定ヘッダー（ロゴ・CTA） |
| `HeroSection` | ヒーローセクション（背景画像・タイトル・CTA） |
| `IntroSection` | イントロセクション（パートナーシップ・キャッチコピー） |
| `PainSection` | ペインポイント（課題・悩み） |
| `SolutionSection` | ソリューション（ステップ形式） |
| `TestimonialsSection` | お客様の声 |
| `OfferSection` | イベント詳細・スケジュール |
| `FAQSection` | よくある質問（アコーディオン） |
| `ClosingSection` | クロージング（最終CTA） |
| `FooterSection` | フッター |

## 型定義

Claudeから出力されるデザインデータの型定義:

```typescript
import type { LPDesignData } from '@aivec/magi-lp-template';

const data: LPDesignData = {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  },
  theme?: {
    primary?: string;   // CSS color value
    accent?: string;
    background?: string;
    foreground?: string;
  },
  sections: SectionConfig[];
};
```

詳細な型定義は `src/types/design-data.ts` を参照してください。

## 開発

### スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 (ポート3000) |
| `npm run build` | ライブラリビルド |
| `npm run build:demo` | デモサイトビルド |
| `npm run build:ssg` | SSGプリレンダリング |
| `npm run build:production` | **本番ビルド（推奨）** |
| `npm run optimize:images` | 画像をAVIF/WebPに変換 |
| `npm run convert:images` | `<img>`を`<picture>`に変換 |
| `npm run inject:meta` | OGP/metaタグを注入 |
| `npm run inject:analytics` | GA/Meta Pixelタグを注入 |
| `npm run inject:all` | meta + analytics + 画像変換を一括実行 |
| `npm run typecheck` | TypeScript型チェック |

## ドキュメント

- [ワークフロー](./docs/workflow.md) - HTML&CSSからSSG形式への制作フロー
- [アーキテクチャ](./docs/architecture.md) - プロジェクト構造と設計パターン
- [型定義](./docs/types.md) - TypeScript型定義の詳細
- [コンポーネント](./docs/components.md) - セクション・UIコンポーネント一覧
- [設定](./docs/configuration.md) - 設定ファイルの説明

## ライセンス

MIT
