/**
 * お宮参りLP - ブライダル・ポート
 *
 * data-cv属性を持つ要素は自動でコンバージョン追跡されます
 * ビルド時にコンバージョンコードが自動挿入されます
 */

document.addEventListener('DOMContentLoaded', function() {
  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ヘッダーのスクロール表示/非表示
  const header = document.querySelector('.header');
  if (header) {
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 50) {
            header.style.transform = 'translateY(0)';
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
          } else {
            header.style.transform = 'translateY(0)';
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // スクロールアニメーション（IntersectionObserver）
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // アニメーション対象要素を監視
  document.querySelectorAll('.reason-card, .shrine-card, .flow-step, .pain-item, .solution-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // is-visibleクラスが付いたらアニメーション
  const style = document.createElement('style');
  style.textContent = `
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // 電話リンクのスマホ判定（PCではクリップボードにコピー）
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const tel = this.getAttribute('href').replace('tel:', '');

        // クリップボードにコピー
        navigator.clipboard.writeText(tel).then(() => {
          // 視覚的フィードバック
          const originalText = this.textContent;
          const originalBg = this.style.backgroundColor;
          this.textContent = 'コピーしました!';
          this.style.backgroundColor = '#4CAF50';
          this.style.color = '#fff';
          this.style.borderColor = '#4CAF50';

          setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = originalBg;
            this.style.color = '';
            this.style.borderColor = '';
          }, 2000);
        }).catch(() => {
          // フォールバック: 選択状態にする
          const range = document.createRange();
          const tempSpan = document.createElement('span');
          tempSpan.textContent = tel;
          tempSpan.style.position = 'fixed';
          tempSpan.style.top = '-9999px';
          document.body.appendChild(tempSpan);
          range.selectNode(tempSpan);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
          document.body.removeChild(tempSpan);

          this.textContent = 'コピーしました!';
          setTimeout(() => {
            this.textContent = tel;
          }, 2000);
        });
      });
    });
  }
});

/**
 * コンバージョン追跡用のプレースホルダー
 * ビルド時に実際のコードに置き換えられます
 */
// __CONVERSION_CODE_PLACEHOLDER__
