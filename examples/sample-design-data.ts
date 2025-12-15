/**
 * サンプルデザインデータ
 *
 * このファイルは、Claudeから出力されるデザインデータの形式を示すサンプルです。
 * このデータ形式に従ってデザインデータを作成すると、LandingPageコンポーネントで
 * ランディングページを生成できます。
 */

import type { LPDesignData } from "../src/types";

export const sampleDesignData: LPDesignData = {
  meta: {
    title: "恋するクリスマストレイン 〜縁結びの旅へ〜",
    description:
      "2025年12月21日開催。近江鉄道とアイビーコネクトが贈る、冬限定の婚活イベント。",
    ogImage: "/images/og-image.jpg",
  },
  theme: {
    primary: "221.2 83.2% 53.3%", // HSL format for Tailwind
    accent: "330 81% 60%",
  },
  sections: [
    // ヘッダーセクション
    {
      type: "header",
      data: {
        logo: {
          src: "/images/logo.png",
          alt: "I be connect",
        },
        badge: "冬限定イベント",
        cta: {
          text: "パーティーに参加する",
          href: "https://example.com/register",
        },
      },
    },

    // ヒーローセクション
    {
      type: "hero",
      data: {
        backgroundImage: {
          avif: "/images/hero.avif",
          webp: "/images/hero.webp",
          src: "/images/hero.png",
          alt: "列車で出会うカップル",
        },
        title: {
          avif: "/images/title.avif",
          webp: "/images/title.webp",
          src: "/images/title.png",
          alt: "恋するクリスマストレイン",
        },
        eventDate: "2025年12月21日（日）開催",
        pricing: "参加費：男性6,000円／女性3,000円",
        cta: {
          text: "パーティーに参加する",
          href: "https://example.com/register",
        },
      },
    },

    // イントロセクション
    {
      type: "intro",
      data: {
        partnership: "近江鉄道 × アイビーコネクト",
        subtitle: "〜縁結びの旅へ〜",
        catchcopy: "今年中に\"本気の出会い\"を叶えるあなたへ",
        subcopy: "県内企業で創る地域の縁",
      },
    },

    // ペインセクション
    {
      type: "pain",
      data: {
        title: "こんなお悩み、ありませんか？",
        pains: [
          { text: "アプリで真剣な出会いがない" },
          { text: "仕事が忙しくて出会う時間がない" },
          { text: "結婚相談所はハードルが高そう" },
        ],
        image: {
          src: "/images/pain.png",
          alt: "悩む人",
        },
        empathyMessage: {
          headline: "「気づけば、1年があっという間に過ぎていた…」",
          body: "そんなあなたに、冬のロマンチックな列車で自然な出会いをお届けします。",
        },
      },
    },

    // ソリューションセクション
    {
      type: "solution",
      data: {
        title: "あなたの婚活を全力サポートします",
        subtitle: "婚活サポートの流れ",
        steps: [
          {
            icon: "UserPlus",
            title: "登録",
            description: "下記フォームから応募",
          },
          {
            icon: "Users",
            title: "マッチング",
            description: "トレイントーク＆チームアクティビティで自然な出会い",
          },
          {
            icon: "Calendar",
            title: "お見合い調整",
            description: "公式LINEで日時と場所を調整",
          },
          {
            icon: "Heart",
            title: "交際サポート",
            description: "専任カウンセラーがフォロー",
          },
          {
            icon: "Sparkles",
            title: "成婚",
            description: "アイビーコネクトの支援で幸せなゴールへ",
          },
        ],
      },
    },

    // テスティモニアルセクション
    {
      type: "testimonials",
      data: {
        title: "参加者のリアルな声",
        subtitle: "実際に参加された方々の感想",
        testimonials: [
          {
            text: "ゲームとトークが楽しかったです。ありがとうございました。",
            age: 34,
            gender: "女性",
          },
          {
            text: "初めて婚活に参加しました！緊張したけど楽しかった！",
            age: 32,
            gender: "女性",
          },
          {
            text: "送迎も丁寧で、運営スタッフの対応が良かったです。",
            age: 38,
            gender: "男性",
          },
        ],
      },
    },

    // オファーセクション
    {
      type: "offer",
      data: {
        badge: "2025年冬限定イベント",
        title: "恋するクリスマストレイン\n〜縁結びの旅へ〜",
        infoCards: [
          {
            icon: "Calendar",
            label: "開催日",
            value: "2025年12月21日（日）",
            note: "13:00集合／13:30出発〜16:30",
            color: "blue",
          },
          {
            icon: "Train",
            label: "出発駅",
            value: "近江鉄道 彦根駅",
            note: "→ 米原駅 → 多賀大社前駅",
            color: "pink",
          },
          {
            icon: "Coins",
            label: "参加費",
            value: "男性6,000円／女性3,000円",
            color: "purple",
          },
          {
            icon: "Users",
            label: "対象",
            value: "30〜40代 独身男女",
            note: "各12名",
            color: "green",
          },
        ],
        schedule: [
          { time: "13:00", activity: "彦根駅集合（受付・説明）" },
          { time: "13:30", activity: "出発！1対1の「トレイントーク」" },
          {
            time: "14:40",
            activity: "多賀大社前駅着 → 食べ歩きツアー＆チームアクティビティ",
          },
          { time: "15:00", activity: "縁結びスタンプラリー（ゲーム要素あり）" },
          {
            time: "15:30",
            activity: "レンタルカフェ「もりのみ」でプレゼント交換",
          },
          { time: "15:55", activity: "椅子取りゲーム式フリートーク" },
          { time: "16:30", activity: "解散・結果発表（LINE通知）" },
        ],
        scheduleTitle: "旅のスケジュール",
        image: {
          src: "/images/train.png",
          alt: "近江鉄道 恋するクリスマストレイン",
        },
        specialOffer: {
          title: "期間限定特典",
          description: "11月中の登録で",
          discountText: "500円引き！",
        },
        cta: {
          text: "パーティーに参加する",
          href: "https://example.com/register",
        },
      },
    },

    // FAQセクション
    {
      type: "faq",
      data: {
        title: "よくあるご質問",
        badge: "安心してご参加いただけます",
        items: [
          {
            question: "無理な勧誘はありませんか？",
            answer:
              "結婚相談所ではないため、勧誘は一切ありません。安心してご参加ください。",
          },
          {
            question: "プライバシーは守られますか？",
            answer:
              "登録情報は厳重に管理します。個人情報保護法に基づき、適切に取り扱います。",
          },
          {
            question: "サポートは有料ですか？",
            answer:
              "女性はすべて無料です。男性はお見合い成立時または交際中のみ費用が発生します。（お見合い1件5,000円、交際中サポート料1万円／月）",
          },
          {
            question: "当日の服装は？",
            answer:
              "カジュアルな服装で大丈夫です。冬の寒い時期ですので、暖かい服装でお越しください。",
          },
          {
            question: "一人で参加しても大丈夫？",
            answer:
              "ほとんどの方がお一人での参加です。スタッフが丁寧にサポートしますので、安心してご参加ください。",
          },
        ],
      },
    },

    // クロージングセクション
    {
      type: "closing",
      data: {
        headline: "結婚したいと思った\"今\"が、\n一番のチャンスです。",
        message: "出会いを待つだけでなく、動き出す勇気があなたを変えます。",
        highlight:
          "この冬、あなたの未来が動き出す\"恋する列車\"に、乗りませんか？",
        primaryCta: {
          text: "今すぐ応募する",
          href: "https://example.com/register",
        },
        secondaryCta: {
          text: "お問い合わせはこちら",
          href: "https://example.com/contact",
        },
      },
    },

    // フッターセクション
    {
      type: "footer",
      data: {
        companyName: "アイビーコネクト",
        copyright: "© 2025 I be connect. All rights reserved.",
        links: [
          { text: "プライバシーポリシー", href: "/privacy" },
          { text: "利用規約", href: "/terms" },
          { text: "特定商取引法に基づく表記", href: "/legal" },
        ],
      },
    },
  ],
};
