# MAGI LP Template

Claudeから出力されるTS形式のデザインデータをインポートして、ランディングページを生成できるReactコンポーネントライブラリです。

## インストール

```bash
npm install magi-lp-template
```

## 基本的な使い方

### 1. デザインデータからLPを生成

```tsx
import { LandingPage } from 'magi-lp-template';
import type { LPDesignData } from 'magi-lp-template';

// Claudeから出力されたデザインデータ
const designData: LPDesignData = {
  meta: {
    title: "イベントLP",
    description: "イベントの説明文",
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
} from 'magi-lp-template';

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
  presets: [require('magi-lp-template/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/magi-lp-template/dist/**/*.js',
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
import type { LPDesignData } from 'magi-lp-template';

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

### デモサイトの起動

```bash
npm run dev
```

### ライブラリのビルド

```bash
npm run build
```

### デモサイトのビルド（SSG）

```bash
npm run build:demo
npm run build:ssg
```

## ライセンス

MIT
